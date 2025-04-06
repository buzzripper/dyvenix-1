using App1.Tests.Common.Data;
using Dyvenix.App1.Common.ApiClients;
using Dyvenix.App1.Common.Config;
using Dyvenix.App1.Common.Entities;
using Dyvenix.App1.Data.Config;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Xunit;
using Xunit.Abstractions;

namespace App1.Common.IntTests.Tests;

#region Fixture

public class DataSetupTestsFixture : IDisposable
{
	//private readonly IServiceProvider _serviceProvider;

	public DataSetupTestsFixture()
	{
		var basePath = Directory.GetCurrentDirectory();
		var configuration = new ConfigurationBuilder()
			.SetBasePath(basePath)
			.AddJsonFile("appsettings.json", optional: false, reloadOnChange: true)
			.Build();

		var dataConfig = configuration.GetSection(nameof(DataConfig)).Get<DataConfig>();

		var services = new ServiceCollection();

		// Register your services here
		services.AddDyvenixDataServices(dataConfig);
		services.AddSingleton<IDataManager, DataManager>();

		this.ServiceProvider = services.BuildServiceProvider();
	}

	public IServiceProvider ServiceProvider { get; }

	public void Dispose()
	{
	}
}

#endregion

public class DataSetupTests : IClassFixture<DataSetupTestsFixture>, IDisposable
{
	#region Fields

	private readonly IServiceProvider _serviceProvider;
	private readonly ITestOutputHelper _output;
	#endregion

	#region Ctors / Init

	public DataSetupTests(DataSetupTestsFixture classFixture, ITestOutputHelper output)
	{
		_serviceProvider = classFixture.ServiceProvider;
		_output = output;
	}

	public void Dispose()
	{
		
	}

	#endregion

	[Fact]
	public async Task SetupData()
	{
		using var dataMgr = _serviceProvider.GetService<IDataManager>();
		var appUsersToCreate = await dataMgr.ResetDataSet(DataSetType.Default);

		_output.WriteLine("Done!");
	}
}

