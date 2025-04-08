//------------------------------------------------------------------------------------------------------------
// This file was auto-generated 4/8/2025 9:53 AM. Any changes made to it will be lost.
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
	Task<AppUser> GetById(Guid id);
	Task<List<AppUser>> GetAll();
	Task<List<AppUser>> GetByCompanyId(string companyId);
	Task<List<AppUser>> GetAllWithPaging(int pageSize = 0, int pageOffset = 0);
	Task<List<AppUser>> GetEnabledByCompany(string companyId);
	Task<List<AppUser>> GetByCompanyExtId(string companyId, string? extId = null);
	Task<List<AppUser>> GetByCompanyExtIdWPging(string companyId, string? extId = null, int pageSize = 0, int pageOffset = 0);
	Task<List<AppUser>> GetByGroupCode(int groupCode);
	Task<List<AppUser>> GetByGroupCodeWPging(int groupCode, int pageSize = 0, int pageOffset = 0);
	Task<List<AppUser>> GetByUserType(UserType userType);
	Task<List<AppUser>> GetByUserTypeWPging(UserType userType, int pageSize = 0, int pageOffset = 0);
	Task<List<AppUser>> GetEnabledByUserTypeWPging(UserType? userType = null, int pageSize = 0, int pageOffset = 0);
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

	#region Single Methods

	public async Task<AppUser> GetById(Guid id)
	{
		var dbQuery = _dbContextFactory.CreateDbContext().AppUser.AsQueryable();

		dbQuery = dbQuery.Where(x => x.Id == id);

		return await dbQuery.AsNoTracking().FirstOrDefaultAsync();
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

	public async Task<List<AppUser>> GetAllWithPaging(int pageSize = 0, int pageOffset = 0)
	{
		var dbQuery = _dbContextFactory.CreateDbContext().AppUser.AsQueryable();

		if (pageSize > 0)
			dbQuery = dbQuery.Skip(pageOffset * pageSize).Take(pageSize);

		return await dbQuery.AsNoTracking().ToListAsync();
	}

	public async Task<List<AppUser>> GetEnabledByCompany(string companyId)
	{
		var dbQuery = _dbContextFactory.CreateDbContext().AppUser.AsQueryable();

		if (!string.IsNullOrWhiteSpace(companyId))
			dbQuery = dbQuery.Where(x => EF.Functions.Like(x.CompanyId, companyId));

		// Internal
		dbQuery = dbQuery.Where(x => x.IsEnabled == true);

		return await dbQuery.AsNoTracking().ToListAsync();
	}

	public async Task<List<AppUser>> GetByCompanyExtId(string companyId, string? extId = null)
	{
		var dbQuery = _dbContextFactory.CreateDbContext().AppUser.AsQueryable();

		if (!string.IsNullOrWhiteSpace(companyId))
			dbQuery = dbQuery.Where(x => EF.Functions.Like(x.CompanyId, companyId));
		// Optional
		if (!string.IsNullOrWhiteSpace(extId))
			dbQuery = dbQuery.Where(x => EF.Functions.Like(x.ExtId, extId));

		return await dbQuery.AsNoTracking().ToListAsync();
	}

	public async Task<List<AppUser>> GetByCompanyExtIdWPging(string companyId, string? extId = null, int pageSize = 0, int pageOffset = 0)
	{
		var dbQuery = _dbContextFactory.CreateDbContext().AppUser.AsQueryable();

		if (!string.IsNullOrWhiteSpace(companyId))
			dbQuery = dbQuery.Where(x => EF.Functions.Like(x.CompanyId, companyId));
		// Optional
		if (!string.IsNullOrWhiteSpace(extId))
			dbQuery = dbQuery.Where(x => EF.Functions.Like(x.ExtId, extId));
		if (pageSize > 0)
			dbQuery = dbQuery.Skip(pageOffset * pageSize).Take(pageSize);

		return await dbQuery.AsNoTracking().ToListAsync();
	}

	public async Task<List<AppUser>> GetByGroupCode(int groupCode)
	{
		var dbQuery = _dbContextFactory.CreateDbContext().AppUser.AsQueryable();

		dbQuery = dbQuery.Where(x => x.GroupCode == groupCode);

		return await dbQuery.AsNoTracking().ToListAsync();
	}

	public async Task<List<AppUser>> GetByGroupCodeWPging(int groupCode, int pageSize = 0, int pageOffset = 0)
	{
		var dbQuery = _dbContextFactory.CreateDbContext().AppUser.AsQueryable();

		dbQuery = dbQuery.Where(x => x.GroupCode == groupCode);
		if (pageSize > 0)
			dbQuery = dbQuery.Skip(pageOffset * pageSize).Take(pageSize);

		return await dbQuery.AsNoTracking().ToListAsync();
	}

	public async Task<List<AppUser>> GetByUserType(UserType userType)
	{
		var dbQuery = _dbContextFactory.CreateDbContext().AppUser.AsQueryable();

		dbQuery = dbQuery.Where(x => x.UserType == userType);

		return await dbQuery.AsNoTracking().ToListAsync();
	}

	public async Task<List<AppUser>> GetByUserTypeWPging(UserType userType, int pageSize = 0, int pageOffset = 0)
	{
		var dbQuery = _dbContextFactory.CreateDbContext().AppUser.AsQueryable();

		dbQuery = dbQuery.Where(x => x.UserType == userType);
		if (pageSize > 0)
			dbQuery = dbQuery.Skip(pageOffset * pageSize).Take(pageSize);

		return await dbQuery.AsNoTracking().ToListAsync();
	}

	public async Task<List<AppUser>> GetEnabledByUserTypeWPging(UserType? userType = null, int pageSize = 0, int pageOffset = 0)
	{
		var dbQuery = _dbContextFactory.CreateDbContext().AppUser.AsQueryable();

		// Optional
		if (userType.HasValue)
			dbQuery = dbQuery.Where(x => x.UserType == userType);

		// Internal
		dbQuery = dbQuery.Where(x => x.IsEnabled == true);
		if (pageSize > 0)
			dbQuery = dbQuery.Skip(pageOffset * pageSize).Take(pageSize);

		return await dbQuery.AsNoTracking().ToListAsync();
	}

	#endregion


}
