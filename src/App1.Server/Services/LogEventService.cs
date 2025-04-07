//------------------------------------------------------------------------------------------------------------
// This file was auto-generated 4/6/2025 10:15 PM. Any changes made to it will be lost.
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

public interface ILogEventService
{
	Task CreateLogEvent(LogEvent logEvent);
	Task UpdateLogEvent(LogEvent logEvent);
	Task DeleteLogEvent(Guid id);
}

public class LogEventService : ILogEventService
{
	private readonly IDbContextFactory _dbContextFactory;

	public LogEventService(IDbContextFactory dbContextFactory, IDyvenixLogger<TestService> logger)
	{
		_dbContextFactory = dbContextFactory;
	}

	#region Create / Update / Delete

	public async Task CreateLogEvent(LogEvent logEvent)
	{
		ArgumentNullException.ThrowIfNull(logEvent);

		using var db = _dbContextFactory.CreateDbContext();

		db.Add(logEvent);

		await db.SaveChangesAsync();
	}

	public async Task UpdateLogEvent(LogEvent logEvent)
	{
		ArgumentNullException.ThrowIfNull(logEvent);

		using var db = _dbContextFactory.CreateDbContext();

		db.Attach(logEvent);
		db.Entry(logEvent).State = EntityState.Modified;

		await db.SaveChangesAsync();
	}

	public async Task DeleteLogEvent(Guid id)
	{
		using var db = _dbContextFactory.CreateDbContext();

		await db.LogEvent.Where(a => a.Id == id).ExecuteDeleteAsync();
	}

	#endregion




}
