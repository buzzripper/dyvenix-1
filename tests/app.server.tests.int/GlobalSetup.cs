using Dyvenix.App1.Data.Contexts;
using Microsoft.Extensions.Configuration;
using System.Configuration;
using System;
using System.Diagnostics;
using System.IO;
using Dyvenix.App1.Data.Config;
using NUnit.Framework;

namespace App1.Server.Tests.Int;

[SetUpFixture]
public class GlobalSetup
{
	[OneTimeSetUp]
	public void OneTimeSetUp()
	{
		var dataConfig = LoadDataConfig();
		Globals.DbContextFactory = new DbContextFactory(dataConfig);
		SeedData();
	}

	private DataConfig LoadDataConfig()
    {
        var basePath = Directory.GetCurrentDirectory();
        var configuration = new ConfigurationBuilder()
			
			.SetBasePath(basePath)
            .AddJsonFile("appsettings.json", optional: false, reloadOnChange: true)
            .Build();

        return null;
    }

	private void SeedData()
	{
		using var db = Globals.DbContextFactory.CreateDbContext();


	}
}