//------------------------------------------------------------------------------------------------------------
// This file was auto-generated 4/8/2025 9:53 AM. Any changes made to it will be lost.
//------------------------------------------------------------------------------------------------------------
using System;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.Extensions.DependencyInjection;
using Xunit.Abstractions;
using Dyvenix.App1.Common.ApiClients;
using Dyvenix.App1.Tests.Common.Data;

namespace Dyvenix.App1.Common.IntTests.Tests;

#region Fixture

public class AppUserReadTestsFixture : IClassFixture<GlobalTestFixture>, IDisposable
{
	public AppUserReadTestsFixture(GlobalTestFixture globalFixture)
	{
		ServerApiFactory = new ServerApiFactory();
		ServiceProvider = ServerApiFactory.Services;

		var dataManager = ServiceProvider.GetRequiredService<IDataManager>();

		// Reset db here once for this class and cache the test data, because all tests are reading data only, no inserts/updates/deletes
		this.DataSet = dataManager.ResetDataSet(DataSetType.Default).GetAwaiter().GetResult();

		this.AppUserApiClient = ServiceProvider.GetRequiredService<IAppUserApiClient>();
	}

	public ServerApiFactory ServerApiFactory { get; private set; }
	public IServiceProvider ServiceProvider { get; }

	public IAppUserApiClient AppUserApiClient { get; }
	public DataSet DataSet { get; }

	public void Dispose()
	{
	}
}

#endregion

[Collection("Global Collection")]
public class AppUserReadTests : IClassFixture<AppUserReadTestsFixture>, IDisposable
{
	private static readonly Random _random = new Random();

	#region Fields

	private readonly IAppUserApiClient _apiClient;
	private readonly DataSet _ds;

	#endregion

	#region Ctors / Init

	public AppUserReadTests(AppUserReadTestsFixture classFixture, ITestOutputHelper output)
	{
		_apiClient = classFixture.AppUserApiClient;
		_ds = classFixture.DataSet;
	}

	public void Dispose()
	{
	}

	#endregion

	#region Single Methods

	[Fact]
	public async Task GetById_Success()
	{
		var dsAppUser = _ds.AppUsers.First();
		var appUser = await _apiClient.GetById(dsAppUser.Id);
		Assert.Equal(dsAppUser.Id, appUser.Id);
	}

	[Fact]
	public async Task GetById_NotFound()
	{
		var appUser = await _apiClient.GetById(Guid.Empty);
		Assert.Null(appUser);
	}

	#endregion

	#region List Methods

	[Fact]
	public async Task GetAll()
	{
		var appUser = await _apiClient.GetAll();
		Assert.Equal(appUser.Count, _ds.AppUsers.Count);
	}

	// GetByCompanyId - companyId: dsAppUser.CompanyId
	[Fact]
	public async Task GetByCompanyId_1()
	{
		var dsAppUser = _ds.AppUsers.First();
		var dsAppUsers = _ds.AppUsers.Where(x => x.CompanyId == dsAppUser.CompanyId);
		var appUsers = await _apiClient.GetByCompanyId(companyId: dsAppUser.CompanyId);
		Assert.Equal(appUsers.Count, _ds.AppUsers.Count);
	}

	// GetByCompanyId - companyId: bd4-4ee8-bbb5-1115d2b0f35f
	[Fact]
	public async Task GetByCompanyId_2()
	{
		var dsAppUser = _ds.AppUsers.First();
		var dsAppUsers = _ds.AppUsers.Where(x => x.CompanyId == dsAppUser.CompanyId);
		var appUsers = await _apiClient.GetByCompanyId(companyId: bd4-4ee8-bbb5-1115d2b0f35f);
		Assert.Equal(appUsers.Count, _ds.AppUsers.Count);
	}

	[Fact]
	public async Task GetAllWithPaging()
	{
		var appUser = await _apiClient.GetAllWithPaging();
		Assert.Equal(appUser.Count, _ds.AppUsers.Count);
	}

	// GetEnabledByCompany - companyId: dsAppUser.CompanyId
	[Fact]
	public async Task GetEnabledByCompany_1()
	{
		var dsAppUser = _ds.AppUsers.First();
		var dsAppUsers = _ds.AppUsers.Where(x => x.CompanyId == dsAppUser.CompanyId);
		var appUsers = await _apiClient.GetEnabledByCompany(companyId: dsAppUser.CompanyId);
		Assert.Equal(appUsers.Count, _ds.AppUsers.Count);
	}

