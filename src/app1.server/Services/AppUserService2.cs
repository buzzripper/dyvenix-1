using Dyvenix.App1.Data.Contexts;
using Dyvenix.App1.Data.Entities;
using Dyvenix.App1.Data.Queries;
using Dyvenix.Core.Entities;
using Dyvenix.Core.Queries;
using Dyvenix.Logging;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Dyvenix.App1.Server.Services;

public interface IAppUserService
{
	Task<AppUser> GetById(Guid id);
	Task<AppUser> GetByEmail(string email);
	Task<List<AppUser>> GetAll();
	Task<List<AppUser>> GetWithLastName(string lastName);
	Task<List<AppUser>> GetWithIsEnabled(bool isEnabled);
	Task<EntityList<AppUser>> Query(GetAppUsersQuery query);
}

public class AppUserService2 : IAppUserService
{
	private readonly IDbContextFactory _dbContextFactory;

	public AppUserService2(IDbContextFactory dbContextFactory, IDyvenixLogger<TestService> logger)
	{
		_dbContextFactory = dbContextFactory;
	}

	#region Get Single

	public async Task<AppUser> GetById(Guid id)
	{
		var db = _dbContextFactory.CreateDbContext();
		return await db.AppUser.FirstOrDefaultAsync(x => x.Id == id);
	}

	public async Task<AppUser> GetByEmail(string email)
	{
		var db = _dbContextFactory.CreateDbContext();
		return await db.AppUser.FirstOrDefaultAsync(u => u.Email == email);
	}

	#endregion

	#region Get List

	public async Task<List<AppUser>> GetAll()
	{
		var db = _dbContextFactory.CreateDbContext();
		return await db.AppUser.ToListAsync();
	}

	public async Task<List<AppUser>> GetWithLastName(string lastName)
	{
		var db = _dbContextFactory.CreateDbContext();
		return await db.AppUser.Where(a => a.LastName == lastName).AsNoTracking().ToListAsync();
	}

	public async Task<List<AppUser>> GetWithIsEnabled(bool isEnabled)
	{
		var db = _dbContextFactory.CreateDbContext();
		return await db.AppUser.Where(a => a.IsEnabled == isEnabled).AsNoTracking().ToListAsync();
	}

	#endregion

	#region Queries

	public async Task<EntityList<AppUser>> Query(GetAppUsersQuery query)
	{
		var dbQuery = _dbContextFactory.CreateDbContext().AppUser.AsNoTracking().AsQueryable();
		var result = new EntityList<AppUser>();

		// Filters
		if (!string.IsNullOrWhiteSpace(query.FirstName))
			dbQuery = dbQuery.Where(x => EF.Functions.Like(x.FirstName, query.FirstName));
		if (!string.IsNullOrWhiteSpace(query.LastName))
			dbQuery = dbQuery.Where(x => EF.Functions.Like(x.LastName, query.LastName));
		if (!string.IsNullOrWhiteSpace(query.Email))
			dbQuery = dbQuery.Where(x => EF.Functions.Like(x.Email, query.Email));
		if (query.IsEnabled.HasValue)
			dbQuery = dbQuery.Where(x => x.IsEnabled == query.IsEnabled);

		// Row count
		if (query.RecalcRowCount || query.GetRowCountOnly)
			result.TotalRowCount = dbQuery.Count();
		if (query.GetRowCountOnly)
			return result;

		// Sorting
		if (!string.IsNullOrWhiteSpace(query.SortBy))
			this.AddSorting(ref dbQuery, query);

		// Paging
		dbQuery = dbQuery.Skip(query.RowOffset).Take(query.PageSize);

		result.Data = await dbQuery.AsNoTracking().ToListAsync();

		return result;
	}

	private void AddSorting(ref IQueryable<AppUser> dbQuery, ISortingQuery sortingQuery)
	{
		if (string.Equals(sortingQuery.SortBy, AppUser.PropNames.FirstName, StringComparison.OrdinalIgnoreCase))
			if (sortingQuery.SortDesc)
				dbQuery.OrderByDescending(x => x.FirstName);
			else 
				dbQuery.OrderBy(x => x.FirstName);

		else if (string.Equals(sortingQuery.SortBy, AppUser.PropNames.LastName, StringComparison.OrdinalIgnoreCase))
			if (sortingQuery.SortDesc)
				dbQuery.OrderByDescending(x => x.LastName);
			else
				dbQuery.OrderBy(x => x.LastName);

		else if (string.Equals(sortingQuery.SortBy, AppUser.PropNames.Email, StringComparison.OrdinalIgnoreCase))
			if (sortingQuery.SortDesc)
				dbQuery.OrderByDescending(x => x.Email);
			else
				dbQuery.OrderBy(x => x.Email);

		else if (string.Equals(sortingQuery.SortBy, AppUser.PropNames.IsEnabled, StringComparison.OrdinalIgnoreCase))
			if (sortingQuery.SortDesc)
				dbQuery.OrderByDescending(x => x.IsEnabled);
			else
				dbQuery.OrderBy(x => x.IsEnabled);
	}

	#endregion
}
