//------------------------------------------------------------------------------------------------------------
// This file was auto-generated 4/8/2025 5:35 PM. Any changes made to it will be lost.
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
		var appUsers = await _apiClient.GetByCompanyId(companyId: Good.Value);

		// Assert
		Assert.Equal(appUsers.Count, _ds.AppUsers.Count);
	}

	// GetByCompanyId() - CompanyId:NotFound
	[Fact]
	public async Task GetByCompanyId_2()
	{
		// Arrange
		var dsAppUser = _ds.AppUsers.First(x => x.CompanyId != null);
		var dsAppUsers = _ds.AppUsers.Where(x => x.CompanyId == "ef5-4741-bbab-29dd38691f54").ToList();

		// Act
		var appUsers = await _apiClient.GetByCompanyId(companyId: NotFound.Value);

		// Assert
		Assert.Equal(appUsers.Count, _ds.AppUsers.Count);
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
		var appUsers = await _apiClient.GetEnabledByCompany(companyId: Good.Value);

		// Assert
		Assert.Equal(appUsers.Count, _ds.AppUsers.Count);
	}

	// GetEnabledByCompany() - CompanyId:NotFound
	[Fact]
	public async Task GetEnabledByCompany_2()
	{
		// Arrange
		var dsAppUser = _ds.AppUsers.First(x => x.CompanyId != null);
		var dsAppUsers = _ds.AppUsers.Where(x => x.CompanyId == "6aa-4f19-a936-70a99d22ae28").ToList();

		// Act
		var appUsers = await _apiClient.GetEnabledByCompany(companyId: NotFound.Value);

		// Assert
		Assert.Equal(appUsers.Count, _ds.AppUsers.Count);
	}

	// GetByCompanyExtId() - CompanyId:Good, ExtId:Good, Paging:Good
	[Fact]
	public async Task GetByCompanyExtId_1()
	{
		// Arrange
		var dsAppUser = _ds.AppUsers.First(x => x.CompanyId != null);
		var dsAppUsers = _ds.AppUsers.Where(x => x.CompanyId == dsAppUser.CompanyId && x.ExtId == dsAppUser.ExtId).ToList();
		var pgr = new Pager(dsAppUsers.Count);

		// Act / Assert
		for (var i = 0; i < pgr.TotalPages; i++) {
			var appUsers = await _apiClient.GetAllWithPaging(pgr.PageSize, i);
			Assert.Equal(appUsers.Count, pgr.Expected[i]);
		}
	}

	// GetByCompanyExtId() - CompanyId:Good, ExtId:Good, Paging:NotSupplied
	[Fact]
	public async Task GetByCompanyExtId_2()
	{
		// Arrange
		var dsAppUser = _ds.AppUsers.First(x => x.CompanyId != null);
		var dsAppUsers = _ds.AppUsers.Where(x => x.CompanyId == dsAppUser.CompanyId && x.ExtId == dsAppUser.ExtId).ToList();
		var pgr = new Pager(dsAppUsers.Count);

		// Act / Assert
		for (var i = 0; i < pgr.TotalPages; i++) {
			var appUsers = await _apiClient.GetAllWithPaging(pgr.PageSize, i);
			Assert.Equal(appUsers.Count, pgr.Expected[i]);
		}
	}

	// GetByCompanyExtId() - CompanyId:Good, ExtId:NotFound, Paging:Good
	[Fact]
	public async Task GetByCompanyExtId_3()
	{
		// Arrange
		var dsAppUser = _ds.AppUsers.First(x => x.CompanyId != null);
		var dsAppUsers = _ds.AppUsers.Where(x => x.CompanyId == dsAppUser.CompanyId && x.ExtId == "3900eba7-b512-4708-8036-54ab44909adb").ToList();
		var pgr = new Pager(dsAppUsers.Count);

		// Act / Assert
		for (var i = 0; i < pgr.TotalPages; i++) {
			var appUsers = await _apiClient.GetAllWithPaging(pgr.PageSize, i);
			Assert.Equal(appUsers.Count, pgr.Expected[i]);
		}
	}

	// GetByCompanyExtId() - CompanyId:Good, ExtId:NotFound, Paging:NotSupplied
	[Fact]
	public async Task GetByCompanyExtId_4()
	{
		// Arrange
		var dsAppUser = _ds.AppUsers.First(x => x.CompanyId != null);
		var dsAppUsers = _ds.AppUsers.Where(x => x.CompanyId == dsAppUser.CompanyId && x.ExtId == "3900eba7-b512-4708-8036-54ab44909adb").ToList();
		var pgr = new Pager(dsAppUsers.Count);

		// Act / Assert
		for (var i = 0; i < pgr.TotalPages; i++) {
			var appUsers = await _apiClient.GetAllWithPaging(pgr.PageSize, i);
			Assert.Equal(appUsers.Count, pgr.Expected[i]);
		}
	}

	// GetByCompanyExtId() - CompanyId:Good, ExtId:NotSupplied, Paging:Good
	[Fact]
	public async Task GetByCompanyExtId_5()
	{
		// Arrange
		var dsAppUser = _ds.AppUsers.First(x => x.CompanyId != null);
		var dsAppUsers = _ds.AppUsers.Where(x => x.CompanyId == dsAppUser.CompanyId && x.ExtId == null).ToList();
		var pgr = new Pager(dsAppUsers.Count);

		// Act / Assert
		for (var i = 0; i < pgr.TotalPages; i++) {
			var appUsers = await _apiClient.GetAllWithPaging(pgr.PageSize, i);
			Assert.Equal(appUsers.Count, pgr.Expected[i]);
		}
	}

	// GetByCompanyExtId() - CompanyId:Good, ExtId:NotSupplied, Paging:NotSupplied
	[Fact]
	public async Task GetByCompanyExtId_6()
	{
		// Arrange
		var dsAppUser = _ds.AppUsers.First(x => x.CompanyId != null);
		var dsAppUsers = _ds.AppUsers.Where(x => x.CompanyId == dsAppUser.CompanyId && x.ExtId == null).ToList();
		var pgr = new Pager(dsAppUsers.Count);

		// Act / Assert
		for (var i = 0; i < pgr.TotalPages; i++) {
			var appUsers = await _apiClient.GetAllWithPaging(pgr.PageSize, i);
			Assert.Equal(appUsers.Count, pgr.Expected[i]);
		}
	}

	// GetByCompanyExtId() - CompanyId:NotFound, ExtId:Good, Paging:Good
	[Fact]
	public async Task GetByCompanyExtId_7()
	{
		// Arrange
		var dsAppUser = _ds.AppUsers.First(x => x.CompanyId != null);
		var dsAppUsers = _ds.AppUsers.Where(x => x.CompanyId == "472-4aef-824a-f2eb40205361" && x.ExtId == dsAppUser.ExtId).ToList();
		var pgr = new Pager(dsAppUsers.Count);

		// Act / Assert
		for (var i = 0; i < pgr.TotalPages; i++) {
			var appUsers = await _apiClient.GetAllWithPaging(pgr.PageSize, i);
			Assert.Equal(appUsers.Count, pgr.Expected[i]);
		}
	}

	// GetByCompanyExtId() - CompanyId:NotFound, ExtId:Good, Paging:NotSupplied
	[Fact]
	public async Task GetByCompanyExtId_8()
	{
		// Arrange
		var dsAppUser = _ds.AppUsers.First(x => x.CompanyId != null);
		var dsAppUsers = _ds.AppUsers.Where(x => x.CompanyId == "472-4aef-824a-f2eb40205361" && x.ExtId == dsAppUser.ExtId).ToList();
		var pgr = new Pager(dsAppUsers.Count);

		// Act / Assert
		for (var i = 0; i < pgr.TotalPages; i++) {
			var appUsers = await _apiClient.GetAllWithPaging(pgr.PageSize, i);
			Assert.Equal(appUsers.Count, pgr.Expected[i]);
		}
	}

	// GetByCompanyExtId() - CompanyId:NotFound, ExtId:NotFound, Paging:Good
	[Fact]
	public async Task GetByCompanyExtId_9()
	{
		// Arrange
		var dsAppUser = _ds.AppUsers.First(x => x.CompanyId != null);
		var dsAppUsers = _ds.AppUsers.Where(x => x.CompanyId == "472-4aef-824a-f2eb40205361" && x.ExtId == "3900eba7-b512-4708-8036-54ab44909adb").ToList();
		var pgr = new Pager(dsAppUsers.Count);

		// Act / Assert
		for (var i = 0; i < pgr.TotalPages; i++) {
			var appUsers = await _apiClient.GetAllWithPaging(pgr.PageSize, i);
			Assert.Equal(appUsers.Count, pgr.Expected[i]);
		}
	}

	// GetByCompanyExtId() - CompanyId:NotFound, ExtId:NotFound, Paging:NotSupplied
	[Fact]
	public async Task GetByCompanyExtId_10()
	{
		// Arrange
		var dsAppUser = _ds.AppUsers.First(x => x.CompanyId != null);
		var dsAppUsers = _ds.AppUsers.Where(x => x.CompanyId == "472-4aef-824a-f2eb40205361" && x.ExtId == "3900eba7-b512-4708-8036-54ab44909adb").ToList();
		var pgr = new Pager(dsAppUsers.Count);

		// Act / Assert
		for (var i = 0; i < pgr.TotalPages; i++) {
			var appUsers = await _apiClient.GetAllWithPaging(pgr.PageSize, i);
			Assert.Equal(appUsers.Count, pgr.Expected[i]);
		}
	}

	// GetByCompanyExtId() - CompanyId:NotFound, ExtId:NotSupplied, Paging:Good
	[Fact]
	public async Task GetByCompanyExtId_11()
	{
		// Arrange
		var dsAppUser = _ds.AppUsers.First(x => x.CompanyId != null);
		var dsAppUsers = _ds.AppUsers.Where(x => x.CompanyId == "472-4aef-824a-f2eb40205361" && x.ExtId == null).ToList();
		var pgr = new Pager(dsAppUsers.Count);

		// Act / Assert
		for (var i = 0; i < pgr.TotalPages; i++) {
			var appUsers = await _apiClient.GetAllWithPaging(pgr.PageSize, i);
			Assert.Equal(appUsers.Count, pgr.Expected[i]);
		}
	}

	// GetByCompanyExtId() - CompanyId:NotFound, ExtId:NotSupplied, Paging:NotSupplied
	[Fact]
	public async Task GetByCompanyExtId_12()
	{
		// Arrange
		var dsAppUser = _ds.AppUsers.First(x => x.CompanyId != null);
		var dsAppUsers = _ds.AppUsers.Where(x => x.CompanyId == "472-4aef-824a-f2eb40205361" && x.ExtId == null).ToList();
		var pgr = new Pager(dsAppUsers.Count);

		// Act / Assert
		for (var i = 0; i < pgr.TotalPages; i++) {
			var appUsers = await _apiClient.GetAllWithPaging(pgr.PageSize, i);
			Assert.Equal(appUsers.Count, pgr.Expected[i]);
		}
	}

	// GetByCompanyExtIdWPging() - CompanyId:Good, ExtId:Good, Paging:Good
	[Fact]
	public async Task GetByCompanyExtIdWPging_1()
	{
		// Arrange
		var dsAppUser = _ds.AppUsers.First(x => x.CompanyId != null);
		var dsAppUsers = _ds.AppUsers.Where(x => x.CompanyId == dsAppUser.CompanyId && x.ExtId == dsAppUser.ExtId).ToList();
		var pgr = new Pager(dsAppUsers.Count);

		// Act / Assert
		for (var i = 0; i < pgr.TotalPages; i++) {
			var appUsers = await _apiClient.GetAllWithPaging(pgr.PageSize, i);
			Assert.Equal(appUsers.Count, pgr.Expected[i]);
		}
	}

	// GetByCompanyExtIdWPging() - CompanyId:Good, ExtId:Good, Paging:NotSupplied
	[Fact]
	public async Task GetByCompanyExtIdWPging_2()
	{
		// Arrange
		var dsAppUser = _ds.AppUsers.First(x => x.CompanyId != null);
		var dsAppUsers = _ds.AppUsers.Where(x => x.CompanyId == dsAppUser.CompanyId && x.ExtId == dsAppUser.ExtId).ToList();
		var pgr = new Pager(dsAppUsers.Count);

		// Act / Assert
		for (var i = 0; i < pgr.TotalPages; i++) {
			var appUsers = await _apiClient.GetAllWithPaging(pgr.PageSize, i);
			Assert.Equal(appUsers.Count, pgr.Expected[i]);
		}
	}

	// GetByCompanyExtIdWPging() - CompanyId:Good, ExtId:NotFound, Paging:Good
	[Fact]
	public async Task GetByCompanyExtIdWPging_3()
	{
		// Arrange
		var dsAppUser = _ds.AppUsers.First(x => x.CompanyId != null);
		var dsAppUsers = _ds.AppUsers.Where(x => x.CompanyId == dsAppUser.CompanyId && x.ExtId == "5cf6bc6f-bc72-4ab8-8379-d8f60fd4aea5").ToList();
		var pgr = new Pager(dsAppUsers.Count);

		// Act / Assert
		for (var i = 0; i < pgr.TotalPages; i++) {
			var appUsers = await _apiClient.GetAllWithPaging(pgr.PageSize, i);
			Assert.Equal(appUsers.Count, pgr.Expected[i]);
		}
	}

	// GetByCompanyExtIdWPging() - CompanyId:Good, ExtId:NotFound, Paging:NotSupplied
	[Fact]
	public async Task GetByCompanyExtIdWPging_4()
	{
		// Arrange
		var dsAppUser = _ds.AppUsers.First(x => x.CompanyId != null);
		var dsAppUsers = _ds.AppUsers.Where(x => x.CompanyId == dsAppUser.CompanyId && x.ExtId == "5cf6bc6f-bc72-4ab8-8379-d8f60fd4aea5").ToList();
		var pgr = new Pager(dsAppUsers.Count);

		// Act / Assert
		for (var i = 0; i < pgr.TotalPages; i++) {
			var appUsers = await _apiClient.GetAllWithPaging(pgr.PageSize, i);
			Assert.Equal(appUsers.Count, pgr.Expected[i]);
		}
	}

	// GetByCompanyExtIdWPging() - CompanyId:Good, ExtId:NotSupplied, Paging:Good
	[Fact]
	public async Task GetByCompanyExtIdWPging_5()
	{
		// Arrange
		var dsAppUser = _ds.AppUsers.First(x => x.CompanyId != null);
		var dsAppUsers = _ds.AppUsers.Where(x => x.CompanyId == dsAppUser.CompanyId && x.ExtId == null).ToList();
		var pgr = new Pager(dsAppUsers.Count);

		// Act / Assert
		for (var i = 0; i < pgr.TotalPages; i++) {
			var appUsers = await _apiClient.GetAllWithPaging(pgr.PageSize, i);
			Assert.Equal(appUsers.Count, pgr.Expected[i]);
		}
	}

	// GetByCompanyExtIdWPging() - CompanyId:Good, ExtId:NotSupplied, Paging:NotSupplied
	[Fact]
	public async Task GetByCompanyExtIdWPging_6()
	{
		// Arrange
		var dsAppUser = _ds.AppUsers.First(x => x.CompanyId != null);
		var dsAppUsers = _ds.AppUsers.Where(x => x.CompanyId == dsAppUser.CompanyId && x.ExtId == null).ToList();
		var pgr = new Pager(dsAppUsers.Count);

		// Act / Assert
		for (var i = 0; i < pgr.TotalPages; i++) {
			var appUsers = await _apiClient.GetAllWithPaging(pgr.PageSize, i);
			Assert.Equal(appUsers.Count, pgr.Expected[i]);
		}
	}

	// GetByCompanyExtIdWPging() - CompanyId:NotFound, ExtId:Good, Paging:Good
	[Fact]
	public async Task GetByCompanyExtIdWPging_7()
	{
		// Arrange
		var dsAppUser = _ds.AppUsers.First(x => x.CompanyId != null);
		var dsAppUsers = _ds.AppUsers.Where(x => x.CompanyId == "539-463d-9bf0-89c7dda81c9c" && x.ExtId == dsAppUser.ExtId).ToList();
		var pgr = new Pager(dsAppUsers.Count);

		// Act / Assert
		for (var i = 0; i < pgr.TotalPages; i++) {
			var appUsers = await _apiClient.GetAllWithPaging(pgr.PageSize, i);
			Assert.Equal(appUsers.Count, pgr.Expected[i]);
		}
	}

	// GetByCompanyExtIdWPging() - CompanyId:NotFound, ExtId:Good, Paging:NotSupplied
	[Fact]
	public async Task GetByCompanyExtIdWPging_8()
	{
		// Arrange
		var dsAppUser = _ds.AppUsers.First(x => x.CompanyId != null);
		var dsAppUsers = _ds.AppUsers.Where(x => x.CompanyId == "539-463d-9bf0-89c7dda81c9c" && x.ExtId == dsAppUser.ExtId).ToList();
		var pgr = new Pager(dsAppUsers.Count);

		// Act / Assert
		for (var i = 0; i < pgr.TotalPages; i++) {
			var appUsers = await _apiClient.GetAllWithPaging(pgr.PageSize, i);
			Assert.Equal(appUsers.Count, pgr.Expected[i]);
		}
	}

	// GetByCompanyExtIdWPging() - CompanyId:NotFound, ExtId:NotFound, Paging:Good
	[Fact]
	public async Task GetByCompanyExtIdWPging_9()
	{
		// Arrange
		var dsAppUser = _ds.AppUsers.First(x => x.CompanyId != null);
		var dsAppUsers = _ds.AppUsers.Where(x => x.CompanyId == "539-463d-9bf0-89c7dda81c9c" && x.ExtId == "5cf6bc6f-bc72-4ab8-8379-d8f60fd4aea5").ToList();
		var pgr = new Pager(dsAppUsers.Count);

		// Act / Assert
		for (var i = 0; i < pgr.TotalPages; i++) {
			var appUsers = await _apiClient.GetAllWithPaging(pgr.PageSize, i);
			Assert.Equal(appUsers.Count, pgr.Expected[i]);
		}
	}

	// GetByCompanyExtIdWPging() - CompanyId:NotFound, ExtId:NotFound, Paging:NotSupplied
	[Fact]
	public async Task GetByCompanyExtIdWPging_10()
	{
		// Arrange
		var dsAppUser = _ds.AppUsers.First(x => x.CompanyId != null);
		var dsAppUsers = _ds.AppUsers.Where(x => x.CompanyId == "539-463d-9bf0-89c7dda81c9c" && x.ExtId == "5cf6bc6f-bc72-4ab8-8379-d8f60fd4aea5").ToList();
		var pgr = new Pager(dsAppUsers.Count);

		// Act / Assert
		for (var i = 0; i < pgr.TotalPages; i++) {
			var appUsers = await _apiClient.GetAllWithPaging(pgr.PageSize, i);
			Assert.Equal(appUsers.Count, pgr.Expected[i]);
		}
	}

	// GetByCompanyExtIdWPging() - CompanyId:NotFound, ExtId:NotSupplied, Paging:Good
	[Fact]
	public async Task GetByCompanyExtIdWPging_11()
	{
		// Arrange
		var dsAppUser = _ds.AppUsers.First(x => x.CompanyId != null);
		var dsAppUsers = _ds.AppUsers.Where(x => x.CompanyId == "539-463d-9bf0-89c7dda81c9c" && x.ExtId == null).ToList();
		var pgr = new Pager(dsAppUsers.Count);

		// Act / Assert
		for (var i = 0; i < pgr.TotalPages; i++) {
			var appUsers = await _apiClient.GetAllWithPaging(pgr.PageSize, i);
			Assert.Equal(appUsers.Count, pgr.Expected[i]);
		}
	}

	// GetByCompanyExtIdWPging() - CompanyId:NotFound, ExtId:NotSupplied, Paging:NotSupplied
	[Fact]
	public async Task GetByCompanyExtIdWPging_12()
	{
		// Arrange
		var dsAppUser = _ds.AppUsers.First(x => x.CompanyId != null);
		var dsAppUsers = _ds.AppUsers.Where(x => x.CompanyId == "539-463d-9bf0-89c7dda81c9c" && x.ExtId == null).ToList();
		var pgr = new Pager(dsAppUsers.Count);

		// Act / Assert
		for (var i = 0; i < pgr.TotalPages; i++) {
			var appUsers = await _apiClient.GetAllWithPaging(pgr.PageSize, i);
			Assert.Equal(appUsers.Count, pgr.Expected[i]);
		}
	}

	// GetByGroupCode() - GroupCode:Good
	[Fact]
	public async Task GetByGroupCode_1()
	{
		// Arrange
		var dsAppUser = _ds.AppUsers.First(x => x.GroupCode.HasValue);
		var dsAppUsers = _ds.AppUsers.Where(x => x.GroupCode == dsAppUser.GroupCode).ToList();

		// Act
		var appUsers = await _apiClient.GetByGroupCode(groupCode: Good);

		// Assert
		Assert.Equal(appUsers.Count, _ds.AppUsers.Count);
	}

	// GetByGroupCode() - GroupCode:NotFound
	[Fact]
	public async Task GetByGroupCode_2()
	{
		// Arrange
		var dsAppUser = _ds.AppUsers.First(x => x.GroupCode.HasValue);
		var dsAppUsers = _ds.AppUsers.Where(x => x.GroupCode == int.MaxValue).ToList();

		// Act
		var appUsers = await _apiClient.GetByGroupCode(groupCode: NotFound);

		// Assert
		Assert.Equal(appUsers.Count, _ds.AppUsers.Count);
	}

	// GetByGroupCodeWPging() - GroupCode:Good
	[Fact]
	public async Task GetByGroupCodeWPging_1()
	{
		// Arrange
		var dsAppUser = _ds.AppUsers.First(x => x.GroupCode.HasValue);
		var dsAppUsers = _ds.AppUsers.Where(x => x.GroupCode == dsAppUser.GroupCode).ToList();

		// Act
		var appUsers = await _apiClient.GetByGroupCodeWPging(groupCode: Good);

		// Assert
		Assert.Equal(appUsers.Count, _ds.AppUsers.Count);
	}

	// GetByGroupCodeWPging() - GroupCode:NotFound
	[Fact]
	public async Task GetByGroupCodeWPging_2()
	{
		// Arrange
		var dsAppUser = _ds.AppUsers.First(x => x.GroupCode.HasValue);
		var dsAppUsers = _ds.AppUsers.Where(x => x.GroupCode == int.MaxValue).ToList();

		// Act
		var appUsers = await _apiClient.GetByGroupCodeWPging(groupCode: NotFound);

		// Assert
		Assert.Equal(appUsers.Count, _ds.AppUsers.Count);
	}

	// GetByUserType() - UserType:Good
	[Fact]
	public async Task GetByUserType_1()
	{
		// Arrange
		var dsAppUser = _ds.AppUsers.First();
		var dsAppUsers = _ds.AppUsers.Where(x => x.UserType == dsAppUser.UserType).ToList();

		// Act
		var appUsers = await _apiClient.GetByUserType(userType: Good);

		// Assert
		Assert.Equal(appUsers.Count, _ds.AppUsers.Count);
	}

	// GetByUserType() - UserType:NotFound
	[Fact]
	public async Task GetByUserType_2()
	{
		// Arrange
		var dsAppUser = _ds.AppUsers.First();
		var dsAppUsers = _ds.AppUsers.Where(x => x.UserType == null).ToList();

		// Act
		var appUsers = await _apiClient.GetByUserType(userType: NotFound);

		// Assert
		Assert.Equal(appUsers.Count, _ds.AppUsers.Count);
	}

	// GetByUserTypeWPging() - UserType:Good
	[Fact]
	public async Task GetByUserTypeWPging_1()
	{
		// Arrange
		var dsAppUser = _ds.AppUsers.First();
		var dsAppUsers = _ds.AppUsers.Where(x => x.UserType == dsAppUser.UserType).ToList();

		// Act
		var appUsers = await _apiClient.GetByUserTypeWPging(userType: Good);

		// Assert
		Assert.Equal(appUsers.Count, _ds.AppUsers.Count);
	}

	// GetByUserTypeWPging() - UserType:NotFound
	[Fact]
	public async Task GetByUserTypeWPging_2()
	{
		// Arrange
		var dsAppUser = _ds.AppUsers.First();
		var dsAppUsers = _ds.AppUsers.Where(x => x.UserType == null).ToList();

		// Act
		var appUsers = await _apiClient.GetByUserTypeWPging(userType: NotFound);

		// Assert
		Assert.Equal(appUsers.Count, _ds.AppUsers.Count);
	}

	// GetEnabledByUserTypeWPging() - UserType:Good, Paging:Good
	[Fact]
	public async Task GetEnabledByUserTypeWPging_1()
	{
		// Arrange
		var dsAppUser = _ds.AppUsers.First();
		var dsAppUsers = _ds.AppUsers.Where(x => x.UserType == dsAppUser.UserType).ToList();
		var pgr = new Pager(dsAppUsers.Count);

		// Act / Assert
		for (var i = 0; i < pgr.TotalPages; i++) {
			var appUsers = await _apiClient.GetAllWithPaging(pgr.PageSize, i);
			Assert.Equal(appUsers.Count, pgr.Expected[i]);
		}
	}

	// GetEnabledByUserTypeWPging() - UserType:Good, Paging:NotSupplied
	[Fact]
	public async Task GetEnabledByUserTypeWPging_2()
	{
		// Arrange
		var dsAppUser = _ds.AppUsers.First();
		var dsAppUsers = _ds.AppUsers.Where(x => x.UserType == dsAppUser.UserType).ToList();
		var pgr = new Pager(dsAppUsers.Count);

		// Act / Assert
		for (var i = 0; i < pgr.TotalPages; i++) {
			var appUsers = await _apiClient.GetAllWithPaging(pgr.PageSize, i);
			Assert.Equal(appUsers.Count, pgr.Expected[i]);
		}
	}

	// GetEnabledByUserTypeWPging() - UserType:NotFound, Paging:Good
	[Fact]
	public async Task GetEnabledByUserTypeWPging_3()
	{
		// Arrange
		var dsAppUser = _ds.AppUsers.First();
		var dsAppUsers = _ds.AppUsers.Where(x => x.UserType == null).ToList();
		var pgr = new Pager(dsAppUsers.Count);

		// Act / Assert
		for (var i = 0; i < pgr.TotalPages; i++) {
			var appUsers = await _apiClient.GetAllWithPaging(pgr.PageSize, i);
			Assert.Equal(appUsers.Count, pgr.Expected[i]);
		}
	}

	// GetEnabledByUserTypeWPging() - UserType:NotFound, Paging:NotSupplied
	[Fact]
	public async Task GetEnabledByUserTypeWPging_4()
	{
		// Arrange
		var dsAppUser = _ds.AppUsers.First();
		var dsAppUsers = _ds.AppUsers.Where(x => x.UserType == null).ToList();
		var pgr = new Pager(dsAppUsers.Count);

		// Act / Assert
		for (var i = 0; i < pgr.TotalPages; i++) {
			var appUsers = await _apiClient.GetAllWithPaging(pgr.PageSize, i);
			Assert.Equal(appUsers.Count, pgr.Expected[i]);
		}
	}

	// GetEnabledByUserTypeWPging() - UserType:NotSupplied, Paging:Good
	[Fact]
	public async Task GetEnabledByUserTypeWPging_5()
	{
		// Arrange
		var dsAppUser = _ds.AppUsers.First();
		var dsAppUsers = _ds.AppUsers.Where(x => x.UserType == null).ToList();
		var pgr = new Pager(dsAppUsers.Count);

		// Act / Assert
		for (var i = 0; i < pgr.TotalPages; i++) {
			var appUsers = await _apiClient.GetAllWithPaging(pgr.PageSize, i);
			Assert.Equal(appUsers.Count, pgr.Expected[i]);
		}
	}

	// GetEnabledByUserTypeWPging() - UserType:NotSupplied, Paging:NotSupplied
	[Fact]
	public async Task GetEnabledByUserTypeWPging_6()
	{
		// Arrange
		var dsAppUser = _ds.AppUsers.First();
		var dsAppUsers = _ds.AppUsers.Where(x => x.UserType == null).ToList();
		var pgr = new Pager(dsAppUsers.Count);

		// Act / Assert
		for (var i = 0; i < pgr.TotalPages; i++) {
			var appUsers = await _apiClient.GetAllWithPaging(pgr.PageSize, i);
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

