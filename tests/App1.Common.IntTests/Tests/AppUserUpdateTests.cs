//------------------------------------------------------------------------------------------------------------
// This file was auto-generated. Any changes made to it will be lost.
//------------------------------------------------------------------------------------------------------------
using System;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.Extensions.DependencyInjection;
using Xunit.Abstractions;
using Dyvenix.App1.Common.ApiClients;
using Dyvenix.App1.Tests.Common.Data;
using Dyvenix.App1.Common.Entities;
using Dyvenix.App1.Tests.Common;

namespace Dyvenix.App1.Common.IntTests.Tests;

#region Fixture

public class AppUserUpdateTestsFixture : IClassFixture<GlobalTestFixture>, IDisposable
{
	public AppUserUpdateTestsFixture(GlobalTestFixture globalFixture)
	{
		ServerApiFactory = new ServerApiFactory();
		ServiceProvider = ServerApiFactory.Services;

		this.AppUserApiClient = ServiceProvider.GetRequiredService<IAppUserApiClient>();
		this.DataManager = ServiceProvider.GetRequiredService<IDataManager>();
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
public class AppUserUpdateTests : IClassFixture<AppUserUpdateTestsFixture>, IDisposable
{
	private static readonly Random _random = new Random();

	#region Fields

	private readonly IAppUserApiClient _apiClient;
	private readonly DataSet _ds;
	private readonly ITestOutputHelper _output;

	#endregion

	#region Ctors / Init

	public AppUserUpdateTests(AppUserUpdateTestsFixture classFixture, ITestOutputHelper output)
	{
		_apiClient = classFixture.AppUserApiClient;
		_output = output;

		// Reset data each test run because we are adding/updating/deleting rows
		_ds = classFixture.DataManager.ResetDataSet(DataSetType.Default).GetAwaiter().GetResult();
	}

	public void Dispose()
	{
	}

	#endregion

	#region Create Tests

	[Fact]
	public async Task Create_Success()
	{
		var appUser = new AppUser {
			Id = Guid.NewGuid(),
			IsEnabled = true,
			FirstName = Guid.NewGuid().ToString(),
			LastName = Guid.NewGuid().ToString(),
			Email = Guid.NewGuid().ToString(),
			CompanyId = Guid.NewGuid().ToString(),
			ExtId = Guid.NewGuid().ToString(),
			GroupCode = TestUtils.PctChance(75) ? TestUtils.Rnd(0, int.MaxValue) : null,
			UserType = (UserType)TestUtils.Rnd(0, Enum.GetNames<UserType>().Length)
		};

		var retAppUser = await _apiClient.CreateAppUser(appUser);

		Assert.Equal(appUser.Id, retAppUser.Id);
	}

	#endregion
}

