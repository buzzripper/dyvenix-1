using Dyvenix.App1.Server.Models.Exceptions;
using Microsoft.AspNetCore.Mvc;
using Serilog;
using System;

namespace Dyvenix.App1.Server.Controllers
{
	public class ApiControllerBase : ControllerBase
	{
		protected readonly ILogger _logger;

		public ApiControllerBase(ILogger logger)
		{
			_logger = logger;
		}

		protected ObjectResult LogErrorAndReturnErrorResponse(Exception ex)
		{
			var errResponse = new ApiErrorResponse();

			if (ex is ApiException apiEx)
			{
				errResponse.StatusCode = apiEx.StatusCode;

				if (string.IsNullOrEmpty(apiEx.CorrelationId))
					errResponse.Message = apiEx.Message;
				else
					errResponse.Message = $"{apiEx.Message} [CorrelationId: {apiEx.CorrelationId}]";
			}
			else
			{
				errResponse.StatusCode = 500;
				errResponse.Message = ex.Message;
			}

			_logger.Error(ex, ex.Message);

			return new ObjectResult(errResponse) { StatusCode = errResponse.StatusCode };
		}
	}
}
