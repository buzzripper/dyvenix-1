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

public class AppUserUpdateTestsFixture : IDisposable
{
	public AppUserUpdateTestsFixture()
	{
		ServerApiFactory = new ServerApiFactory();
		ServiceProvider = ServerApiFactory.Services;
	}

	public ServerApiFactory ServerApiFactory { get; private set; }
	public IServiceProvider ServiceProvider { get; }

	public IAppUserApiClient AppUserApiClient { get; }
	public IDataManager DataManager { get; }

	public void Dispose()
	{
		ServerApiFactory.Dispose();
	}
}

#endregion

[Collection("Global Collection")]
public class AppUserUpdateTests : TestBase, IClassFixture<AppUserUpdateTestsFixture>, IDisposable
{
	#region Fields

	private readonly IAppUserApiClient _apiClient;
	private readonly ITestOutputHelper _output;
	private readonly Db _db;
	private readonly DataSet _ds;

	#endregion

	#region Ctors / Init

	public AppUserUpdateTests(AppUserUpdateTestsFixture classFixture, ITestOutputHelper output)
	{
		_apiClient = classFixture.ServiceProvider.GetRequiredService<IAppUserApiClient>();
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

	#region Single Methods

	[Fact]
	public async Task Create_ValidId()
	{
		// Arrange
		var appUser = CreateAppUser();
		// Act
		var newId = await _apiClient.CreateAppUser(appUser);
		// Assert
		Assert.Equal(appUser.Id, newId);
		var retAppUser = await _db.AppUser.FindAsync(newId);
		Assert.NotNull(retAppUser);
		Assert.Equal(newId, retAppUser.Id);
	}

	[Fact]
	public async Task Create_InvalidId()
	{
		// Arrange
		var appUser = CreateAppUser();
		appUser.Id = Guid.Empty;

		// Act
		var newId = await _apiClient.CreateAppUser(appUser);

		// Assert
		Assert.NotEqual(Guid.Empty, newId);
		var retAppUser = await _db.AppUser.FindAsync(newId);
		Assert.NotNull(retAppUser);
		Assert.Equal(newId, retAppUser.Id);
	}

	[Fact]
	public async Task Create_NullAppUser()
	{
		// Act / Assert
		await Assert.ThrowsAsync<ArgumentNullException>(async () => await _apiClient.CreateAppUser(null));
	}

	// Helper Methods

	private AppUser CreateAppUser()
	{
		return new AppUser {
			Id = Guid.NewGuid(),
			FirstName = RndStr(100),
			LastName = RndStr(100),
			Email = RndStr(200),
			ExtId = RndStr(68),
			UserType = RndEnum<UserType>()
		};
	}

	#endregion

}

