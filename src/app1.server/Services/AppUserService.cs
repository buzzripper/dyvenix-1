//------------------------------------------------------------------------------------------------------------
// This file was auto-generated 3/30/2025 10:36 PM. Any changes made to it will be lost.
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
	Task<List<AppUser>> GetByExtId(string extId, string lastName);
	Task<List<AppUser>> GetByFirstName(string firstName);
	Task<List<AppUser>> GetByLastNameWithClaims(string lastName);
	Task<List<AppUser>> GetByExtId(string extId, string lastName, bool isEnabled);
	Task<List<AppUser>> GetAll();
	Task<List<AppUser>> GetAllWithPaging(int pageSize, int pageOffset);
	Task<List<AppUser>> GetForCoEnabled(string email, bool isEnabled, string companyId);
	Task<EntityList<AppUser>>QueryByExtIdSorted(QueryByExtIdSortedQuery query);
	Task<EntityList<AppUser>>QueryByExtIdPaging(QueryByExtIdPagingQuery query);
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

	public async Task<List<AppUser>> GetByExtId(string extId, string lastName)
	{
		var dbQuery = _dbContextFactory.CreateDbContext().AppUser.AsQueryable();

		if (!string.IsNullOrWhiteSpace(extId))
			dbQuery = dbQuery.Where(x => EF.Functions.Like(x.ExtId, extId));
		if (!string.IsNullOrWhiteSpace(lastName))
			dbQuery = dbQuery.Where(x => EF.Functions.Like(x.LastName, lastName));

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

	public async Task<List<AppUser>> GetByExtId(string extId, string lastName, bool isEnabled)
	{
		var dbQuery = _dbContextFactory.CreateDbContext().AppUser.AsQueryable();

		if (!string.IsNullOrWhiteSpace(extId))
			dbQuery = dbQuery.Where(x => EF.Functions.Like(x.ExtId, extId));
		if (!string.IsNullOrWhiteSpace(lastName))
			dbQuery = dbQuery.Where(x => EF.Functions.Like(x.LastName, lastName));
		dbQuery = dbQuery.Where(x => x.IsEnabled == isEnabled);

		return await dbQuery.AsNoTracking().ToListAsync();
	}

	public async Task<List<AppUser>> GetAll()
	{
		var dbQuery = _dbContextFactory.CreateDbContext().AppUser.AsQueryable();


		return await dbQuery.AsNoTracking().ToListAsync();
	}

	public async Task<List<AppUser>> GetAllWithPaging(int pageSize, int pageOffset)
	{
		var dbQuery = _dbContextFactory.CreateDbContext().AppUser.AsQueryable();

		if (pageSize > 0)
			dbQuery = dbQuery.Skip(pageOffset * pageSize).Take(pageSize);

		return await dbQuery.AsNoTracking().ToListAsync();
	}

	public async Task<List<AppUser>> GetForCoEnabled(string email, bool isEnabled, string companyId)
	{
		var dbQuery = _dbContextFactory.CreateDbContext().AppUser.AsQueryable();

		if (!string.IsNullOrWhiteSpace(email))
			dbQuery = dbQuery.Where(x => EF.Functions.Like(x.Email, email));
		dbQuery = dbQuery.Where(x => x.IsEnabled == isEnabled);
		if (!string.IsNullOrWhiteSpace(companyId))
			dbQuery = dbQuery.Where(x => EF.Functions.Like(x.CompanyId, companyId));

		return await dbQuery.AsNoTracking().ToListAsync();
	}

	#endregion

	#region Queries

	public async Task<EntityList<AppUser>>QueryByExtIdSorted(QueryByExtIdSortedQuery query)
	{
		var dbQuery = _dbContextFactory.CreateDbContext().AppUser.AsQueryable();
		var result = new EntityList<AppUser>();

		// Filters
		if (!string.IsNullOrWhiteSpace(query.ExtId))
			dbQuery = dbQuery.Where(x => EF.Functions.Like(x.ExtId, query.ExtId));

		// Sorting
		if (!string.IsNullOrWhiteSpace(query.SortBy))
			this.AddSorting(ref dbQuery, query);

		result.Data = await dbQuery.AsNoTracking().ToListAsync();

		return result;
	}

	public async Task<EntityList<AppUser>>QueryByExtIdPaging(QueryByExtIdPagingQuery query)
	{
		var dbQuery = _dbContextFactory.CreateDbContext().AppUser.AsQueryable();
		var result = new EntityList<AppUser>();

		// Filters
		if (!string.IsNullOrWhiteSpace(query.ExtId))
			dbQuery = dbQuery.Where(x => EF.Functions.Like(x.ExtId, query.ExtId));

		// Paging
		if (query.RecalcRowCount || query.GetRowCountOnly)
			result.TotalRowCount = dbQuery.Count();
		if (query.GetRowCountOnly)
			return result;
		if (query.PageSize > 0)
			dbQuery = dbQuery.Skip(query.PageOffset).Take(query.PageSize);

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

		if (string.Equals(sortingQuery.SortBy, AppUser.PropNames.CompanyId, StringComparison.OrdinalIgnoreCase))
			if (sortingQuery.SortDesc)
				dbQuery.OrderByDescending(x => x.CompanyId);
			else
				dbQuery.OrderBy(x => x.CompanyId);
	}

	#endregion

}
