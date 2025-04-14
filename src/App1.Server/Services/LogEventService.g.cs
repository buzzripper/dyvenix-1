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

public interface ILogEventService
{
	Task<Guid> CreateLogEvent(LogEvent logEvent);
	Task UpdateLogEvent(LogEvent logEvent);
	Task DeleteLogEvent(Guid id);
}

public class LogEventService : ILogEventService
{
	private readonly IDbContextFactory _dbContextFactory;
	private readonly IDyvenixLogger<LogEventService> _logger;

	public LogEventService(IDbContextFactory dbContextFactory, IDyvenixLogger<LogEventService> logger)
	{
		_dbContextFactory = dbContextFactory;
		_logger = logger;
	}

	#region Create / Update / Delete

	public async Task<Guid> CreateLogEvent(LogEvent logEvent)
	{
		ArgumentNullException.ThrowIfNull(logEvent);

		try {
			using var db = _dbContextFactory.CreateDbContext();
			db.Add(logEvent);
			await db.SaveChangesAsync();

			return logEvent.Id;

		} catch (DbUpdateConcurrencyException) {
			throw new ConcurrencyApiException("The item was modified or deleted by another user.", _logger.CorrelationId);
		}
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
