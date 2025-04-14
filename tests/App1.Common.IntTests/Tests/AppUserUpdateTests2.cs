//------------------------------------------------------------------------------------------------------------
// This file was auto-generated. Any changes made to it will be lost.
//------------------------------------------------------------------------------------------------------------
using System;
using System.Threading.Tasks;
using Microsoft.Extensions.DependencyInjection;
using Xunit.Abstractions;
using Dyvenix.App1.Common.ApiClients;
using Dyvenix.App1.Tests.Common.Data;
using Dyvenix.App1.Common.Entities;
using Dyvenix.App1.Tests.Common;
using Dyvenix.App1.Data;
using Dyvenix.App1.Data.Contexts;

namespace Dyvenix.App1.Common.IntTests.Tests;

#region Fixture

public class AppUserUpdateTestsFixture2 : IDisposable
{
	public AppUserUpdateTestsFixture2()
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
public class AppUserUpdateTests2 : IClassFixture<AppUserUpdateTestsFixture2>, IDisposable
{
	#region Fields

	private readonly IAppUserApiClient _apiClient;
	private readonly ITestOutputHelper _output;
	private readonly Db _db;
	private readonly DataSet _ds;

	#endregion

	#region Ctors / Init

	public AppUserUpdateTests2(AppUserUpdateTestsFixture2 classFixture, ITestOutputHelper output)
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

	#region Create Tests

	[Fact]
	public async Task Create_IdProvided_Success()
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
	public async Task Create_IdNotProvided_Success()
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
	public async Task Create_Validation_Null()
	{
		// Act / Assert
		await Assert.ThrowsAsync<ArgumentNullException>(async () => await _apiClient.CreateAppUser(null));
	}

	#endregion

	#region Helper Methods

	private AppUser CreateAppUser()
	{
		return new AppUser {
			Id = Guid.NewGuid(),
			IsEnabled = true,
			FirstName = Guid.NewGuid().ToString(),
			LastName = Guid.NewGuid().ToString(),
			Email = Guid.NewGuid().ToString(),
			CompanyId = Guid.NewGuid().ToString().Substring(0, 10),
			ExtId = Guid.NewGuid().ToString(),
			GroupCode = TestUtils.PctChance(80) ? TestUtils.Rnd(0, int.MaxValue) : null,
			UserType = (UserType)TestUtils.Rnd(0, Enum.GetNames<UserType>().Length)
		};
	}

	#endregion
}

