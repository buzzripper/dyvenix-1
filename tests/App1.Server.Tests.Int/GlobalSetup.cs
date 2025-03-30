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
		var firstNames = new[] { "John", "Jane", "Alice", "Bob", "Charlie", "Eve", "Mallory", "Trent", "Oscar", "Grace", "Victor", "Walter", "Xander", "Yvonne", "Zara" };
		var lastNames = new[] { "Doe", "Smith", "Johnson", "Williams", "Brown", "Jones", "Garcia", "Miller", "Davis", "Martinez", "Hernandez", "Lopez", "Gonzalez", "Wilson", "Anderson" };
		var companyIds = new[] { "ABC", "DEF", "GHI", "JKL", "MNO" };

		var random = new Random();
		var emailSet = new HashSet<string>();
		var nameSet = new HashSet<string>();

		while (appUsers.Count < 25) {
			var firstName = firstNames[random.Next(firstNames.Length)];
			var lastName = lastNames[random.Next(lastNames.Length)];
			string nameCombination = $"{firstName} {lastName}";

			if (nameSet.Contains(nameCombination)) {
				continue; // Ensure unique FirstName/LastName combinations
			}
			nameSet.Add(nameCombination);

			string email;
			int attempt = 0;
			do {
				email = $"{firstName.ToLower()}.{lastName.ToLower()}{attempt}@example.com";
				attempt++;
			} while (!emailSet.Add(email)); // Ensure unique emails

			var appUser = new AppUser {
				Id = Guid.NewGuid(),
				ExtId = random.NextDouble() < 0.15 ? null : Guid.NewGuid().ToString(), // 15% chance of null ExtId
				FirstName = firstName,
				LastName = lastName,
				Email = email,
				IsEnabled = random.NextDouble() >= 0.15, // 15% chance of IsEnabled being false
				CompanyId = companyIds[random.Next(companyIds.Length)]
			};

			// Add 0-8 AccessClaims to each AppUser
			int numberOfClaims = random.Next(0, 9);
			for (int j = 0; j < numberOfClaims; j++) {
				appUser.Claims.Add(new AccessClaim {
					Id = Guid.NewGuid(),
					ClaimName = $"ClaimName_{j}",
					ClaimValue = $"ClaimValue_{j}",
					AppUserId = appUser.Id
				});
			}

			appUsers.Add(appUser);
		}

		await db.AppUser.AddRangeAsync(appUsers);
		await db.SaveChangesAsync();

		Console.WriteLine($"Inserted {appUsers.Count} AppUser rows");

		return appUsers;
	}

}
