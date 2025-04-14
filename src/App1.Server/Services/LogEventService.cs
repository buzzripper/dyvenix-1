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

public interface ILogEventService2
{
	Task CreateLogEvent(LogEvent logEvent);
	Task UpdateLogEvent(LogEvent logEvent);
	Task DeleteLogEvent(Guid id);
}

public class LogEventService2 : ILogEventService2
{
	private readonly IDbContextFactory _dbContextFactory;
	private readonly IDyvenixLogger<LogEventService2> _logger;

	public LogEventService2(IDbContextFactory dbContextFactory, IDyvenixLogger<LogEventService2> logger)
	{
		_dbContextFactory = dbContextFactory;
		_logger = logger;
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

		try {
			db.Attach(logEvent);
			db.Entry(logEvent).State = EntityState.Modified;
			await db.SaveChangesAsync();

		} catch (DbUpdateConcurrencyException) {
			throw new ConcurrencyApiException("The item was modified or deleted by another user.", _logger.CorrelationId);
		}
	}

	public async Task DeleteLogEvent(Guid id)
	{
		using var db = _dbContextFactory.CreateDbContext();

		await db.LogEvent.Where(a => a.Id == id).ExecuteDeleteAsync();
	}

	#endregion




}
