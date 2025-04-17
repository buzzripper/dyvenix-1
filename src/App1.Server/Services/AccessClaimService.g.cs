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

public interface IAccessClaimService
{
	Task<Guid> CreateAccessClaim(AccessClaim accessClaim);
	Task<byte[]> UpdateAccessClaim(AccessClaim accessClaim);
	Task DeleteAccessClaim(Guid id);
	Task Update(Guid id, byte[] rowVersion, string claimName);
}

public class AccessClaimService : IAccessClaimService
{
	private readonly IDbContextFactory _dbContextFactory;
	private readonly IDyvenixLogger<AccessClaimService> _logger;

	public AccessClaimService(IDbContextFactory dbContextFactory, IDyvenixLogger<AccessClaimService> logger)
	{
		_dbContextFactory = dbContextFactory;
		_logger = logger;
	}

	#region Create / Update / Delete

	public async Task<Guid> CreateAccessClaim(AccessClaim accessClaim)
	{
		ArgumentNullException.ThrowIfNull(accessClaim);

		try {
			using var db = _dbContextFactory.CreateDbContext();
			db.Add(accessClaim);
			await db.SaveChangesAsync();

			return accessClaim.Id;

		} catch (DbUpdateConcurrencyException) {
			throw new ConcurrencyApiException("The item was modified or deleted by another user.", _logger.CorrelationId);
		}
	}

	public async Task<byte[]> UpdateAccessClaim(AccessClaim accessClaim)
	{
		ArgumentNullException.ThrowIfNull(accessClaim);

		using var db = _dbContextFactory.CreateDbContext();

		try {
			db.Attach(accessClaim);
			db.Entry(accessClaim).State = EntityState.Modified;
			await db.SaveChangesAsync();

			return accessClaim.RowVersion;

		} catch (DbUpdateConcurrencyException) {
			throw new ConcurrencyApiException("The item was modified or deleted by another user.", _logger.CorrelationId);
		}
	}

	public async Task DeleteAccessClaim(Guid id)
	{
		using var db = _dbContextFactory.CreateDbContext();

		var ac = await db.AccessClaim.Where(a => a.Id == id).FirstOrDefaultAsync();

		var x =  await db.AccessClaim.Where(a => a.Id == id).ExecuteDeleteAsync();
	}

	#endregion

	#region Update Methods

	public async Task Update(Guid id, byte[] rowVersion, string claimName)
	{
		ArgumentNullException.ThrowIfNull(rowVersion);

		try {
			var accessClaim = new AccessClaim {
				Id = id,
				RowVersion = rowVersion,
				ClaimName = claimName,
			};

			using var db = _dbContextFactory.CreateDbContext();
			db.Attach(accessClaim);
			db.Entry(accessClaim).Property(u => u.ClaimName).IsModified = true;

			await db.SaveChangesAsync();

		} catch (DbUpdateConcurrencyException) {
			throw new ConcurrencyApiException("The item was modified or deleted by another user.", _logger.CorrelationId);
		}
	}
	#endregion




}
