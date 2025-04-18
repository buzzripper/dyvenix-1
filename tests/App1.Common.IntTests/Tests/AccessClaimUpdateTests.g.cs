//------------------------------------------------------------------------------------------------------------
// This file was auto-generated. Any changes made to it will be lost.
//------------------------------------------------------------------------------------------------------------
using System;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.Extensions.DependencyInjection;
using Xunit.Abstractions;
using Dyvenix.Core.Tests;
using Dyvenix.App1.Common.ApiClients;
using Dyvenix.App1.Tests.Common.Data;
using Dyvenix.App1.Common.Entities;
using Dyvenix.App1.Tests.Common;
using Dyvenix.App1.Data;
using Dyvenix.App1.Data.Contexts;
using Microsoft.EntityFrameworkCore;
using Microsoft.VisualStudio.TestPlatform.Utilities;
using Xunit;

namespace Dyvenix.App1.Common.IntTests.Tests;

#region Fixture

public class AccessClaimUpdateTestsFixture : IDisposable
{
	public AccessClaimUpdateTestsFixture()
	{
		ServerApiFactory = new ServerApiFactory();
		ServiceProvider = ServerApiFactory.Services;
	}

	public ServerApiFactory ServerApiFactory { get; private set; }
	public IServiceProvider ServiceProvider { get; }

	public IAccessClaimApiClient AccessClaimApiClient { get; }
	public IDataManager DataManager { get; }

	public void Dispose()
	{
		ServerApiFactory.Dispose();
	}
}

#endregion

[Collection("Global Collection")]
public class AccessClaimUpdateTests : TestBase, IClassFixture<AccessClaimUpdateTestsFixture>, IAsyncLifetime, IDisposable
{
	#region Fields

	private readonly AccessClaimUpdateTestsFixture _classFixture;
	private readonly IAccessClaimApiClient _apiClient;
	private readonly ITestOutputHelper _output;
	private readonly Db _db;
	private DataSet _ds;

	#endregion

	#region Ctors / Init

	public AccessClaimUpdateTests(AccessClaimUpdateTestsFixture classFixture, ITestOutputHelper output)
	{
		_classFixture = classFixture;
		_output = output;

		_apiClient = classFixture.ServiceProvider.GetRequiredService<IAccessClaimApiClient>();
		_db = classFixture.ServiceProvider.GetRequiredService<IDbContextFactory>().CreateDbContext();
	}

	// This runs *before each test*
	public async Task InitializeAsync()
	{
		// Have to reset data each test run because we are adding/updating/deleting rows
		var dataManager = _classFixture.ServiceProvider.GetRequiredService<IDataManager>();
		_ds = await dataManager.ResetDataSet(DataSetType.Default);
	}

	// This runs *after each test*
	public async Task DisposeAsync()
	{
		// Async teardown logic here
		await Task.Delay(100); // Simulate cleanup work
	}

	public void Dispose()
	{
	}

	#endregion

	#region Create

	[Fact]
	public async Task Create_ValidId()
	{
		// Arrange
		var accessClaim = CreateAccessClaim();
		// Act
		var newId = await _apiClient.CreateAccessClaim(accessClaim);
		// Assert
		Assert.Equal(accessClaim.Id, newId);
		var retAccessClaim = await _db.AccessClaim.FindAsync(newId);
		Assert.NotNull(retAccessClaim);
		Assert.Equal(newId, retAccessClaim.Id);
	}

	[Fact]
	public async Task Create_InvalidId()
	{
		// Arrange
		var accessClaim = CreateAccessClaim();
		accessClaim.Id = Guid.Empty;

		// Act
		var newId = await _apiClient.CreateAccessClaim(accessClaim);

		// Assert
		Assert.NotEqual(Guid.Empty, newId);
		var retAccessClaim = await _db.AccessClaim.FindAsync(newId);
		Assert.NotNull(retAccessClaim);
		Assert.Equal(newId, retAccessClaim.Id);
	}

	[Fact]
	public async Task Create_NullAccessClaim()
	{
		// Act / Assert
		await Assert.ThrowsAsync<ArgumentNullException>(async () => await _apiClient.CreateAccessClaim(null));
	}

	#endregion

	#region Delete

	[Fact]
	public async Task Delete_Success()
	{
		// Arrange
		var accessClaim = _ds.AccessClaim.Skip(RndInt(0, _ds.AccessClaim.Count - 1)).First();
		var id = accessClaim.Id;

		_output.WriteLine($"id = {id}");

		// Act
		var result = await _apiClient.DeleteAccessClaim(id);

		// Assert
		//_db.ChangeTracker.Clear();
		Assert.True(result);
	}

	#endregion
	// Helper Methods

	private AccessClaim CreateAccessClaim()
	{
		return new AccessClaim {
			Id = Guid.NewGuid(),
			ClaimName = RndStr(100),
			AppUserId = GetRndAppUserPk()
		};
	}

	private Guid GetRndAppUserPk()
	{
		var appUserList = _db.AppUser.ToList();
		return appUserList.Skip(RndInt(1, appUserList.Count)).First().Id;
	}


}

