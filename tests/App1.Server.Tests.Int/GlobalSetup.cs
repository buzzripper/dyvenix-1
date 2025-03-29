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
using Dyvenix.Core.Models;
using Microsoft.Extensions.DependencyInjection;
using Dyvenix.App1.Common.Config;
using Dyvenix.App1.Data;
using NUnit.Framework.Interfaces;

namespace App1.Server.Tests.Int;

[SetUpFixture]
public class GlobalSetup
{
	public static ServiceProvider ServiceProvider { get; private set; }

	[OneTimeSetUp]
	public async Task OneTimeSetUp()
	{
		var basePath = Directory.GetCurrentDirectory();
		var configuration = new ConfigurationBuilder()
			.SetBasePath(basePath)
			.AddJsonFile("appsettings.json", optional: false, reloadOnChange: true)
			.Build();

		// Read configs
		var dataConfig = configuration.GetSection(nameof(DataConfig)).Get<DataConfig>();
		var apiClientConfig = configuration.GetSection(nameof(ApiClientConfig)).Get<ApiClientConfig>();

		// Register services
		var services = new ServiceCollection();
		services.AddDyvenixDataServices(dataConfig);
		services.AddApiClientServices(apiClientConfig);
		
		ServiceProvider = services.BuildServiceProvider();

		var testData = await SeedData();

		services.AddSingleton(testData);
	}

	[OneTimeTearDown]
	public void OneTimeTearown()
	{
		ServiceProvider.Dispose();
	}

	private async Task<TestData> SeedData()
	{
		using var db = ServiceProvider.GetRequiredService<IDbContextFactory>().CreateDbContext();

		var affectedRows = await db.AccessClaim.ExecuteDeleteAsync();
		Console.WriteLine($"Deleted {affectedRows} AccessClaim rows");
		affectedRows = await db.AppUser.ExecuteDeleteAsync();
		Console.WriteLine($"Deleted {affectedRows} AppUser rows");

		var appUsers = await CreateTestAppUsers(db);

		return new TestData {
			AppUsers = appUsers
		};
	}

	private async Task<List<AppUser>> CreateTestAppUsers(Db db)
	{
		var appUsers = new List<AppUser>();
		//var accessClaims = new List<AccessClaim>();

		var firstNames = new[] { "John", "Jane", "Alice", "Bob" };
		var lastNames = new[] { "Doe", "Smith", "Johnson", "Williams" };
		var isEnabledOptions = new[] { true, false };

		var random = new Random();
		var emailSet = new HashSet<string>();

		foreach (var firstName in firstNames) {
			foreach (var lastName in lastNames) {
				foreach (var isEnabled in isEnabledOptions) {
					for (int i = 0; i < 4; i++) // Ensure unique emails
					{
						string email;
						int attempt = 0;
						do {
							email = $"{firstName.ToLower()}.{lastName.ToLower()}{i + attempt}@example.com";
							attempt++;
						} while (!emailSet.Add(email)); // Add returns false if the email already exists

						var appUser = new AppUser {
							Id = Guid.NewGuid(),
							ExtId = random.NextDouble() < 0.1 ? null : Guid.NewGuid().ToString(), // 10% chance of null ExtId
							FirstName = firstName,
							LastName = lastName,
							Email = email,
							IsEnabled = isEnabled
						};

						appUsers.Add(appUser);

						// Add 0-5 AccessClaims to each AppUser
						int numberOfClaims = random.Next(0, 6);
						for (int j = 0; j < numberOfClaims; j++) {
							appUser.Claims.Add(new AccessClaim {
								Id = Guid.NewGuid(),
								ClaimName = $"ClaimName_{j}",
								ClaimValue = $"ClaimValue_{j}",
								AppUserId = appUser.Id
							});
						}
					}
				}
			}
		}

		await db.AppUser.AddRangeAsync(appUsers);
		//await db.AccessClaim.AddRangeAsync(accessClaims);
		await db.SaveChangesAsync();

		Console.WriteLine($"Inserted {appUsers.Count} AppUser rows");
		//Console.WriteLine($"Inserted {accessClaims.Count} AccessClaim rows");

		return appUsers;
	}
}
