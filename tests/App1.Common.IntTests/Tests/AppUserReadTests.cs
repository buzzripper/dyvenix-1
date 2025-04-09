//------------------------------------------------------------------------------------------------------------
// This file was auto-generated 4/9/2025 9:14 AM. Any changes made to it will be lost.
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
		Assert.Equal(_ds.AppUsers.Count, appUser.Count);
	}

	// GetByCompanyId() - CompanyId:Good
	[Fact]
	public async Task GetByCompanyId_01()
	{
		// Arrange
		var dsAppUser = _ds.AppUsers.First(x => x.CompanyId != null);
		var dsAppUsers = _ds.AppUsers.Where(x => x.CompanyId == dsAppUser.CompanyId).ToList();

		// Act
		var appUsers = await _apiClient.GetByCompanyId(companyId: dsAppUser.CompanyId);

		// Assert
		Assert.Equal(dsAppUsers.Count, appUsers.Count);
	}

	// GetByCompanyId() - CompanyId:NotExist
	[Fact]
	public async Task GetByCompanyId_02()
	{
		// Arrange
		var dsAppUser = _ds.AppUsers.First(x => x.CompanyId != null);
		var dsAppUsers = _ds.AppUsers.Where(x => x.CompanyId == Guid.NewGuid().ToString()[10..]).ToList();

		// Act
		var appUsers = await _apiClient.GetByCompanyId(companyId: Guid.NewGuid().ToString()[10..]);

		// Assert
		Assert.Equal(dsAppUsers.Count, appUsers.Count);
	}

	[Fact]
	public async Task GetAllWithPaging()
	{
		var appUser = await _apiClient.GetAllWithPaging();
		Assert.Equal(_ds.AppUsers.Count, appUser.Count);
	}

	// GetEnabledByCompany() - CompanyId:Good
	[Fact]
	public async Task GetEnabledByCompany_01()
	{
		// Arrange
		var dsAppUser = _ds.AppUsers.First(x => x.CompanyId != null);
		var dsAppUsers = _ds.AppUsers.Where(x => x.CompanyId == dsAppUser.CompanyId && x.IsEnabled == true).ToList();

		// Act
		var appUsers = await _apiClient.GetEnabledByCompany(companyId: dsAppUser.CompanyId);

		// Assert
		Assert.Equal(dsAppUsers.Count, appUsers.Count);
	}

	// GetEnabledByCompany() - CompanyId:NotExist
	[Fact]
	public async Task GetEnabledByCompany_02()
	{
		// Arrange
		var dsAppUser = _ds.AppUsers.First(x => x.CompanyId != null);
		var dsAppUsers = _ds.AppUsers.Where(x => x.CompanyId == Guid.NewGuid().ToString()[10..] && x.IsEnabled == true).ToList();

		// Act
		var appUsers = await _apiClient.GetEnabledByCompany(companyId: Guid.NewGuid().ToString()[10..]);

		// Assert
		Assert.Equal(dsAppUsers.Count, appUsers.Count);
	}

	// GetByCompanyExtId() - CompanyId:Good, ExtId:Good
	[Fact]
	public async Task GetByCompanyExtId_01()
	{
		// Arrange
		var dsAppUser = _ds.AppUsers.First(x => x.CompanyId != null);
		var dsAppUsers = _ds.AppUsers.Where(x => x.CompanyId == dsAppUser.CompanyId && x.ExtId == dsAppUser.ExtId).ToList();

		// Act
		var appUsers = await _apiClient.GetByCompanyExtId(companyId: dsAppUser.CompanyId, extId: dsAppUser.ExtId);

		// Assert
		Assert.Equal(dsAppUsers.Count, appUsers.Count);
	}

	// GetByCompanyExtId() - CompanyId:Good, ExtId:NotExist
	[Fact]
	public async Task GetByCompanyExtId_02()
	{
		// Arrange
		var dsAppUser = _ds.AppUsers.First(x => x.CompanyId != null);
		var dsAppUsers = _ds.AppUsers.Where(x => x.CompanyId == dsAppUser.CompanyId && x.ExtId == Guid.NewGuid().ToString()).ToList();

		// Act
		var appUsers = await _apiClient.GetByCompanyExtId(companyId: dsAppUser.CompanyId, extId: Guid.NewGuid().ToString());

		// Assert
		Assert.Equal(dsAppUsers.Count, appUsers.Count);
	}

	// GetByCompanyExtId() - CompanyId:Good, ExtId:NotSupplied
	[Fact]
	public async Task GetByCompanyExtId_03()
	{
		// Arrange
		var dsAppUser = _ds.AppUsers.First(x => x.CompanyId != null);
		var dsAppUsers = _ds.AppUsers.Where(x => x.CompanyId == dsAppUser.CompanyId).ToList();

		// Act
		var appUsers = await _apiClient.GetByCompanyExtId(companyId: dsAppUser.CompanyId);

		// Assert
		Assert.Equal(dsAppUsers.Count, appUsers.Count);
	}

	// GetByCompanyExtId() - CompanyId:NotExist, ExtId:Good
	[Fact]
	public async Task GetByCompanyExtId_04()
	{
		// Arrange
		var dsAppUser = _ds.AppUsers.First(x => x.CompanyId != null);
		var dsAppUsers = _ds.AppUsers.Where(x => x.CompanyId == Guid.NewGuid().ToString()[10..] && x.ExtId == dsAppUser.ExtId).ToList();

		// Act
		var appUsers = await _apiClient.GetByCompanyExtId(companyId: Guid.NewGuid().ToString()[10..], extId: dsAppUser.ExtId);

		// Assert
		Assert.Equal(dsAppUsers.Count, appUsers.Count);
	}

	// GetByCompanyExtId() - CompanyId:NotExist, ExtId:NotExist
	[Fact]
	public async Task GetByCompanyExtId_05()
	{
		// Arrange
		var dsAppUser = _ds.AppUsers.First(x => x.CompanyId != null);
		var dsAppUsers = _ds.AppUsers.Where(x => x.CompanyId == Guid.NewGuid().ToString()[10..] && x.ExtId == Guid.NewGuid().ToString()).ToList();

		// Act
		var appUsers = await _apiClient.GetByCompanyExtId(companyId: Guid.NewGuid().ToString()[10..], extId: Guid.NewGuid().ToString());

		// Assert
		Assert.Equal(dsAppUsers.Count, appUsers.Count);
	}

	// GetByCompanyExtId() - CompanyId:NotExist, ExtId:NotSupplied
	[Fact]
	public async Task GetByCompanyExtId_06()
	{
		// Arrange
		var dsAppUser = _ds.AppUsers.First(x => x.CompanyId != null);
		var dsAppUsers = _ds.AppUsers.Where(x => x.CompanyId == Guid.NewGuid().ToString()[10..]).ToList();

		// Act
		var appUsers = await _apiClient.GetByCompanyExtId(companyId: Guid.NewGuid().ToString()[10..]);

		// Assert
		Assert.Equal(dsAppUsers.Count, appUsers.Count);
	}

	// GetByGroupCode() - GroupCode:Good
	[Fact]
	public async Task GetByGroupCode_01()
	{
		// Arrange
		var dsAppUser = _ds.AppUsers.First(x => x.GroupCode.HasValue);
		var dsAppUsers = _ds.AppUsers.Where(x => x.GroupCode == dsAppUser.GroupCode.Value).ToList();

		// Act
		var appUsers = await _apiClient.GetByGroupCode(groupCode: dsAppUser.GroupCode.Value);

		// Assert
		Assert.Equal(dsAppUsers.Count, appUsers.Count);
	}

	// GetByGroupCode() - GroupCode:NotExist
	[Fact]
	public async Task GetByGroupCode_02()
	{
		// Arrange
		var dsAppUser = _ds.AppUsers.First(x => x.GroupCode.HasValue);
		var dsAppUsers = _ds.AppUsers.Where(x => x.GroupCode == int.MaxValue).ToList();

		// Act
		var appUsers = await _apiClient.GetByGroupCode(groupCode: int.MaxValue);

		// Assert
		Assert.Equal(dsAppUsers.Count, appUsers.Count);
	}

	// GetByGroupCodeWPging() - GroupCode:Good, Paging:Good, Paging:Good
	[Fact]
	public async Task GetByGroupCodeWPging_01()
	{
		// Arrange
		var dsAppUser = _ds.AppUsers.First(x => x.GroupCode.HasValue);
		var dsAppUsers = _ds.AppUsers.Where(x => x.GroupCode == dsAppUser.GroupCode.Value).ToList();
		var pgr = new Pager(dsAppUsers.Count);

		// Act / Assert
		for (var i = 0; i < pgr.TotalPages; i++) {
			var appUsers = await _apiClient.GetByGroupCodeWPging(groupCode: dsAppUser.GroupCode.Value, pgSize: pgr.PageSize, pgOffset: i);
			Assert.Equal(pgr.Expected[i], appUsers.Count);
		}
	}

	// GetByGroupCodeWPging() - GroupCode:Good, Paging:NotSupplied, Paging:NotSupplied
	[Fact]
	public async Task GetByGroupCodeWPging_02()
	{
		// Arrange
		var dsAppUser = _ds.AppUsers.First(x => x.GroupCode.HasValue);
		var dsAppUsers = _ds.AppUsers.Where(x => x.GroupCode == dsAppUser.GroupCode.Value).ToList();
		var pgr = new Pager(dsAppUsers.Count);

		// Act / Assert
		for (var i = 0; i < pgr.TotalPages; i++) {
			var appUsers = await _apiClient.GetByGroupCodeWPging(groupCode: dsAppUser.GroupCode.Value);
			Assert.Equal(pgr.Expected[i], appUsers.Count);
		}
	}

	// GetByGroupCodeWPging() - GroupCode:NotExist, Paging:Good, Paging:Good
	[Fact]
	public async Task GetByGroupCodeWPging_03()
	{
		// Arrange
		var dsAppUser = _ds.AppUsers.First(x => x.GroupCode.HasValue);
		var dsAppUsers = _ds.AppUsers.Where(x => x.GroupCode == int.MaxValue).ToList();

		// Act
		var appUsers = await _apiClient.GetByGroupCodeWPging(groupCode: int.MaxValue, pgSize: 10, pgOffset: 0);

		// Assert
		Assert.Equal(dsAppUsers.Count, appUsers.Count);
	}

	// GetByGroupCodeWPging() - GroupCode:NotExist, Paging:NotSupplied, Paging:NotSupplied
	[Fact]
	public async Task GetByGroupCodeWPging_04()
	{
		// Arrange
		var dsAppUser = _ds.AppUsers.First(x => x.GroupCode.HasValue);
		var dsAppUsers = _ds.AppUsers.Where(x => x.GroupCode == int.MaxValue).ToList();

		// Act
		var appUsers = await _apiClient.GetByGroupCodeWPging(groupCode: int.MaxValue);

		// Assert
		Assert.Equal(dsAppUsers.Count, appUsers.Count);
	}

	// GetByUserType() - UserType:Good
	[Fact]
	public async Task GetByUserType_01()
	{
		// Arrange
		var dsAppUser = _ds.AppUsers.First();
		var dsAppUsers = _ds.AppUsers.Where(x => x.UserType == dsAppUser.UserType).ToList();

		// Act
		var appUsers = await _apiClient.GetByUserType(userType: dsAppUser.UserType);

		// Assert
		Assert.Equal(dsAppUsers.Count, appUsers.Count);
	}

	// GetByUserTypeWPging() - UserType:Good, Paging:Good, Paging:Good
	[Fact]
	public async Task GetByUserTypeWPging_01()
	{
		// Arrange
		var dsAppUser = _ds.AppUsers.First();
		var dsAppUsers = _ds.AppUsers.Where(x => x.UserType == dsAppUser.UserType).ToList();
		var pgr = new Pager(dsAppUsers.Count);

		// Act / Assert
		for (var i = 0; i < pgr.TotalPages; i++) {
			var appUsers = await _apiClient.GetByUserTypeWPging(userType: dsAppUser.UserType, pgSize: pgr.PageSize, pgOffset: i);
			Assert.Equal(pgr.Expected[i], appUsers.Count);
		}
	}

	// GetByUserTypeWPging() - UserType:Good, Paging:NotSupplied, Paging:NotSupplied
	[Fact]
	public async Task GetByUserTypeWPging_02()
	{
		// Arrange
		var dsAppUser = _ds.AppUsers.First();
		var dsAppUsers = _ds.AppUsers.Where(x => x.UserType == dsAppUser.UserType).ToList();
		var pgr = new Pager(dsAppUsers.Count);

		// Act / Assert
		for (var i = 0; i < pgr.TotalPages; i++) {
			var appUsers = await _apiClient.GetByUserTypeWPging(userType: dsAppUser.UserType);
			Assert.Equal(pgr.Expected[i], appUsers.Count);
		}
	}

	// GetEnabledByUserTypeWPging() - UserType:Good, Paging:Good, Paging:Good
	[Fact]
	public async Task GetEnabledByUserTypeWPging_01()
	{
		// Arrange
		var dsAppUser = _ds.AppUsers.First();
		var dsAppUsers = _ds.AppUsers.Where(x => x.UserType == dsAppUser.UserType && x.IsEnabled == true).ToList();
		var pgr = new Pager(dsAppUsers.Count);

		// Act / Assert
		for (var i = 0; i < pgr.TotalPages; i++) {
			var appUsers = await _apiClient.GetEnabledByUserTypeWPging(userType: dsAppUser.UserType, pgSize: pgr.PageSize, pgOffset: i);
			Assert.Equal(pgr.Expected[i], appUsers.Count);
		}
	}

	// GetEnabledByUserTypeWPging() - UserType:Good, Paging:NotSupplied, Paging:NotSupplied
	[Fact]
	public async Task GetEnabledByUserTypeWPging_02()
	{
		// Arrange
		var dsAppUser = _ds.AppUsers.First();
		var dsAppUsers = _ds.AppUsers.Where(x => x.UserType == dsAppUser.UserType && x.IsEnabled == true).ToList();
		var pgr = new Pager(dsAppUsers.Count);

		// Act / Assert
		for (var i = 0; i < pgr.TotalPages; i++) {
			var appUsers = await _apiClient.GetEnabledByUserTypeWPging(userType: dsAppUser.UserType);
			Assert.Equal(pgr.Expected[i], appUsers.Count);
		}
	}

	// GetEnabledByUserTypeWPging() - UserType:NotSupplied, Paging:Good, Paging:Good
	[Fact]
	public async Task GetEnabledByUserTypeWPging_03()
	{
		// Arrange
		var dsAppUser = _ds.AppUsers.First();
		var dsAppUsers = _ds.AppUsers.Where(x => x.IsEnabled == true).ToList();
		var pgr = new Pager(dsAppUsers.Count);

		// Act / Assert
		for (var i = 0; i < pgr.TotalPages; i++) {
			var appUsers = await _apiClient.GetEnabledByUserTypeWPging(pgSize: pgr.PageSize, pgOffset: i);
			Assert.Equal(pgr.Expected[i], appUsers.Count);
		}
	}

	// GetEnabledByUserTypeWPging() - UserType:NotSupplied, Paging:NotSupplied, Paging:NotSupplied
	[Fact]
	public async Task GetEnabledByUserTypeWPging_04()
	{
		// Arrange
		var dsAppUser = _ds.AppUsers.First();
		var dsAppUsers = _ds.AppUsers.Where(x => x.IsEnabled == true).ToList();
		var pgr = new Pager(dsAppUsers.Count);

		// Act / Assert
		for (var i = 0; i < pgr.TotalPages; i++) {
			var appUsers = await _apiClient.GetEnabledByUserTypeWPging();
			Assert.Equal(pgr.Expected[i], appUsers.Count);
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

