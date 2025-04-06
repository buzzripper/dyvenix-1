//------------------------------------------------------------------------------------------------------------
// This file was auto-generated 4/6/2025 11:44 AM. Any changes made to it will be lost.
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
[ApiVersion()]
[Route("api/v{version:apiVersion}/[controller]")]
public class AppUserController : ApiControllerBase<AppUserController>
{
	private readonly IAppUserService _appUserService;

	public AppUserController(IAppUserService appUserService, IDyvenixLogger<AppUserController> logger) : base(logger)
	{
		_appUserService = appUserService;
	}

	// Create / Update / Delete

	[HttpPost, Route("[action]")]
	public async Task<ActionResult> CreateAppUser(AppUser appUser)
	{
		try {
			var svcResponse =new ServiceResponse();

			await _appUserService.CreateAppUser(appUser);

			svcResponse.Message = "Success";
			return Ok(svcResponse);

		} catch (Exception ex) {
			return LogErrorAndReturnErrorResponse(ex);
		}
	}

	[HttpPatch, Route("[action]")]
	public async Task<ActionResult> UpdateAppUser(AppUser appUser)
	{
		try {
			var svcResponse =new ServiceResponse();

			await _appUserService.UpdateAppUser(appUser);

			svcResponse.Message = "Success";
			return Ok(svcResponse);

		} catch (Exception ex) {
			return LogErrorAndReturnErrorResponse(ex);
		}
	}

	[HttpPost, Route("[action]")]
	public async Task<ActionResult> DeleteAppUser(Guid id)
	{
		try {
			var svcResponse =new ServiceResponse();

			await _appUserService.DeleteAppUser(id);

			svcResponse.Message = "Success";
			return Ok(svcResponse);

		} catch (Exception ex) {
			return LogErrorAndReturnErrorResponse(ex);
		}
	}



	[HttpGet, Route("[action]")]
	public async Task<ActionResult<List<AppUser>>> GetAll()
	{
		try {
			return await _appUserService.GetAll();
		} catch (Exception ex) {
			return LogErrorAndReturnErrorResponse(ex);
		}
	}

	[HttpGet, Route("[action]/{companyId}")]
	public async Task<ActionResult<List<AppUser>>> GetByCompanyId(string companyId)
	{
		try {
			return await _appUserService.GetByCompanyId(companyId);
		} catch (Exception ex) {
			return LogErrorAndReturnErrorResponse(ex);
		}
	}

	[HttpGet, Route("[action]/{pageSize}/{pageOffset}")]
	public async Task<ActionResult<List<AppUser>>> GetAllWithPaging(int pageSize = 0, int pageOffset = 0)
	{
		try {
			return await _appUserService.GetAllWithPaging(pageSize, pageOffset);
		} catch (Exception ex) {
			return LogErrorAndReturnErrorResponse(ex);
		}
	}


}
