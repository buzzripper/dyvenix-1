//------------------------------------------------------------------------------------------------------------
// This file was auto-generated 3/29/2025 10:52 PM. Any changes made to it will be lost.
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
	Task<List<AppUser>> GetByExtId(string extId);
	Task<List<AppUser>> GetByFirstName(string firstName);
	Task<List<AppUser>> GetByLastNameWithClaims(string lastName);
	Task<List<AppUser>> GetByExtIdAndLast(string extId, string lastName);
	Task<List<AppUser>> GetByExtIdSorted(string extId);
	Task<List<AppUser>> QueryByExtIdPaging(string extId, int pageSize, int rowOffset);
	Task<List<AppUser>> GetAll();
}

public class AppUserService : IAppUserService
{
	private readonly IDbContextFactory _dbContextFactory;

	public AppUserService(IDbContextFactory dbContextFactory, IDyvenixLogger<TestService> logger)
	{
		_dbContextFactory = dbContextFactory;
	}

	#region Create / Update / Delete

	public async Task CreateAppUser(AppUser appUser)
	{
		ArgumentNullException.ThrowIfNull(appUser);

		using var db = _dbContextFactory.CreateDbContext();

		db.Add(appUser);

		await db.SaveChangesAsync();
	}

	public async Task UpdateAppUser(AppUser appUser)
	{
		ArgumentNullException.ThrowIfNull(appUser);

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

	#endregion


	#region Get Single

	public async Task<AppUser> GetById(Guid id)
	{
		var dbQuery = _dbContextFactory.CreateDbContext().AppUser.AsQueryable();

		dbQuery = dbQuery.Include(x => x.Claims);
		dbQuery = dbQuery.Where(x => x.Id == id);

		return await dbQuery.AsNoTracking().FirstOrDefaultAsync();
	}

	#endregion

	#region Get List

	public async Task<List<AppUser>> GetByExtId(string extId)
	{
		var dbQuery = _dbContextFactory.CreateDbContext().AppUser.AsQueryable();

		if (!string.IsNullOrWhiteSpace(extId))
			dbQuery = dbQuery.Where(x => EF.Functions.Like(x.ExtId, extId));

		return await dbQuery.AsNoTracking().ToListAsync();
	}

	public async Task<List<AppUser>> GetByFirstName(string firstName)
	{
		var dbQuery = _dbContextFactory.CreateDbContext().AppUser.AsQueryable();

		if (!string.IsNullOrWhiteSpace(firstName))
			dbQuery = dbQuery.Where(x => EF.Functions.Like(x.FirstName, firstName));

		return await dbQuery.AsNoTracking().ToListAsync();
	}

	public async Task<List<AppUser>> GetByLastNameWithClaims(string lastName)
	{
		var dbQuery = _dbContextFactory.CreateDbContext().AppUser.AsQueryable();

		dbQuery = dbQuery.Include(x => x.Claims);
		if (!string.IsNullOrWhiteSpace(lastName))
			dbQuery = dbQuery.Where(x => EF.Functions.Like(x.LastName, lastName));

		return await dbQuery.AsNoTracking().ToListAsync();
	}

	public async Task<List<AppUser>> GetByExtIdAndLast(string extId, string lastName)
	{
		var dbQuery = _dbContextFactory.CreateDbContext().AppUser.AsQueryable();

		if (!string.IsNullOrWhiteSpace(extId))
			dbQuery = dbQuery.Where(x => EF.Functions.Like(x.ExtId, extId));
		if (!string.IsNullOrWhiteSpace(lastName))
			dbQuery = dbQuery.Where(x => EF.Functions.Like(x.LastName, lastName));

		return await dbQuery.AsNoTracking().ToListAsync();
	}

	public async Task<List<AppUser>> GetByExtIdSorted(string extId)
	{
		var dbQuery = _dbContextFactory.CreateDbContext().AppUser.AsQueryable();

		if (!string.IsNullOrWhiteSpace(extId))
			dbQuery = dbQuery.Where(x => EF.Functions.Like(x.ExtId, extId));

		return await dbQuery.AsNoTracking().ToListAsync();
	}

	public async Task<List<AppUser>> QueryByExtIdPaging(string extId, int pageSize, int rowOffset)
	{
		var dbQuery = _dbContextFactory.CreateDbContext().AppUser.AsQueryable();

		if (!string.IsNullOrWhiteSpace(extId))
			dbQuery = dbQuery.Where(x => EF.Functions.Like(x.ExtId, extId));
		if (pageSize > 0)
			dbQuery = dbQuery.Skip(rowOffset).Take(pageSize);

		return await dbQuery.AsNoTracking().ToListAsync();
	}

	public async Task<List<AppUser>> GetAll()
	{
		var dbQuery = _dbContextFactory.CreateDbContext().AppUser.AsQueryable();


		return await dbQuery.AsNoTracking().ToListAsync();
	}

	#endregion


}
