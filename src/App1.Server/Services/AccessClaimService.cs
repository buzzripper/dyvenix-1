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

public interface IAccessClaimService
{
	Task CreateAccessClaim(AccessClaim accessClaim);
	Task UpdateAccessClaim(AccessClaim accessClaim);
	Task DeleteAccessClaim(Guid id);
}

public class AccessClaimService : IAccessClaimService
{
	private readonly IDbContextFactory _dbContextFactory;

	public AccessClaimService(IDbContextFactory dbContextFactory, IDyvenixLogger<TestService> logger)
	{
		_dbContextFactory = dbContextFactory;
	}

	#region Create / Update / Delete

	public async Task CreateAccessClaim(AccessClaim accessClaim)
	{
		ArgumentNullException.ThrowIfNull(accessClaim);

		using var db = _dbContextFactory.CreateDbContext();

		db.Add(accessClaim);

		await db.SaveChangesAsync();
	}

	public async Task UpdateAccessClaim(AccessClaim accessClaim)
	{
		ArgumentNullException.ThrowIfNull(accessClaim);

		using var db = _dbContextFactory.CreateDbContext();

		db.Attach(accessClaim);
		db.Entry(accessClaim).State = EntityState.Modified;

		await db.SaveChangesAsync();
	}

	public async Task DeleteAccessClaim(Guid id)
	{
		using var db = _dbContextFactory.CreateDbContext();

		await db.AccessClaim.Where(a => a.Id == id).ExecuteDeleteAsync();
	}

	#endregion




}