	// GetEnabledByCompany - companyId: b35-4bc6-8327-5c52d5aec925
	[Fact]
	public async Task GetEnabledByCompany_2()
	{
		var dsAppUser = _ds.AppUsers.First();
		var dsAppUsers = _ds.AppUsers.Where(x => x.CompanyId == dsAppUser.CompanyId);
		var appUsers = await _apiClient.GetEnabledByCompany(companyId: b35-4bc6-8327-5c52d5aec925);
		Assert.Equal(appUsers.Count, _ds.AppUsers.Count);
	}

	// GetByCompanyExtId - companyId: dsAppUser.CompanyId, extId: dsAppUser.ExtId, pgSize: 3
	[Fact]
	public async Task GetByCompanyExtId_1()
	{
		var dsAppUser = _ds.AppUsers.First();
		var dsAppUsers = _ds.AppUsers.Where(x => x.CompanyId == dsAppUser.CompanyId&& x.ExtId == dsAppUser.ExtId);
		var appUsers = await _apiClient.GetByCompanyExtId(companyId: dsAppUser.CompanyId, extId: dsAppUser.ExtId, pgSize: 3);
		Assert.Equal(appUsers.Count, _ds.AppUsers.Count);
	}

	// GetByCompanyExtId - companyId: dsAppUser.CompanyId, extId: dsAppUser.ExtId, pgSize: 0
	[Fact]
	public async Task GetByCompanyExtId_2()
	{
		var dsAppUser = _ds.AppUsers.First();
		var dsAppUsers = _ds.AppUsers.Where(x => x.CompanyId == dsAppUser.CompanyId&& x.ExtId == dsAppUser.ExtId);
		var appUsers = await _apiClient.GetByCompanyExtId(companyId: dsAppUser.CompanyId, extId: dsAppUser.ExtId, pgSize: 0);
		Assert.Equal(appUsers.Count, _ds.AppUsers.Count);
	}

	// GetByCompanyExtId - companyId: dsAppUser.CompanyId, extId: 7a4bc7bd-b84f-4ea4-81f8-d624cbac32c4, pgSize: 3
	[Fact]
	public async Task GetByCompanyExtId_3()
	{
		var dsAppUser = _ds.AppUsers.First();
		var dsAppUsers = _ds.AppUsers.Where(x => x.CompanyId == dsAppUser.CompanyId&& x.ExtId == dsAppUser.ExtId);
		var appUsers = await _apiClient.GetByCompanyExtId(companyId: dsAppUser.CompanyId, extId: 7a4bc7bd-b84f-4ea4-81f8-d624cbac32c4, pgSize: 3);
		Assert.Equal(appUsers.Count, _ds.AppUsers.Count);
	}

	// GetByCompanyExtId - companyId: dsAppUser.CompanyId, extId: 7a4bc7bd-b84f-4ea4-81f8-d624cbac32c4, pgSize: 0
	[Fact]
	public async Task GetByCompanyExtId_4()
	{
		var dsAppUser = _ds.AppUsers.First();
		var dsAppUsers = _ds.AppUsers.Where(x => x.CompanyId == dsAppUser.CompanyId&& x.ExtId == dsAppUser.ExtId);
		var appUsers = await _apiClient.GetByCompanyExtId(companyId: dsAppUser.CompanyId, extId: 7a4bc7bd-b84f-4ea4-81f8-d624cbac32c4, pgSize: 0);
		Assert.Equal(appUsers.Count, _ds.AppUsers.Count);
	}

	// GetByCompanyExtId - companyId: dsAppUser.CompanyId, extId: null, pgSize: 3
	[Fact]
	public async Task GetByCompanyExtId_5()
	{
		var dsAppUser = _ds.AppUsers.First();
		var dsAppUsers = _ds.AppUsers.Where(x => x.CompanyId == dsAppUser.CompanyId&& x.ExtId == dsAppUser.ExtId);
		var appUsers = await _apiClient.GetByCompanyExtId(companyId: dsAppUser.CompanyId, extId: null, pgSize: 3);
		Assert.Equal(appUsers.Count, _ds.AppUsers.Count);
	}

