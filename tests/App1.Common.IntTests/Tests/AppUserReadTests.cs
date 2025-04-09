//------------------------------------------------------------------------------------------------------------
// This file was auto-generated 4/8/2025 10:44 PM. Any changes made to it will be lost.
//------------------------------------------------------------------------------------------------------------
using System;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.Extensions.DependencyInjection;
using Xunit.Abstractions;
using Dyvenix.App1.Common.ApiClients;
using Dyvenix.App1.Tests.Common;
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

	// GetByCompanyId() - CompanyId:Good
	[Fact]
	public async Task GetByCompanyId_1()
	{
		// Arrange
		var dsAppUser = _ds.AppUsers.First(x => x.CompanyId != null);
		var dsAppUsers = _ds.AppUsers.Where(x => x.CompanyId == dsAppUser.CompanyId).ToList();

		// Act
		var appUsers = await _apiClient.GetByCompanyId(companyId: dsAppUser.CompanyId);

		// Assert
		Assert.Equal(appUsers.Count, dsAppUsers.Count);
	}

	// GetByCompanyId() - CompanyId:NotExist
	[Fact]
	public async Task GetByCompanyId_2()
	{
		// Arrange
		var dsAppUser = _ds.AppUsers.First(x => x.CompanyId != null);
		var dsAppUsers = _ds.AppUsers.Where(x => x.CompanyId == Guid.NewGuid().ToString()[10..]).ToList();

		// Act
		var appUsers = await _apiClient.GetByCompanyId(companyId: Guid.NewGuid().ToString()[10..]);

		// Assert
		Assert.Equal(appUsers.Count, dsAppUsers.Count);
	}

	[Fact]
	public async Task GetAllWithPaging()
	{
		var appUser = await _apiClient.GetAllWithPaging();
		Assert.Equal(appUser.Count, _ds.AppUsers.Count);
	}

	// GetEnabledByCompany() - CompanyId:Good
	[Fact]
	public async Task GetEnabledByCompany_1()
	{
		// Arrange
		var dsAppUser = _ds.AppUsers.First(x => x.CompanyId != null);
		var dsAppUsers = _ds.AppUsers.Where(x => x.CompanyId == dsAppUser.CompanyId).ToList();

		// Act
		var appUsers = await _apiClient.GetEnabledByCompany(companyId: dsAppUser.CompanyId);

		// Assert
		Assert.Equal(appUsers.Count, dsAppUsers.Count);
	}

	// GetEnabledByCompany() - CompanyId:NotExist
	[Fact]
	public async Task GetEnabledByCompany_2()
	{
		// Arrange
		var dsAppUser = _ds.AppUsers.First(x => x.CompanyId != null);
		var dsAppUsers = _ds.AppUsers.Where(x => x.CompanyId == Guid.NewGuid().ToString()[10..]).ToList();

		// Act
		var appUsers = await _apiClient.GetEnabledByCompany(companyId: Guid.NewGuid().ToString()[10..]);

		// Assert
		Assert.Equal(appUsers.Count, dsAppUsers.Count);
	}

	// GetByCompanyExtId() - CompanyId:Good, ExtId:Good
	[Fact]
	public async Task GetByCompanyExtId_1()
	{
		// Arrange
		var dsAppUser = _ds.AppUsers.First(x => x.CompanyId != null);
		var dsAppUsers = _ds.AppUsers.Where(x => x.CompanyId == dsAppUser.CompanyId && x.ExtId == dsAppUser.ExtId).ToList();

		// Act
		var appUsers = await _apiClient.GetByCompanyExtId(companyId: dsAppUser.CompanyId, extId: dsAppUser.ExtId);

		// Assert
		Assert.Equal(appUsers.Count, dsAppUsers.Count);
	}

	// GetByCompanyExtId() - CompanyId:Good, ExtId:NotExist
	[Fact]
	public async Task GetByCompanyExtId_2()
	{
		// Arrange
		var dsAppUser = _ds.AppUsers.First(x => x.CompanyId != null);
		var dsAppUsers = _ds.AppUsers.Where(x => x.CompanyId == dsAppUser.CompanyId && x.ExtId == Guid.NewGuid().ToString()).ToList();

		// Act
		var appUsers = await _apiClient.GetByCompanyExtId(companyId: dsAppUser.CompanyId, extId: Guid.NewGuid().ToString());

		// Assert
		Assert.Equal(appUsers.Count, dsAppUsers.Count);
	}

	// GetByCompanyExtId() - CompanyId:Good, ExtId:NotSupplied
	[Fact]
	public async Task GetByCompanyExtId_3()
	{
		// Arrange
		var dsAppUser = _ds.AppUsers.First(x => x.CompanyId != null);
		var dsAppUsers = _ds.AppUsers.Where(x => x.CompanyId == dsAppUser.CompanyId).ToList();

		// Act
		var appUsers = await _apiClient.GetByCompanyExtId(companyId: dsAppUser.CompanyId);

		// Assert
		Assert.Equal(appUsers.Count, dsAppUsers.Count);
	}

	// GetByCompanyExtId() - CompanyId:NotExist, ExtId:Good
	[Fact]
	public async Task GetByCompanyExtId_4()
	{
		// Arrange
		var dsAppUser = _ds.AppUsers.First(x => x.CompanyId != null);
		var dsAppUsers = _ds.AppUsers.Where(x => x.CompanyId == Guid.NewGuid().ToString()[10..] && x.ExtId == dsAppUser.ExtId).ToList();

		// Act
		var appUsers = await _apiClient.GetByCompanyExtId(companyId: Guid.NewGuid().ToString()[10..], extId: dsAppUser.ExtId);

		// Assert
		Assert.Equal(appUsers.Count, dsAppUsers.Count);
	}

	// GetByCompanyExtId() - CompanyId:NotExist, ExtId:NotExist
	[Fact]
	public async Task GetByCompanyExtId_5()
	{
		// Arrange
		var dsAppUser = _ds.AppUsers.First(x => x.CompanyId != null);
		var dsAppUsers = _ds.AppUsers.Where(x => x.CompanyId == Guid.NewGuid().ToString()[10..] && x.ExtId == Guid.NewGuid().ToString()).ToList();

		// Act
		var appUsers = await _apiClient.GetByCompanyExtId(companyId: Guid.NewGuid().ToString()[10..], extId: Guid.NewGuid().ToString());

		// Assert
		Assert.Equal(appUsers.Count, dsAppUsers.Count);
	}

	// GetByCompanyExtId() - CompanyId:NotExist, ExtId:NotSupplied
	[Fact]
	public async Task GetByCompanyExtId_6()
	{
		// Arrange
		var dsAppUser = _ds.AppUsers.First(x => x.CompanyId != null);
		var dsAppUsers = _ds.AppUsers.Where(x => x.CompanyId == Guid.NewGuid().ToString()[10..]).ToList();

		// Act
		var appUsers = await _apiClient.GetByCompanyExtId(companyId: Guid.NewGuid().ToString()[10..]);

		// Assert
		Assert.Equal(appUsers.Count, dsAppUsers.Count);
	}

	// GetByCompanyExtIdWPging() - CompanyId:Good, ExtId:Good, Paging:Good, Paging:Good
	[Fact]
	public async Task GetByCompanyExtIdWPging_1()
	{
		// Arrange
		var dsAppUser = _ds.AppUsers.First(x => x.CompanyId != null);
		var dsAppUsers = _ds.AppUsers.Where(x => x.CompanyId == dsAppUser.CompanyId && x.ExtId == dsAppUser.ExtId).ToList();
		var pgr = new Pager(dsAppUsers.Count);

		// Act / Assert
		for (var i = 0; i < pgr.TotalPages; i++) {
			var appUsers = await _apiClient.GetByCompanyExtIdWPging(companyId: dsAppUser.CompanyId, extId: dsAppUser.ExtId, pgSize: pgr.PageSize, pgOffset: i);
			Assert.Equal(appUsers.Count, pgr.Expected[i]);
		}
	}

	// GetByCompanyExtIdWPging() - CompanyId:Good, ExtId:Good, Paging:NotSupplied, Paging:NotSupplied
	[Fact]
	public async Task GetByCompanyExtIdWPging_2()
	{
		// Arrange
		var dsAppUser = _ds.AppUsers.First(x => x.CompanyId != null);
		var dsAppUsers = _ds.AppUsers.Where(x => x.CompanyId == dsAppUser.CompanyId && x.ExtId == dsAppUser.ExtId).ToList();
		var pgr = new Pager(dsAppUsers.Count);

		// Act / Assert
		for (var i = 0; i < pgr.TotalPages; i++) {
			var appUsers = await _apiClient.GetByCompanyExtIdWPging(companyId: dsAppUser.CompanyId, extId: dsAppUser.ExtId);
			Assert.Equal(appUsers.Count, pgr.Expected[i]);
		}
	}

	// GetByCompanyExtIdWPging() - CompanyId:Good, ExtId:NotExist, Paging:Good, Paging:Good
	[Fact]
	public async Task GetByCompanyExtIdWPging_3()
	{
		// Arrange
		var dsAppUser = _ds.AppUsers.First(x => x.CompanyId != null);
		var dsAppUsers = _ds.AppUsers.Where(x => x.CompanyId == dsAppUser.CompanyId && x.ExtId == Guid.NewGuid().ToString()).ToList();
		var pgr = new Pager(dsAppUsers.Count);

		// Act / Assert
		for (var i = 0; i < pgr.TotalPages; i++) {
			var appUsers = await _apiClient.GetByCompanyExtIdWPging(companyId: dsAppUser.CompanyId, extId: Guid.NewGuid().ToString(), pgSize: pgr.PageSize, pgOffset: i);
			Assert.Equal(appUsers.Count, pgr.Expected[i]);
		}
	}

	// GetByCompanyExtIdWPging() - CompanyId:Good, ExtId:NotExist, Paging:NotSupplied, Paging:NotSupplied
	[Fact]
	public async Task GetByCompanyExtIdWPging_4()
	{
		// Arrange
		var dsAppUser = _ds.AppUsers.First(x => x.CompanyId != null);
		var dsAppUsers = _ds.AppUsers.Where(x => x.CompanyId == dsAppUser.CompanyId && x.ExtId == Guid.NewGuid().ToString()).ToList();
		var pgr = new Pager(dsAppUsers.Count);

		// Act / Assert
		for (var i = 0; i < pgr.TotalPages; i++) {
			var appUsers = await _apiClient.GetByCompanyExtIdWPging(companyId: dsAppUser.CompanyId, extId: Guid.NewGuid().ToString());
			Assert.Equal(appUsers.Count, pgr.Expected[i]);
		}
	}

	// GetByCompanyExtIdWPging() - CompanyId:Good, ExtId:NotSupplied, Paging:Good, Paging:Good
	[Fact]
	public async Task GetByCompanyExtIdWPging_5()
	{
		// Arrange
		var dsAppUser = _ds.AppUsers.First(x => x.CompanyId != null);
		var dsAppUsers = _ds.AppUsers.Where(x => x.CompanyId == dsAppUser.CompanyId).ToList();
		var pgr = new Pager(dsAppUsers.Count);

		// Act / Assert
		for (var i = 0; i < pgr.TotalPages; i++) {
			var appUsers = await _apiClient.GetByCompanyExtIdWPging(companyId: dsAppUser.CompanyId, pgSize: pgr.PageSize, pgOffset: i);
			Assert.Equal(appUsers.Count, pgr.Expected[i]);
		}
	}

	// GetByCompanyExtIdWPging() - CompanyId:Good, ExtId:NotSupplied, Paging:NotSupplied, Paging:NotSupplied
	[Fact]
	public async Task GetByCompanyExtIdWPging_6()
	{
		// Arrange
		var dsAppUser = _ds.AppUsers.First(x => x.CompanyId != null);
		var dsAppUsers = _ds.AppUsers.Where(x => x.CompanyId == dsAppUser.CompanyId).ToList();
		var pgr = new Pager(dsAppUsers.Count);

		// Act / Assert
		for (var i = 0; i < pgr.TotalPages; i++) {
			var appUsers = await _apiClient.GetByCompanyExtIdWPging(companyId: dsAppUser.CompanyId);
			Assert.Equal(appUsers.Count, pgr.Expected[i]);
		}
	}

	// GetByCompanyExtIdWPging() - CompanyId:NotExist, ExtId:Good, Paging:Good, Paging:Good
	[Fact]
	public async Task GetByCompanyExtIdWPging_7()
	{
		// Arrange
		var dsAppUser = _ds.AppUsers.First(x => x.CompanyId != null);
		var dsAppUsers = _ds.AppUsers.Where(x => x.CompanyId == Guid.NewGuid().ToString()[10..] && x.ExtId == dsAppUser.ExtId).ToList();
		var pgr = new Pager(dsAppUsers.Count);

		// Act / Assert
		for (var i = 0; i < pgr.TotalPages; i++) {
			var appUsers = await _apiClient.GetByCompanyExtIdWPging(companyId: Guid.NewGuid().ToString()[10..], extId: dsAppUser.ExtId, pgSize: pgr.PageSize, pgOffset: i);
			Assert.Equal(appUsers.Count, pgr.Expected[i]);
		}
	}

	// GetByCompanyExtIdWPging() - CompanyId:NotExist, ExtId:Good, Paging:NotSupplied, Paging:NotSupplied
	[Fact]
	public async Task GetByCompanyExtIdWPging_8()
	{
		// Arrange
		var dsAppUser = _ds.AppUsers.First(x => x.CompanyId != null);
		var dsAppUsers = _ds.AppUsers.Where(x => x.CompanyId == Guid.NewGuid().ToString()[10..] && x.ExtId == dsAppUser.ExtId).ToList();
		var pgr = new Pager(dsAppUsers.Count);

		// Act / Assert
		for (var i = 0; i < pgr.TotalPages; i++) {
			var appUsers = await _apiClient.GetByCompanyExtIdWPging(companyId: Guid.NewGuid().ToString()[10..], extId: dsAppUser.ExtId);
			Assert.Equal(appUsers.Count, pgr.Expected[i]);
		}
	}

	// GetByCompanyExtIdWPging() - CompanyId:NotExist, ExtId:NotExist, Paging:Good, Paging:Good
	[Fact]
	public async Task GetByCompanyExtIdWPging_9()
	{
		// Arrange
		var dsAppUser = _ds.AppUsers.First(x => x.CompanyId != null);
		var dsAppUsers = _ds.AppUsers.Where(x => x.CompanyId == Guid.NewGuid().ToString()[10..] && x.ExtId == Guid.NewGuid().ToString()).ToList();
		var pgr = new Pager(dsAppUsers.Count);

		// Act / Assert
		for (var i = 0; i < pgr.TotalPages; i++) {
			var appUsers = await _apiClient.GetByCompanyExtIdWPging(companyId: Guid.NewGuid().ToString()[10..], extId: Guid.NewGuid().ToString(), pgSize: pgr.PageSize, pgOffset: i);
			Assert.Equal(appUsers.Count, pgr.Expected[i]);
		}
	}

	// GetByCompanyExtIdWPging() - CompanyId:NotExist, ExtId:NotExist, Paging:NotSupplied, Paging:NotSupplied
	[Fact]
	public async Task GetByCompanyExtIdWPging_10()
	{
		// Arrange
		var dsAppUser = _ds.AppUsers.First(x => x.CompanyId != null);
		var dsAppUsers = _ds.AppUsers.Where(x => x.CompanyId == Guid.NewGuid().ToString()[10..] && x.ExtId == Guid.NewGuid().ToString()).ToList();
		var pgr = new Pager(dsAppUsers.Count);

		// Act / Assert
		for (var i = 0; i < pgr.TotalPages; i++) {
			var appUsers = await _apiClient.GetByCompanyExtIdWPging(companyId: Guid.NewGuid().ToString()[10..], extId: Guid.NewGuid().ToString());
			Assert.Equal(appUsers.Count, pgr.Expected[i]);
		}
	}

	// GetByCompanyExtIdWPging() - CompanyId:NotExist, ExtId:NotSupplied, Paging:Good, Paging:Good
	[Fact]
	public async Task GetByCompanyExtIdWPging_11()
	{
		// Arrange
		var dsAppUser = _ds.AppUsers.First(x => x.CompanyId != null);
		var dsAppUsers = _ds.AppUsers.Where(x => x.CompanyId == Guid.NewGuid().ToString()[10..]).ToList();
		var pgr = new Pager(dsAppUsers.Count);

		// Act / Assert
		for (var i = 0; i < pgr.TotalPages; i++) {
			var appUsers = await _apiClient.GetByCompanyExtIdWPging(companyId: Guid.NewGuid().ToString()[10..], pgSize: pgr.PageSize, pgOffset: i);
			Assert.Equal(appUsers.Count, pgr.Expected[i]);
		}
	}

	// GetByCompanyExtIdWPging() - CompanyId:NotExist, ExtId:NotSupplied, Paging:NotSupplied, Paging:NotSupplied
	[Fact]
	public async Task GetByCompanyExtIdWPging_12()
	{
		// Arrange
		var dsAppUser = _ds.AppUsers.First(x => x.CompanyId != null);
		var dsAppUsers = _ds.AppUsers.Where(x => x.CompanyId == Guid.NewGuid().ToString()[10..]).ToList();
		var pgr = new Pager(dsAppUsers.Count);

		// Act / Assert
		for (var i = 0; i < pgr.TotalPages; i++) {
			var appUsers = await _apiClient.GetByCompanyExtIdWPging(companyId: Guid.NewGuid().ToString()[10..]);
			Assert.Equal(appUsers.Count, pgr.Expected[i]);
		}
	}

	// GetByGroupCode() - GroupCode:Good
	[Fact]
	public async Task GetByGroupCode_1()
	{
		// Arrange
		var dsAppUser = _ds.AppUsers.First(x => x.GroupCode.HasValue);
		var dsAppUsers = _ds.AppUsers.Where(x => x.GroupCode == dsAppUser.GroupCode.Value).ToList();

		// Act
		var appUsers = await _apiClient.GetByGroupCode(groupCode: dsAppUser.GroupCode.Value);

		// Assert
		Assert.Equal(appUsers.Count, dsAppUsers.Count);
	}

	// GetByGroupCode() - GroupCode:NotExist
	[Fact]
	public async Task GetByGroupCode_2()
	{
		// Arrange
		var dsAppUser = _ds.AppUsers.First(x => x.GroupCode.HasValue);
		var dsAppUsers = _ds.AppUsers.Where(x => x.GroupCode == int.MaxValue).ToList();

		// Act
		var appUsers = await _apiClient.GetByGroupCode(groupCode: int.MaxValue);

		// Assert
		Assert.Equal(appUsers.Count, dsAppUsers.Count);
	}

	// GetByGroupCodeWPging() - GroupCode:Good, Paging:Good, Paging:Good
	[Fact]
	public async Task GetByGroupCodeWPging_1()
	{
		// Arrange
		var dsAppUser = _ds.AppUsers.First(x => x.GroupCode.HasValue);
		var dsAppUsers = _ds.AppUsers.Where(x => x.GroupCode == dsAppUser.GroupCode.Value).ToList();
		var pgr = new Pager(dsAppUsers.Count);

		// Act / Assert
		for (var i = 0; i < pgr.TotalPages; i++) {
			var appUsers = await _apiClient.GetByGroupCodeWPging(groupCode: dsAppUser.GroupCode.Value, pgSize: pgr.PageSize, pgOffset: i);
			Assert.Equal(appUsers.Count, pgr.Expected[i]);
		}
	}

	// GetByGroupCodeWPging() - GroupCode:Good, Paging:NotSupplied, Paging:NotSupplied
	[Fact]
	public async Task GetByGroupCodeWPging_2()
	{
		// Arrange
		var dsAppUser = _ds.AppUsers.First(x => x.GroupCode.HasValue);
		var dsAppUsers = _ds.AppUsers.Where(x => x.GroupCode == dsAppUser.GroupCode.Value).ToList();
		var pgr = new Pager(dsAppUsers.Count);

		// Act / Assert
		for (var i = 0; i < pgr.TotalPages; i++) {
			var appUsers = await _apiClient.GetByGroupCodeWPging(groupCode: dsAppUser.GroupCode.Value);
			Assert.Equal(appUsers.Count, pgr.Expected[i]);
		}
	}

	// GetByGroupCodeWPging() - GroupCode:NotExist, Paging:Good, Paging:Good
	[Fact]
	public async Task GetByGroupCodeWPging_3()
	{
		// Arrange
		var dsAppUser = _ds.AppUsers.First(x => x.GroupCode.HasValue);
		var dsAppUsers = _ds.AppUsers.Where(x => x.GroupCode == int.MaxValue).ToList();
		var pgr = new Pager(dsAppUsers.Count);

		// Act / Assert
		for (var i = 0; i < pgr.TotalPages; i++) {
			var appUsers = await _apiClient.GetByGroupCodeWPging(groupCode: int.MaxValue, pgSize: pgr.PageSize, pgOffset: i);
			Assert.Equal(appUsers.Count, pgr.Expected[i]);
		}
	}

	// GetByGroupCodeWPging() - GroupCode:NotExist, Paging:NotSupplied, Paging:NotSupplied
	[Fact]
	public async Task GetByGroupCodeWPging_4()
	{
		// Arrange
		var dsAppUser = _ds.AppUsers.First(x => x.GroupCode.HasValue);
		var dsAppUsers = _ds.AppUsers.Where(x => x.GroupCode == int.MaxValue).ToList();
		var pgr = new Pager(dsAppUsers.Count);

		// Act / Assert
		for (var i = 0; i < pgr.TotalPages; i++) {
			var appUsers = await _apiClient.GetByGroupCodeWPging(groupCode: int.MaxValue);
			Assert.Equal(appUsers.Count, pgr.Expected[i]);
		}
	}

	// GetByUserType() - UserType:Good
	[Fact]
	public async Task GetByUserType_1()
	{
		// Arrange
		var dsAppUser = _ds.AppUsers.First();
		var dsAppUsers = _ds.AppUsers.Where(x => x.UserType == dsAppUser.UserType).ToList();

		// Act
		var appUsers = await _apiClient.GetByUserType(userType: dsAppUser.UserType);

		// Assert
		Assert.Equal(appUsers.Count, dsAppUsers.Count);
	}

	// GetByUserTypeWPging() - UserType:Good, Paging:Good, Paging:Good
	[Fact]
	public async Task GetByUserTypeWPging_1()
	{
		// Arrange
		var dsAppUser = _ds.AppUsers.First();
		var dsAppUsers = _ds.AppUsers.Where(x => x.UserType == dsAppUser.UserType).ToList();
		var pgr = new Pager(dsAppUsers.Count);

		// Act / Assert
		for (var i = 0; i < pgr.TotalPages; i++) {
			var appUsers = await _apiClient.GetByUserTypeWPging(userType: dsAppUser.UserType, pgSize: pgr.PageSize, pgOffset: i);
			Assert.Equal(appUsers.Count, pgr.Expected[i]);
		}
	}

	// GetByUserTypeWPging() - UserType:Good, Paging:NotSupplied, Paging:NotSupplied
	[Fact]
	public async Task GetByUserTypeWPging_2()
	{
		// Arrange
		var dsAppUser = _ds.AppUsers.First();
		var dsAppUsers = _ds.AppUsers.Where(x => x.UserType == dsAppUser.UserType).ToList();
		var pgr = new Pager(dsAppUsers.Count);

		// Act / Assert
		for (var i = 0; i < pgr.TotalPages; i++) {
			var appUsers = await _apiClient.GetByUserTypeWPging(userType: dsAppUser.UserType);
			Assert.Equal(appUsers.Count, pgr.Expected[i]);
		}
	}

	// GetEnabledByUserTypeWPging() - UserType:Good, Paging:Good, Paging:Good
	[Fact]
	public async Task GetEnabledByUserTypeWPging_1()
	{
		// Arrange
		var dsAppUser = _ds.AppUsers.First();
		var dsAppUsers = _ds.AppUsers.Where(x => x.UserType == dsAppUser.UserType).ToList();
		var pgr = new Pager(dsAppUsers.Count);

		// Act / Assert
		for (var i = 0; i < pgr.TotalPages; i++) {
			var appUsers = await _apiClient.GetEnabledByUserTypeWPging(userType: dsAppUser.UserType, pgSize: pgr.PageSize, pgOffset: i);
			Assert.Equal(appUsers.Count, pgr.Expected[i]);
		}
	}

	// GetEnabledByUserTypeWPging() - UserType:Good, Paging:NotSupplied, Paging:NotSupplied
	[Fact]
	public async Task GetEnabledByUserTypeWPging_2()
	{
		// Arrange
		var dsAppUser = _ds.AppUsers.First();
		var dsAppUsers = _ds.AppUsers.Where(x => x.UserType == dsAppUser.UserType).ToList();
		var pgr = new Pager(dsAppUsers.Count);

		// Act / Assert
		for (var i = 0; i < pgr.TotalPages; i++) {
			var appUsers = await _apiClient.GetEnabledByUserTypeWPging(userType: dsAppUser.UserType);
			Assert.Equal(appUsers.Count, pgr.Expected[i]);
		}
	}

	// GetEnabledByUserTypeWPging() - UserType:NotSupplied, Paging:Good, Paging:Good
	[Fact]
	public async Task GetEnabledByUserTypeWPging_3()
	{
		// Arrange
		var dsAppUser = _ds.AppUsers.First();
		var dsAppUsers = _ds.AppUsers.ToList();
		var pgr = new Pager(dsAppUsers.Count);

		// Act / Assert
		for (var i = 0; i < pgr.TotalPages; i++) {
			var appUsers = await _apiClient.GetEnabledByUserTypeWPging(pgSize: pgr.PageSize, pgOffset: i);
			Assert.Equal(appUsers.Count, pgr.Expected[i]);
		}
	}

	// GetEnabledByUserTypeWPging() - UserType:NotSupplied, Paging:NotSupplied, Paging:NotSupplied
	[Fact]
	public async Task GetEnabledByUserTypeWPging_4()
	{
		// Arrange
		var dsAppUser = _ds.AppUsers.First();
		var dsAppUsers = _ds.AppUsers.ToList();
		var pgr = new Pager(dsAppUsers.Count);

		// Act / Assert
		for (var i = 0; i < pgr.TotalPages; i++) {
			var appUsers = await _apiClient.GetEnabledByUserTypeWPging();
			Assert.Equal(appUsers.Count, pgr.Expected[i]);
		}
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

