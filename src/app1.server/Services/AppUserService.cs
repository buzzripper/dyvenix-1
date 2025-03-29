//------------------------------------------------------------------------------------------------------------
// This file was auto-generated 3/29/2025 5:03 PM. Any changes made to it will be lost.
//------------------------------------------------------------------------------------------------------------
using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.EntityFrameworkCore;
using System.Threading.Tasks;
using Dyvenix.App1.Data.Contexts;
using Dyvenix.App1.Common.Entities;
using Dyvenix.Core.Entities;
using Dyvenix.Core.Queries;
using Dyvenix.Logging;
using Dyvenix.App1.Server.Services.Queries;

namespace Dyvenix.App1.Server.Services;

public interface IAppUserService
{
	Task CreateAppUser(AppUser appUser);
	Task UpdateAppUser(AppUser appUser);
	Task DeleteAppUser(Guid id);
	Task<AppUser> GetById(Guid id);
	Task<List<AppUser>> GetWithLastName(string lastName);
}

public class AppUserService : IAppUserService
{
	private readonly IDbContextFactory _dbContextFactory;

	public AppUserService(IDbContextFactory dbContextFactory, IDyvenixLogger<TestService> logger)
	{
		_dbContextFactory = dbContextFactory;
	}

	// Create / Update / Delete

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


	#region Get Single

	public async Task<AppUser> GetById(Guid id)
	{
		var dbQuery = _dbContextFactory.CreateDbContext().AppUser.AsQueryable();

		dbQuery = dbQuery.Include(x => x.Claims);
		dbQuery = dbQuery.Where(x => x.Id == id);

		// Filters
		if (id.HasValue)
			dbQuery = dbQuery.Where(x => x.Id == id);
		return await dbQuery.AsNoTracking().ToListAsync();
	}

	#endregion

	#region Get List

	public async Task<List<AppUser>> GetWithLastName(string lastName)
	{
		var dbQuery = _dbContextFactory.CreateDbContext().AppUser.AsQueryable();

		if (!string.IsNullOrWhiteSpace(lastName))
			dbQuery = dbQuery.Where(x => EF.Functions.Like(x.LastName, lastName));

		// Filters
		if (!string.IsNullOrWhiteSpace(lastName))
			dbQuery = dbQuery.Where(x => EF.Functions.Like(x.LastName, lastName));
		return await dbQuery.AsNoTracking().ToListAsync();
	}

	#endregion


}