	// GetByCompanyExtId - companyId: dsAppUser.CompanyId, extId: null, pgSize: 0
	[Fact]
	public async Task GetByCompanyExtId_6()
	{
		var dsAppUser = _ds.AppUsers.First();
		var dsAppUsers = _ds.AppUsers.Where(x => x.CompanyId == dsAppUser.CompanyId&& x.ExtId == dsAppUser.ExtId);
		var appUsers = await _apiClient.GetByCompanyExtId(companyId: dsAppUser.CompanyId, extId: null, pgSize: 0);
		Assert.Equal(appUsers.Count, _ds.AppUsers.Count);
	}

	// GetByCompanyExtId - companyId: cdf-4863-b677-a033a0f55d0b, extId: dsAppUser.ExtId, pgSize: 3
	[Fact]
	public async Task GetByCompanyExtId_7()
	{
		var dsAppUser = _ds.AppUsers.First();
		var dsAppUsers = _ds.AppUsers.Where(x => x.CompanyId == dsAppUser.CompanyId&& x.ExtId == dsAppUser.ExtId);
		var appUsers = await _apiClient.GetByCompanyExtId(companyId: cdf-4863-b677-a033a0f55d0b, extId: dsAppUser.ExtId, pgSize: 3);
		Assert.Equal(appUsers.Count, _ds.AppUsers.Count);
	}

	// GetByCompanyExtId - companyId: cdf-4863-b677-a033a0f55d0b, extId: dsAppUser.ExtId, pgSize: 0
	[Fact]
	public async Task GetByCompanyExtId_8()
	{
		var dsAppUser = _ds.AppUsers.First();
		var dsAppUsers = _ds.AppUsers.Where(x => x.CompanyId == dsAppUser.CompanyId&& x.ExtId == dsAppUser.ExtId);
		var appUsers = await _apiClient.GetByCompanyExtId(companyId: cdf-4863-b677-a033a0f55d0b, extId: dsAppUser.ExtId, pgSize: 0);
		Assert.Equal(appUsers.Count, _ds.AppUsers.Count);
	}

	// GetByCompanyExtId - companyId: cdf-4863-b677-a033a0f55d0b, extId: 7a4bc7bd-b84f-4ea4-81f8-d624cbac32c4, pgSize: 3
	[Fact]
	public async Task GetByCompanyExtId_9()
	{
		var dsAppUser = _ds.AppUsers.First();
		var dsAppUsers = _ds.AppUsers.Where(x => x.CompanyId == dsAppUser.CompanyId&& x.ExtId == dsAppUser.ExtId);
		var appUsers = await _apiClient.GetByCompanyExtId(companyId: cdf-4863-b677-a033a0f55d0b, extId: 7a4bc7bd-b84f-4ea4-81f8-d624cbac32c4, pgSize: 3);
		Assert.Equal(appUsers.Count, _ds.AppUsers.Count);
	}

	// GetByCompanyExtId - companyId: cdf-4863-b677-a033a0f55d0b, extId: 7a4bc7bd-b84f-4ea4-81f8-d624cbac32c4, pgSize: 0
	[Fact]
	public async Task GetByCompanyExtId_10()
	{
		var dsAppUser = _ds.AppUsers.First();
		var dsAppUsers = _ds.AppUsers.Where(x => x.CompanyId == dsAppUser.CompanyId&& x.ExtId == dsAppUser.ExtId);
		var appUsers = await _apiClient.GetByCompanyExtId(companyId: cdf-4863-b677-a033a0f55d0b, extId: 7a4bc7bd-b84f-4ea4-81f8-d624cbac32c4, pgSize: 0);
		Assert.Equal(appUsers.Count, _ds.AppUsers.Count);
	}

	// GetByCompanyExtId - companyId: cdf-4863-b677-a033a0f55d0b, extId: null, pgSize: 3
	[Fact]
	public async Task GetByCompanyExtId_11()
	{
		var dsAppUser = _ds.AppUsers.First();
		var dsAppUsers = _ds.AppUsers.Where(x => x.CompanyId == dsAppUser.CompanyId&& x.ExtId == dsAppUser.ExtId);
		var appUsers = await _apiClient.GetByCompanyExtId(companyId: cdf-4863-b677-a033a0f55d0b, extId: null, pgSize: 3);
		Assert.Equal(appUsers.Count, _ds.AppUsers.Count);
	}

