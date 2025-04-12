using Dyvenix.Core.DTOs;
using Dyvenix.Core.Exceptions;
using Dyvenix.Logging;
using Microsoft.AspNetCore.Mvc;
using System;

namespace Dyvenix.Core.Controllers;

public class ApiControllerBase<T> : ControllerBase where T : ApiControllerBase<T>
{
	protected readonly IDyvenixLogger<T> _logger;

	public ApiControllerBase(IDyvenixLogger<T> logger)
	{
		_logger = logger;
	}

	protected ObjectResult LogErrorAndReturnErrorResponse(Exception ex)
	{
		return LogErrorAndReturnErrorResponse(new ApiResponse(), ex);
	}

	protected ObjectResult LogErrorAndReturnErrorResponse(ApiResponse apiResponse, Exception ex)
	{
		if (ex is ApiException apiEx) {
			apiResponse.StatusCode = apiEx.StatusCode;
			apiResponse.Message = apiEx.Message;
			apiResponse.CorrelationId = apiEx.CorrelationId ?? _logger.CorrelationId;

		} else {
			apiResponse.StatusCode = 500;
			apiResponse.Message = ex.Message;
		}

		_logger.Error(ex, ex.Message);

		return new ObjectResult(apiResponse) { StatusCode = apiResponse.StatusCode };
	}
}
