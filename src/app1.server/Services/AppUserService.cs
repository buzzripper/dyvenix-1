//------------------------------------------------------------------------------------------------------------
// This file was auto-generated 3/27/2025 12:30 PM. Any changes made to it will be lost.
//------------------------------------------------------------------------------------------------------------
using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.EntityFrameworkCore;
using System.Threading.Tasks;
using Dyvenix.App1.Data.Contexts;
using Dyvenix.App1.Data.Entities;
using Dyvenix.Core.Entities;
using Dyvenix.Core.Queries;
using Dyvenix.Logging;
using System;
using Dyvenix.App1.Server.Services.Queries;

namespace Dyvenix.App1.Server.Services;

public interface IAppUserService
{
	Task CreateAppUser(AppUser appUser);
	Task UpdateAppUser(AppUser appUser);
	Task DeleteAppUser(Guid id);
	Task<AppUser>GetById(Guid id);
	Task<AppUser>GetByEmail(string email);
	Task<List<AppUser>>GetAll();
	Task<List<AppUser>>GetWithLastName(string lastName, int pageSize, int rowOffset);
	Task<List<AppUser>>GetWithExtId(string extId);
	Task<List<AppUser>>GetAll2(int pageSize, int rowOffset);
	Task<EntityList<AppUser>>FindCompanyUsers(FindCompanyUsersQuery query);
	Task<EntityList<AppUser>>QueryDisabledUsers(QueryDisabledUsersQuery query);
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

	public async Task<AppUser>GetById(Guid id)
	{
		var db = _dbContextFactory.CreateDbContext();
		return await db.AppUser.FirstOrDefaultAsync(x => x.Id == id);
	}

	public async Task<AppUser>GetByEmail(string email)
	{
		var db = _dbContextFactory.CreateDbContext();
		return await db.AppUser.FirstOrDefaultAsync(x => x.Email == email);
	}

	#endregion

	#region Get List

	public async Task<List<AppUser>>GetAll()
	{
		var dbQuery = _dbContextFactory.CreateDbContext().AppUser.AsQueryable();

		return await dbQuery.AsNoTracking().ToListAsync();
	}

	public async Task<List<AppUser>>GetWithLastName(string lastName, int pageSize, int rowOffset)
	{
		var dbQuery = _dbContextFactory.CreateDbContext().AppUser.AsQueryable();

		if (!string.IsNullOrWhiteSpace(lastName))
			dbQuery = dbQuery.Where(x => EF.Functions.Like(x.LastName, lastName));

		if (pageSize > 0)
			dbQuery = dbQuery.Skip(rowOffset).Take(pageSize);

		return await dbQuery.AsNoTracking().ToListAsync();
	}

	public async Task<List<AppUser>>GetWithExtId(string extId)
	{
		var dbQuery = _dbContextFactory.CreateDbContext().AppUser.AsQueryable();

		if (!string.IsNullOrWhiteSpace(extId))
			dbQuery = dbQuery.Where(x => EF.Functions.Like(x.ExtId, extId));

		return await dbQuery.AsNoTracking().ToListAsync();
	}

	public async Task<List<AppUser>>GetAll2(int pageSize, int rowOffset)
	{
		var dbQuery = _dbContextFactory.CreateDbContext().AppUser.AsQueryable();

		if (pageSize > 0)
			dbQuery = dbQuery.Skip(rowOffset).Take(pageSize);

		return await dbQuery.AsNoTracking().ToListAsync();
	}

	#endregion

	#region Queries

	public async Task<EntityList<AppUser>>FindCompanyUsers(FindCompanyUsersQuery query)
	{
		var dbQuery = _dbContextFactory.CreateDbContext().AppUser.AsQueryable();
		var result = new EntityList<AppUser>();

		// Filters
		if (!string.IsNullOrWhiteSpace(query.ExtId))
			dbQuery = dbQuery.Where(x => EF.Functions.Like(x.ExtId, query.ExtId));
		if (!string.IsNullOrWhiteSpace(query.FirstName))
			dbQuery = dbQuery.Where(x => EF.Functions.Like(x.FirstName, query.FirstName));
		if (!string.IsNullOrWhiteSpace(query.LastName))
			dbQuery = dbQuery.Where(x => EF.Functions.Like(x.LastName, query.LastName));

		// Paging
		if (query.RecalcRowCount || query.GetRowCountOnly)
			result.TotalRowCount = dbQuery.Count();
		if (query.GetRowCountOnly)
			return result;
		if (query.PageSize > 0)
			dbQuery = dbQuery.Skip(query.RowOffset).Take(query.PageSize);

		result.Data = await dbQuery.AsNoTracking().ToListAsync();

		return result;
	}

	public async Task<EntityList<AppUser>>QueryDisabledUsers(QueryDisabledUsersQuery query)
	{
		var dbQuery = _dbContextFactory.CreateDbContext().AppUser.AsQueryable();
		var result = new EntityList<AppUser>();

		// Filters
		if (!string.IsNullOrWhiteSpace(query.LastName))
			dbQuery = dbQuery.Where(x => EF.Functions.Like(x.LastName, query.LastName));
		if (query.IsEnabled.HasValue)
			dbQuery = dbQuery.Where(x => x.IsEnabled == query.IsEnabled);

		// Sorting
		if (!string.IsNullOrWhiteSpace(query.SortBy))
			this.AddSorting(ref dbQuery, query);

		result.Data = await dbQuery.AsNoTracking().ToListAsync();

		return result;
	}

	private void AddSorting(ref IQueryable<AppUser> dbQuery, ISortingQuery sortingQuery)
	{
		if (string.Equals(sortingQuery.SortBy, AppUser.PropNames.Id, StringComparison.OrdinalIgnoreCase))
			if (sortingQuery.SortDesc)
				dbQuery.OrderByDescending(x => x.Id);
			else
				dbQuery.OrderBy(x => x.Id);

		if (string.Equals(sortingQuery.SortBy, AppUser.PropNames.ExtId, StringComparison.OrdinalIgnoreCase))
			if (sortingQuery.SortDesc)
				dbQuery.OrderByDescending(x => x.ExtId);
			else
				dbQuery.OrderBy(x => x.ExtId);

		if (string.Equals(sortingQuery.SortBy, AppUser.PropNames.FirstName, StringComparison.OrdinalIgnoreCase))
			if (sortingQuery.SortDesc)
				dbQuery.OrderByDescending(x => x.FirstName);
			else
				dbQuery.OrderBy(x => x.FirstName);

		if (string.Equals(sortingQuery.SortBy, AppUser.PropNames.LastName, StringComparison.OrdinalIgnoreCase))
			if (sortingQuery.SortDesc)
				dbQuery.OrderByDescending(x => x.LastName);
			else
				dbQuery.OrderBy(x => x.LastName);

		if (string.Equals(sortingQuery.SortBy, AppUser.PropNames.Email, StringComparison.OrdinalIgnoreCase))
			if (sortingQuery.SortDesc)
				dbQuery.OrderByDescending(x => x.Email);
			else
				dbQuery.OrderBy(x => x.Email);

		if (string.Equals(sortingQuery.SortBy, AppUser.PropNames.IsEnabled, StringComparison.OrdinalIgnoreCase))
			if (sortingQuery.SortDesc)
				dbQuery.OrderByDescending(x => x.IsEnabled);
			else
				dbQuery.OrderBy(x => x.IsEnabled);
	}

	#endregion

}