	// GetByCompanyExtId - companyId: cdf-4863-b677-a033a0f55d0b, extId: null, pgSize: 0
	[Fact]
	public async Task GetByCompanyExtId_12()
	{
		var dsAppUser = _ds.AppUsers.First();
		var dsAppUsers = _ds.AppUsers.Where(x => x.CompanyId == dsAppUser.CompanyId&& x.ExtId == dsAppUser.ExtId);
		var appUsers = await _apiClient.GetByCompanyExtId(companyId: cdf-4863-b677-a033a0f55d0b, extId: null, pgSize: 0);
		Assert.Equal(appUsers.Count, _ds.AppUsers.Count);
	}

	// GetByCompanyExtIdWPging - companyId: dsAppUser.CompanyId, extId: dsAppUser.ExtId, pgSize: 3
	[Fact]
	public async Task GetByCompanyExtIdWPging_1()
	{
		var dsAppUser = _ds.AppUsers.First();
		var dsAppUsers = _ds.AppUsers.Where(x => x.CompanyId == dsAppUser.CompanyId&& x.ExtId == dsAppUser.ExtId);
		var appUsers = await _apiClient.GetByCompanyExtIdWPging(companyId: dsAppUser.CompanyId, extId: dsAppUser.ExtId, pgSize: 3);
		Assert.Equal(appUsers.Count, _ds.AppUsers.Count);
	}

	// GetByCompanyExtIdWPging - companyId: dsAppUser.CompanyId, extId: dsAppUser.ExtId, pgSize: 0
	[Fact]
	public async Task GetByCompanyExtIdWPging_2()
	{
		var dsAppUser = _ds.AppUsers.First();
		var dsAppUsers = _ds.AppUsers.Where(x => x.CompanyId == dsAppUser.CompanyId&& x.ExtId == dsAppUser.ExtId);
		var appUsers = await _apiClient.GetByCompanyExtIdWPging(companyId: dsAppUser.CompanyId, extId: dsAppUser.ExtId, pgSize: 0);
		Assert.Equal(appUsers.Count, _ds.AppUsers.Count);
	}

	// GetByCompanyExtIdWPging - companyId: dsAppUser.CompanyId, extId: 2adfd697-efdf-4c23-819d-acb02a077bc4, pgSize: 3
	[Fact]
	public async Task GetByCompanyExtIdWPging_3()
	{
		var dsAppUser = _ds.AppUsers.First();
		var dsAppUsers = _ds.AppUsers.Where(x => x.CompanyId == dsAppUser.CompanyId&& x.ExtId == dsAppUser.ExtId);
		var appUsers = await _apiClient.GetByCompanyExtIdWPging(companyId: dsAppUser.CompanyId, extId: 2adfd697-efdf-4c23-819d-acb02a077bc4, pgSize: 3);
		Assert.Equal(appUsers.Count, _ds.AppUsers.Count);
	}

	// GetByCompanyExtIdWPging - companyId: dsAppUser.CompanyId, extId: 2adfd697-efdf-4c23-819d-acb02a077bc4, pgSize: 0
	[Fact]
	public async Task GetByCompanyExtIdWPging_4()
	{
		var dsAppUser = _ds.AppUsers.First();
		var dsAppUsers = _ds.AppUsers.Where(x => x.CompanyId == dsAppUser.CompanyId&& x.ExtId == dsAppUser.ExtId);
		var appUsers = await _apiClient.GetByCompanyExtIdWPging(companyId: dsAppUser.CompanyId, extId: 2adfd697-efdf-4c23-819d-acb02a077bc4, pgSize: 0);
		Assert.Equal(appUsers.Count, _ds.AppUsers.Count);
	}

	// GetByCompanyExtIdWPging - companyId: dsAppUser.CompanyId, extId: null, pgSize: 3
	[Fact]
	public async Task GetByCompanyExtIdWPging_5()
	{
		var dsAppUser = _ds.AppUsers.First();
		var dsAppUsers = _ds.AppUsers.Where(x => x.CompanyId == dsAppUser.CompanyId&& x.ExtId == dsAppUser.ExtId);
		var appUsers = await _apiClient.GetByCompanyExtIdWPging(companyId: dsAppUser.CompanyId, extId: null, pgSize: 3);
		Assert.Equal(appUsers.Count, _ds.AppUsers.Count);
	}

