﻿using Microsoft.AspNetCore.Http;
using Serilog.Context;
using System;
using System.Linq;
using System.Threading.Tasks;

namespace Dyvenix.Logging;

public class CorrelationIdMiddleware
{
	private readonly RequestDelegate _next;

	public CorrelationIdMiddleware(RequestDelegate next)
	{
		_next = next;
	}

	public async Task Invoke(HttpContext context)
	{
		var correlationId = context.Request.Headers["X-Correlation-ID"].FirstOrDefault()
							?? Guid.NewGuid().ToString();

		context.Items["CorrelationId"] = correlationId;
		context.Response.Headers["X-Correlation-ID"] = correlationId;

		using (LogContext.PushProperty("CorrelationId", correlationId))
		{
			await _next(context);
		}
	}
}

