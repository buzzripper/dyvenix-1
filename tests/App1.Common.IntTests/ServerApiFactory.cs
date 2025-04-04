using System.IO;
using System.Net.Http;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc.Testing;
using Microsoft.AspNetCore.TestHost;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Dyvenix.App1.Common.Config;
using App1.Tests.Common.Data;
using Dyvenix.App1.Data.Config;
using Dyvenix.App1.Data;
using Microsoft.EntityFrameworkCore;
using System;

namespace App1.Common.IntTests;

public class ServerApiFactory : WebApplicationFactory<Program>
{
	protected override void ConfigureWebHost(IWebHostBuilder builder)
	{
		builder.ConfigureTestServices(services => {

			// Load appsettings.json / configs
			var basePath = Directory.GetCurrentDirectory();
			var configuration = new ConfigurationBuilder()
				.SetBasePath(basePath)
				.AddJsonFile("appsettings.json", optional: false, reloadOnChange: true)
				.Build();

			var apiClientConfig = configuration.GetSection("ApiClientConfig").Get<ApiClientConfig>();

			services.AddApiClientServices(apiClientConfig);

			services.AddSingleton<IDataManager, DataManager>();

			// Override the default registration with an HttpClient that uses the test server
			services.AddTransient<HttpClient>(sp => {
				return this.CreateClient();
			});

			// Override the default registration with an options that returns the in-memory database
			//services.AddSingleton<DbContextOptions<Db>>(sp => {
			//	return new DbContextOptionsBuilder<Db>()
			//		.UseInMemoryDatabase(databaseName: Guid.NewGuid().ToString()) // Unique DB per test
			//		.Options;
			//});
		});
	}
}


