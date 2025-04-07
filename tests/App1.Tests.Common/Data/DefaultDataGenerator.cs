using Dyvenix.App1.Common.Entities;
using System;
using System.Collections.Generic;

namespace Dyvenix.App1.Tests.Common.Data;

public class DefaultDataGenerator
{
	public DataSet CreateDataSet()
	{
		var dataSet = new DataSet { Type = DataSetType.Default };

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
				continue;
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
				ExtId = Guid.NewGuid().ToString(),
				FirstName = firstName,
				LastName = lastName,
				Email = email,
				IsEnabled = random.NextDouble() >= 0.15, // 15% chance of IsEnabled being false
				CompanyId = companyIds[random.Next(companyIds.Length)],
				GroupCode = random.NextDouble() >= 0.15 ? random.Next(1, 10) : null,
				UserType = (UserType)random.Next(0, 3) // Randomly assign UserType between 0 and 2
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

		dataSet.AppUsers = appUsers;

		return dataSet;
	}
}
