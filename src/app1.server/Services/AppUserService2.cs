using Dyvenix.App1.Data.Contexts;
using Dyvenix.App1.Data.Entities;
using Dyvenix.Logging;
using Microsoft.EntityFrameworkCore;
using System;
using System.Linq;
using System.Threading.Tasks;

namespace Dyvenix.App1.Server.Services;

public interface IAppUserService2
{
	Task CreateAppUser(AppUser appUser);
	Task DeleteAppUser(Guid id);
	Task UpdateAppUser(AppUser appUser);
}

public class AppUserService2 : IAppUserService2
{
	private readonly IDbContextFactory _dbContextFactory;

	public AppUserService2(IDbContextFactory dbContextFactory, IDyvenixLogger<TestService> logger)
	{
		_dbContextFactory = dbContextFactory;
	}

	public async Task CreateAppUser(AppUser appUser)
	{
		if (appUser == null)
			throw new ArgumentNullException(nameof(appUser));

		using var db = _dbContextFactory.CreateDbContext();
		db.Add(appUser);
		await db.SaveChangesAsync();
	}

	public async Task UpdateAppUser(AppUser appUser)
	{
		if (appUser == null)
			throw new ArgumentNullException(nameof(appUser));

		using var db = _dbContextFactory.CreateDbContext();
		db.Attach(appUser);
		db.Entry(appUser).State = EntityState.Modified;

		await db.SaveChangesAsync();
	}

	public async Task DeleteAppUser(Guid id)
	{
		using var db = _dbContextFactory.CreateDbContext();
		await db.AppUser.Where(a => a.Id == id).ExecuteDeleteAsync();
	}
}
