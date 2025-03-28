using Dyvenix.App1.Data.Contexts;
using Microsoft.Extensions.Configuration;
using System.Configuration;
using System;
using System.Diagnostics;
using System.IO;
using Dyvenix.App1.Data.Config;
using NUnit.Framework;
using Microsoft.EntityFrameworkCore;
using System.Threading.Tasks;
using Dyvenix.App1.Common.Entities;
using System.Collections.Generic;

namespace App1.Server.Tests.Int;

[SetUpFixture]
public class GlobalSetup
{
	[OneTimeSetUp]
	public async Task OneTimeSetUp()
	{
		var dataConfig = LoadDataConfig();
		Globals.DbContextFactory = new DbContextFactory(dataConfig);
		await SeedData();
	}

	private DataConfig LoadDataConfig()
    {
        var basePath = Directory.GetCurrentDirectory();
        var configuration = new ConfigurationBuilder()
			.SetBasePath(basePath)
            .AddJsonFile("appsettings.json", optional: false, reloadOnChange: true)
            .Build();

		DataConfig dataConfig = new DataConfig();
		configuration.GetSection("DataConfig").Bind(dataConfig);
		return dataConfig;
	}

	private async Task SeedData()
	{
		using var db = Globals.DbContextFactory.CreateDbContext();

		var affectedRows = await db.AccessClaim.ExecuteDeleteAsync();
		Console.WriteLine($"Deleted {affectedRows} AccessClaim rows");
		affectedRows = await db.AppUser.ExecuteDeleteAsync();
		Console.WriteLine($"Deleted {affectedRows} AppUser rows");

        await PopulateAppUsers();
	}

	private async Task PopulateAppUsers()
    {
        using var db = Globals.DbContextFactory.CreateDbContext();

        var appUsers = new List<AppUser>();

        var firstNames = new[] { "John", "Jane", "Alice", "Bob" };
        var lastNames = new[] { "Doe", "Smith", "Johnson", "Williams" };
        var emails = new[] { "john@example.com", "jane@example.com", "alice@example.com", "bob@example.com" };
        var isEnabledOptions = new[] { true, false };

        foreach (var firstName in firstNames)
        {
            foreach (var lastName in lastNames)
            {
                foreach (var email in emails)
                {
                    foreach (var isEnabled in isEnabledOptions)
                    {
                        appUsers.Add(new AppUser
                        {
                            Id = Guid.NewGuid(),
                            ExtId = Guid.NewGuid().ToString(),
                            FirstName = firstName,
                            LastName = lastName,
                            Email = email,
                            IsEnabled = isEnabled
                        });
                    }
                }
            }
        }

        await db.AppUser.AddRangeAsync(appUsers);
        await db.SaveChangesAsync();

        Console.WriteLine($"Inserted {appUsers.Count} AppUser rows");
    }
}