	// GetByCompanyExtIdWPging - companyId: dsAppUser.CompanyId, extId: null, pgSize: 0
	[Fact]
	public async Task GetByCompanyExtIdWPging_6()
	{
		var dsAppUser = _ds.AppUsers.First();
		var dsAppUsers = _ds.AppUsers.Where(x => x.CompanyId == dsAppUser.CompanyId&& x.ExtId == dsAppUser.ExtId);
		var appUsers = await _apiClient.GetByCompanyExtIdWPging(companyId: dsAppUser.CompanyId, extId: null, pgSize: 0);
		Assert.Equal(appUsers.Count, _ds.AppUsers.Count);
	}

	// GetByCompanyExtIdWPging - companyId: f5a-4d68-bbb2-ab2d18649a17, extId: dsAppUser.ExtId, pgSize: 3
	[Fact]
	public async Task GetByCompanyExtIdWPging_7()
	{
		var dsAppUser = _ds.AppUsers.First();
		var dsAppUsers = _ds.AppUsers.Where(x => x.CompanyId == dsAppUser.CompanyId&& x.ExtId == dsAppUser.ExtId);
		var appUsers = await _apiClient.GetByCompanyExtIdWPging(companyId: f5a-4d68-bbb2-ab2d18649a17, extId: dsAppUser.ExtId, pgSize: 3);
		Assert.Equal(appUsers.Count, _ds.AppUsers.Count);
	}

	// GetByCompanyExtIdWPging - companyId: f5a-4d68-bbb2-ab2d18649a17, extId: dsAppUser.ExtId, pgSize: 0
	[Fact]
	public async Task GetByCompanyExtIdWPging_8()
	{
		var dsAppUser = _ds.AppUsers.First();
		var dsAppUsers = _ds.AppUsers.Where(x => x.CompanyId == dsAppUser.CompanyId&& x.ExtId == dsAppUser.ExtId);
		var appUsers = await _apiClient.GetByCompanyExtIdWPging(companyId: f5a-4d68-bbb2-ab2d18649a17, extId: dsAppUser.ExtId, pgSize: 0);
		Assert.Equal(appUsers.Count, _ds.AppUsers.Count);
	}

	// GetByCompanyExtIdWPging - companyId: f5a-4d68-bbb2-ab2d18649a17, extId: 2adfd697-efdf-4c23-819d-acb02a077bc4, pgSize: 3
	[Fact]
	public async Task GetByCompanyExtIdWPging_9()
	{
		var dsAppUser = _ds.AppUsers.First();
		var dsAppUsers = _ds.AppUsers.Where(x => x.CompanyId == dsAppUser.CompanyId&& x.ExtId == dsAppUser.ExtId);
		var appUsers = await _apiClient.GetByCompanyExtIdWPging(companyId: f5a-4d68-bbb2-ab2d18649a17, extId: 2adfd697-efdf-4c23-819d-acb02a077bc4, pgSize: 3);
		Assert.Equal(appUsers.Count, _ds.AppUsers.Count);
	}

	// GetByCompanyExtIdWPging - companyId: f5a-4d68-bbb2-ab2d18649a17, extId: 2adfd697-efdf-4c23-819d-acb02a077bc4, pgSize: 0
	[Fact]
	public async Task GetByCompanyExtIdWPging_10()
	{
		var dsAppUser = _ds.AppUsers.First();
		var dsAppUsers = _ds.AppUsers.Where(x => x.CompanyId == dsAppUser.CompanyId&& x.ExtId == dsAppUser.ExtId);
		var appUsers = await _apiClient.GetByCompanyExtIdWPging(companyId: f5a-4d68-bbb2-ab2d18649a17, extId: 2adfd697-efdf-4c23-819d-acb02a077bc4, pgSize: 0);
		Assert.Equal(appUsers.Count, _ds.AppUsers.Count);
	}

