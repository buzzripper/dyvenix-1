using App1.Tests.Common.Data;
using Dyvenix.App1.Common.ApiClients;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Linq;
using System.Threading.Tasks;
using Xunit.Abstractions;

namespace App1.Common.IntTests.Tests;

#region Fixture

public class AppUserReadTestsFixture : IClassFixture<GlobalTestFixture>, IDisposable
{
	public AppUserReadTestsFixture(GlobalTestFixture globalFixture)
	{
		var dataManager = globalFixture.ServiceProvider.GetRequiredService<IDataManager>();

		// Reset db here once for this class and cache the test data, because all tests are reading data only, no inserts/updates/deletes
		this.DataSet = dataManager.ResetDataSet(DataSetType.Default).GetAwaiter().GetResult();

		this.AppUserApiClient = globalFixture.ServiceProvider.GetRequiredService<IAppUserApiClient>();
	}

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
	private readonly DataSet _dataSet;

	#endregion

	#region Ctors / Init

	public AppUserReadTests(AppUserReadTestsFixture classFixture, ITestOutputHelper output)
	{
		_apiClient = classFixture.AppUserApiClient;
		_dataSet = classFixture.DataSet;
	}

	public void Dispose()
	{
	}

	#endregion

	[Fact]
	public async Task GetById_Success()
	{
		var dsAppUser = _dataSet.AppUsers.First();

		var appUser = await _apiClient.GetById(dsAppUser.Id);

		Assert.Equal(dsAppUser.LastName, appUser.LastName);
	}

	[Fact]
	public async Task GetById_NotFound_RetunsNull()
	{
		var appUser = await _apiClient.GetById(Guid.NewGuid());
		Assert.Null(appUser);
	}

	[Fact]
	public async Task GetAll_Success()
	{
		var appUsers = await _apiClient.GetAll();

		Assert.Equal(appUsers.Count, _dataSet.AppUsers.Count);
	}

	[Fact]
	public async Task GetAllWithPaging_Success()
	{
		var count = _dataSet.AppUsers.Count;
		if (count < 3)
			throw new ApplicationException("Need at least 3 AppUsers to test paging");

		var pageSize = _dataSet.AppUsers.Count / 3;
		var remainder = _dataSet.AppUsers.Count % 3;
		var totalPages = (remainder == 0) ? 3 : 4;

		for (var i = 0; i < totalPages; i++) {
			var appUsers = await _apiClient.GetAllWithPaging(pageSize, i);
			if (i < (totalPages - 1)) {
				Assert.Equal(pageSize, appUsers.Count);
			} else {
				Assert.Equal(remainder, appUsers.Count);
			}
		}
	}

	[Fact]
	public async Task GetByFirstName_Success()
	{
		var count = _dataSet.AppUsers.Count;
		var dsAppUser = _dataSet.AppUsers.Skip(Rnd(0, count - 1)).FirstOrDefault();
		var dsAppUsers = _dataSet.AppUsers.Where(x => x.FirstName == dsAppUser.FirstName).ToList();

		var appUsers = await _apiClient.GetByFirstName(dsAppUser.FirstName);

		Assert.Equal(dsAppUsers.Count, appUsers.Count);
	}

	[Fact]
	public async Task GetByFirstName_NotFound()
	{
		var appUsers = await _apiClient.GetByFirstName(Guid.NewGuid().ToString());

		Assert.Empty(appUsers);
	}

	[Fact]
	public async Task GetByFirstName_NoArg()
	{
		var count = _dataSet.AppUsers.Count;

		var appUsers = await _apiClient.GetByFirstName(null);

		Assert.Equal(count, appUsers.Count);
	}

	private static int Rnd(int x, int y)
	{
		if (x > y)
			throw new ArgumentException("x must be less than or equal to y");
		return _random.Next(x, y + 1); // +1 to include 'y'
	}
}
