//------------------------------------------------------------------------------------------------------------
// This file was auto-generated. Any changes made to it will be lost.
//------------------------------------------------------------------------------------------------------------
using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Asp.Versioning;
using Microsoft.AspNetCore.Mvc;
using Dyvenix.Core.Controllers;
using Dyvenix.Core.DTOs;
using Dyvenix.Core.Entities;
using Dyvenix.Logging;
using Dyvenix.App1.Server.Services;
using Dyvenix.App1.Common.Queries;
using Dyvenix.App1.Common.Entities;

namespace Dyvenix.App1.Server.Controllers;

[ApiController]
[ApiVersion(1.0)]
[Route("api/v{version:apiVersion}/[controller]")]
public class AppUserController2 : ApiControllerBase<AppUserController2>
{
	private readonly IAppUserService2 _appUserService;

	public AppUserController2(IAppUserService2 appUserService, IDyvenixLogger<AppUserController2> logger) : base(logger)
	{
		_appUserService = appUserService;
	}

	// Update methods

	[HttpPost, Route("[action]")]
	public async Task<ActionResult> CreateAppUser(AppUser appUser)
	{
		var apiResponse = CreateApiResponse<Guid>();

		try {
			apiResponse.Data = await _appUserService.CreateAppUser(appUser);

			return Ok(apiResponse);

		} catch (Exception ex) {
			return LogErrorAndReturnErrorResponse(apiResponse, ex);
		}
	}

	[HttpPatch, Route("[action]")]
	public async Task<ActionResult> UpdateAppUser(AppUser appUser)
	{
		var apiResponse = CreateApiResponse<byte[]>();

		try {
			apiResponse.Data = await _appUserService.UpdateAppUser(appUser);

			return Ok(apiResponse);

		} catch (Exception ex) {
			return LogErrorAndReturnErrorResponse(apiResponse, ex);
		}
	}

	[HttpPost, Route("[action]")]
	public async Task<ActionResult> DeleteAppUser(Guid id)
	{
		var apiResponse = CreateApiResponse();
		try {
			await _appUserService.DeleteAppUser(id);

			return Ok(apiResponse);

		} catch (Exception ex) {
			return LogErrorAndReturnErrorResponse(apiResponse, ex);
		}
	}

	[HttpGet, Route("[action]/{id}")]
	public async Task<ActionResult<AppUser>> GetById(Guid id)
	{
		var apiResponse = CreateApiResponse<AppUser>();
		try {
			apiResponse.Data = await _appUserService.GetById(id);

			return Ok(apiResponse);

		} catch (Exception ex) {
			return LogErrorAndReturnErrorResponse(apiResponse, ex);
		}
	}

	[HttpGet, Route("[action]/{id}")]
	public async Task<ActionResult<AppUser>> GetByIdwClaims(Guid id)
	{
		var apiResponse = CreateApiResponse<AppUser>();
		try {
			apiResponse.Data = await _appUserService.GetByIdwClaims(id);

			return Ok(apiResponse);

		} catch (Exception ex) {
			return LogErrorAndReturnErrorResponse(apiResponse, ex);
		}
	}


	[HttpGet, Route("[action]")]
	public async Task<ActionResult<List<AppUser>>> GetAll()
	{
		var apiResponse = CreateApiResponse<List<AppUser>>();
		try {
			apiResponse.Data = await _appUserService.GetAll();

			return Ok(apiResponse);

		} catch (Exception ex) {
			return LogErrorAndReturnErrorResponse(apiResponse, ex);
		}
	}


}