	// GetByCompanyExtIdWPging - companyId: f5a-4d68-bbb2-ab2d18649a17, extId: null, pgSize: 3
	[Fact]
	public async Task GetByCompanyExtIdWPging_11()
	{
		var dsAppUser = _ds.AppUsers.First();
		var dsAppUsers = _ds.AppUsers.Where(x => x.CompanyId == dsAppUser.CompanyId&& x.ExtId == dsAppUser.ExtId);
		var appUsers = await _apiClient.GetByCompanyExtIdWPging(companyId: f5a-4d68-bbb2-ab2d18649a17, extId: null, pgSize: 3);
		Assert.Equal(appUsers.Count, _ds.AppUsers.Count);
	}

	// GetByCompanyExtIdWPging - companyId: f5a-4d68-bbb2-ab2d18649a17, extId: null, pgSize: 0
	[Fact]
	public async Task GetByCompanyExtIdWPging_12()
	{
		var dsAppUser = _ds.AppUsers.First();
		var dsAppUsers = _ds.AppUsers.Where(x => x.CompanyId == dsAppUser.CompanyId&& x.ExtId == dsAppUser.ExtId);
		var appUsers = await _apiClient.GetByCompanyExtIdWPging(companyId: f5a-4d68-bbb2-ab2d18649a17, extId: null, pgSize: 0);
		Assert.Equal(appUsers.Count, _ds.AppUsers.Count);
	}

	// GetByGroupCode - groupCode: dsAppUser.GroupCode
	[Fact]
	public async Task GetByGroupCode_1()
	{
		var dsAppUser = _ds.AppUsers.First();
		var dsAppUsers = _ds.AppUsers.Where(x => x.GroupCode == dsAppUser.GroupCode);
		var appUsers = await _apiClient.GetByGroupCode(groupCode: dsAppUser.GroupCode);
		Assert.Equal(appUsers.Count, _ds.AppUsers.Count);
	}

	// GetByGroupCode - groupCode: int.MaxValue
	[Fact]
	public async Task GetByGroupCode_2()
	{
		var dsAppUser = _ds.AppUsers.First();
		var dsAppUsers = _ds.AppUsers.Where(x => x.GroupCode == dsAppUser.GroupCode);
		var appUsers = await _apiClient.GetByGroupCode(groupCode: int.MaxValue);
		Assert.Equal(appUsers.Count, _ds.AppUsers.Count);
	}

	// GetByGroupCodeWPging - groupCode: dsAppUser.GroupCode
	[Fact]
	public async Task GetByGroupCodeWPging_1()
	{
		var dsAppUser = _ds.AppUsers.First();
		var dsAppUsers = _ds.AppUsers.Where(x => x.GroupCode == dsAppUser.GroupCode);
		var appUsers = await _apiClient.GetByGroupCodeWPging(groupCode: dsAppUser.GroupCode);
		Assert.Equal(appUsers.Count, _ds.AppUsers.Count);
	}

	// GetByGroupCodeWPging - groupCode: int.MaxValue
	[Fact]
	public async Task GetByGroupCodeWPging_2()
	{
		var dsAppUser = _ds.AppUsers.First();
		var dsAppUsers = _ds.AppUsers.Where(x => x.GroupCode == dsAppUser.GroupCode);
		var appUsers = await _apiClient.GetByGroupCodeWPging(groupCode: int.MaxValue);
		Assert.Equal(appUsers.Count, _ds.AppUsers.Count);
	}

	// GetByUserType - userType: dsAppUser.UserType
	[Fact]
	public async Task GetByUserType_1()
	{
		var dsAppUser = _ds.AppUsers.First();
		var dsAppUsers = _ds.AppUsers.Where(x => x.UserType == dsAppUser.UserType);
		var appUsers = await _apiClient.GetByUserType(userType: dsAppUser.UserType);
		Assert.Equal(appUsers.Count, _ds.AppUsers.Count);
	}

	// GetByUserType - userType: null
	[Fact]
	public async Task GetByUserType_2()
	{
		var dsAppUser = _ds.AppUsers.First();
		var dsAppUsers = _ds.AppUsers.Where(x => x.UserType == dsAppUser.UserType);
		var appUsers = await _apiClient.GetByUserType(userType: null);
		Assert.Equal(appUsers.Count, _ds.AppUsers.Count);
	}

