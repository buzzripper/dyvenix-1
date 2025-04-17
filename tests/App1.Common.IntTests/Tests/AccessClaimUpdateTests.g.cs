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
public class AccessClaimUpdateTests : TestBase, IClassFixture<AccessClaimUpdateTestsFixture>, IDisposable
{
	#region Fields

	private readonly IAccessClaimApiClient _apiClient;
	private readonly ITestOutputHelper _output;
	private readonly Db _db;
	private readonly DataSet _ds;

	#endregion

	#region Ctors / Init

	public AccessClaimUpdateTests(AccessClaimUpdateTestsFixture classFixture, ITestOutputHelper output)
	{
		_apiClient = classFixture.ServiceProvider.GetRequiredService<IAccessClaimApiClient>();
		_db = classFixture.ServiceProvider.GetRequiredService<IDbContextFactory>().CreateDbContext();
		_output = output;

		// Reset data each test run because we are adding/updating/deleting rows
		var dataManager = classFixture.ServiceProvider.GetRequiredService<IDataManager>();
		_ds = dataManager.ResetDataSet(DataSetType.Default).GetAwaiter().GetResult();
	}

	public void Dispose()
	{
	}

	#endregion

	#region Create Tests

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

	#endregion

}

