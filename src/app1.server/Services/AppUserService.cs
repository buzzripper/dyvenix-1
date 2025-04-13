//------------------------------------------------------------------------------------------------------------
// This file was auto-generated. Any changes made to it will be lost.
//------------------------------------------------------------------------------------------------------------
using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.EntityFrameworkCore;
using System.Threading.Tasks;
using Dyvenix.App1.Data.Contexts;
using Dyvenix.App1.Common.Entities;
using Dyvenix.Core.Entities;
using Dyvenix.Core.Exceptions;
using Dyvenix.Core.Queries;
using Dyvenix.Logging;
using Dyvenix.App1.Common.Queries;

namespace Dyvenix.App1.Server.Services;

public interface IAppUserService
{
	Task<Guid> CreateAppUser(AppUser appUser);
	Task<byte[]> UpdateAppUser(AppUser appUser);
	Task DeleteAppUser(Guid id);
	Task<AppUser> GetById(Guid id);
	Task<AppUser> GetByIdwClaims(Guid id);
	Task<List<AppUser>> GetAll();
}

public class AppUserService : IAppUserService
{
	private readonly IDbContextFactory _dbContextFactory;
	private readonly IDyvenixLogger<AppUserService> _logger;

	public AppUserService(IDbContextFactory dbContextFactory, IDyvenixLogger<AppUserService> logger)
	{
		_dbContextFactory = dbContextFactory;
		_logger = logger;
	}

	#region Create / Update / Delete

	public async Task<Guid> CreateAppUser(AppUser appUser)
	{
		ArgumentNullException.ThrowIfNull(appUser);

		try {
			using var db = _dbContextFactory.CreateDbContext();
			db.Add(appUser);
			await db.SaveChangesAsync();

			return appUser.Id;

		} catch (DbUpdateConcurrencyException) {
			throw new ConcurrencyApiException("The item was modified or deleted by another user.", _logger.CorrelationId);
		}
	}

	public async Task<byte[]> UpdateAppUser(AppUser appUser)
	{
		ArgumentNullException.ThrowIfNull(appUser);

		using var db = _dbContextFactory.CreateDbContext();

		try {
			db.Attach(appUser);
			db.Entry(appUser).State = EntityState.Modified;
			await db.SaveChangesAsync();

			return appUser.RowVersion;

		} catch (DbUpdateConcurrencyException) {
			throw new ConcurrencyApiException("The item was modified or deleted by another user.", _logger.CorrelationId);
		}
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

	public async Task<AppUser> GetByIdwClaims(Guid id)
	{
		var dbQuery = _dbContextFactory.CreateDbContext().AppUser.AsQueryable();

		dbQuery = dbQuery.Include(x => x.Claims);
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

	#endregion


}