	// GetByUserTypeWPging - userType: dsAppUser.UserType
	[Fact]
	public async Task GetByUserTypeWPging_1()
	{
		var dsAppUser = _ds.AppUsers.First();
		var dsAppUsers = _ds.AppUsers.Where(x => x.UserType == dsAppUser.UserType);
		var appUsers = await _apiClient.GetByUserTypeWPging(userType: dsAppUser.UserType);
		Assert.Equal(appUsers.Count, _ds.AppUsers.Count);
	}

	// GetByUserTypeWPging - userType: null
	[Fact]
	public async Task GetByUserTypeWPging_2()
	{
		var dsAppUser = _ds.AppUsers.First();
		var dsAppUsers = _ds.AppUsers.Where(x => x.UserType == dsAppUser.UserType);
		var appUsers = await _apiClient.GetByUserTypeWPging(userType: null);
		Assert.Equal(appUsers.Count, _ds.AppUsers.Count);
	}

	// GetEnabledByUserTypeWPging - userType: dsAppUser.UserType, pgSize: 3
	[Fact]
	public async Task GetEnabledByUserTypeWPging_1()
	{
		var dsAppUser = _ds.AppUsers.First();
		var dsAppUsers = _ds.AppUsers.Where(x => x.UserType == dsAppUser.UserType);
		var appUsers = await _apiClient.GetEnabledByUserTypeWPging(userType: dsAppUser.UserType, pgSize: 3);
		Assert.Equal(appUsers.Count, _ds.AppUsers.Count);
	}

	// GetEnabledByUserTypeWPging - userType: dsAppUser.UserType, pgSize: 0
	[Fact]
	public async Task GetEnabledByUserTypeWPging_2()
	{
		var dsAppUser = _ds.AppUsers.First();
		var dsAppUsers = _ds.AppUsers.Where(x => x.UserType == dsAppUser.UserType);
		var appUsers = await _apiClient.GetEnabledByUserTypeWPging(userType: dsAppUser.UserType, pgSize: 0);
		Assert.Equal(appUsers.Count, _ds.AppUsers.Count);
	}

	// GetEnabledByUserTypeWPging - userType: null, pgSize: 3
	[Fact]
	public async Task GetEnabledByUserTypeWPging_3()
	{
		var dsAppUser = _ds.AppUsers.First();
		var dsAppUsers = _ds.AppUsers.Where(x => x.UserType == dsAppUser.UserType);
		var appUsers = await _apiClient.GetEnabledByUserTypeWPging(userType: null, pgSize: 3);
		Assert.Equal(appUsers.Count, _ds.AppUsers.Count);
	}

	// GetEnabledByUserTypeWPging - userType: null, pgSize: 0
	[Fact]
	public async Task GetEnabledByUserTypeWPging_4()
	{
		var dsAppUser = _ds.AppUsers.First();
		var dsAppUsers = _ds.AppUsers.Where(x => x.UserType == dsAppUser.UserType);
		var appUsers = await _apiClient.GetEnabledByUserTypeWPging(userType: null, pgSize: 0);
		Assert.Equal(appUsers.Count, _ds.AppUsers.Count);
	}

	// GetEnabledByUserTypeWPging - userType: null, pgSize: 3
	[Fact]
	public async Task GetEnabledByUserTypeWPging_5()
	{
		var dsAppUser = _ds.AppUsers.First();
		var dsAppUsers = _ds.AppUsers.Where(x => x.UserType == dsAppUser.UserType);
		var appUsers = await _apiClient.GetEnabledByUserTypeWPging(userType: null, pgSize: 3);
		Assert.Equal(appUsers.Count, _ds.AppUsers.Count);
	}

	// GetEnabledByUserTypeWPging - userType: null, pgSize: 0
	[Fact]
	public async Task GetEnabledByUserTypeWPging_6()
	{
		var dsAppUser = _ds.AppUsers.First();
		var dsAppUsers = _ds.AppUsers.Where(x => x.UserType == dsAppUser.UserType);
		var appUsers = await _apiClient.GetEnabledByUserTypeWPging(userType: null, pgSize: 0);
		Assert.Equal(appUsers.Count, _ds.AppUsers.Count);
	}

	#endregion

	#region Helper Methods

	private static int Rnd(int x, int y)
	{
		if (x > y)
			throw new ArgumentException("x must be less than or equal to y");
		return _random.Next(x, y + 1); // +1 to include 'y'
	}

	#endregion
}

