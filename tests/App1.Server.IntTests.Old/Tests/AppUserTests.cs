using Microsoft.Extensions.DependencyInjection;
using App1.Server.Tests.Int.Data;
using System.Threading.Tasks;

namespace App1.Server.Tests.Int.Tests;

public class Tests
{
	private IDataManager _dataManager;

	[SetUp]
	public void Setup()
	{
		_dataManager = Globals.ServiceProvider.GetRequiredService<IDataManager>();
	}

	[TearDown]
	public void TearDown()
	{
		_dataManager?.Dispose();
	}

	[Test]
	public async Task Test1()
	{
		var dataSet = Globals.DataSets[0];
		await _dataManager.ResetDataSet(dataSet);
	}
}
