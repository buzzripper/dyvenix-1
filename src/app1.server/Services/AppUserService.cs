//------------------------------------------------------------------------------------------------------------
// This file was auto-generated 4/6/2025 11:44 AM. Any changes made to it will be lost.
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
using Dyvenix.App1.Common.Queries;

namespace Dyvenix.App1.Server.Services;

public interface IAppUserService
{
	Task CreateAppUser(AppUser appUser);
	Task UpdateAppUser(AppUser appUser);
	Task DeleteAppUser(Guid id);
	Task<List<AppUser>> GetAll();
	Task<List<AppUser>> GetByCompanyId(string companyId);
	Task<List<AppUser>> GetAllWithPaging(int pageSize, int pageOffset);
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


	#region List Methods

	public async Task<List<AppUser>> GetAll()
	{
		var dbQuery = _dbContextFactory.CreateDbContext().AppUser.AsQueryable();


		return await dbQuery.AsNoTracking().ToListAsync();
	}

	public async Task<List<AppUser>> GetByCompanyId(string companyId)
	{
		var dbQuery = _dbContextFactory.CreateDbContext().AppUser.AsQueryable();

		if (!string.IsNullOrWhiteSpace(companyId))
			dbQuery = dbQuery.Where(x => EF.Functions.Like(x.CompanyId, companyId));

		return await dbQuery.AsNoTracking().ToListAsync();
	}

	public async Task<List<AppUser>> GetAllWithPaging(int pageSize, int pageOffset)
	{
		var dbQuery = _dbContextFactory.CreateDbContext().AppUser.AsQueryable();

		if (pageSize > 0)
			dbQuery = dbQuery.Skip(pageOffset * pageSize).Take(pageSize);

		return await dbQuery.AsNoTracking().ToListAsync();
	}

	#endregion


}
