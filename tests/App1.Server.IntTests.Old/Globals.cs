using Dyvenix.App1.Data.Contexts;
using Microsoft.Extensions.Configuration;
using System;
using System.IO;
using Dyvenix.App1.Data.Config;
using Microsoft.EntityFrameworkCore;
using System.Threading.Tasks;
using Dyvenix.App1.Common.Entities;
using System.Collections.Generic;
using Microsoft.Extensions.DependencyInjection;
using Dyvenix.App1.Common.Config;
using Dyvenix.App1.Data;
using App1.Server.Tests.Int.Data;

namespace App1.Server.Tests.Int;

[SetUpFixture]
public class Globals
{
	#region Static

	public static ServiceProvider ServiceProvider { get; private set; }
	public static List<DataSet> DataSets { get; set; } = new List<DataSet>();

	#endregion

	[OneTimeSetUp]
	public void OneTimeSetUp()
	{
		// Load appsettings.json
		var basePath = Directory.GetCurrentDirectory();
		var configuration = new ConfigurationBuilder()
			.SetBasePath(basePath)
			.AddJsonFile("appsettings.json", optional: false, reloadOnChange: true)
			.Build();

		var dataConfig = configuration.GetSection(nameof(DataConfig)).Get<DataConfig>();
		var apiClientConfig = configuration.GetSection(nameof(ApiClientConfig)).Get<ApiClientConfig>();

		// Register services
		var services = new ServiceCollection();

		services.AddSingleton(dataConfig);
		services.AddSingleton(apiClientConfig);
		services.AddDyvenixDataServices(dataConfig);
		services.AddApiClientServices(apiClientConfig);
		services.AddTransient<IDataManager, DataManager>();

		ServiceProvider = services.BuildServiceProvider();

		var dataGenerator = new TestDataGenerator();
		DataSets.Add(dataGenerator.CreateDefaultDataSet());
	}

	[OneTimeTearDown]
	public void OneTimeTearown()
	{
		ServiceProvider.Dispose();
	}
}
