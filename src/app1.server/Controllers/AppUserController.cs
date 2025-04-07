//------------------------------------------------------------------------------------------------------------
// This file was auto-generated 4/6/2025 10:15 PM. Any changes made to it will be lost.
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


	[HttpGet, Route("[action]/{id}")]
	public async Task<ActionResult<AppUser>> GetById(Guid id)
	{
		try {
			return await _appUserService.GetById(id);
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
	public async Task<ActionResult<List<AppUser>>> GetByCompanyId([FromRoute] string companyId)
	{
		try {
			return await _appUserService.GetByCompanyId(companyId);
		} catch (Exception ex) {
			return LogErrorAndReturnErrorResponse(ex);
		}
	}

	[HttpGet, Route("[action]")]
	public async Task<ActionResult<List<AppUser>>> GetAllWithPaging([FromQuery] int pgSize = 0, [FromQuery] int pgOffset = 0)
	{
		try {
			return await _appUserService.GetAllWithPaging(pgSize, pgOffset);
		} catch (Exception ex) {
			return LogErrorAndReturnErrorResponse(ex);
		}
	}

	[HttpGet, Route("[action]/{companyId}")]
	public async Task<ActionResult<List<AppUser>>> GetEnabledByCompany([FromRoute] string companyId)
	{
		try {
			return await _appUserService.GetEnabledByCompany(companyId);
		} catch (Exception ex) {
			return LogErrorAndReturnErrorResponse(ex);
		}
	}

	[HttpGet, Route("[action]/{companyId}")]
	public async Task<ActionResult<List<AppUser>>> GetByCompanyExtId([FromRoute] string companyId, [FromQuery] string extId)
	{
		try {
			return await _appUserService.GetByCompanyExtId(companyId, extId);
		} catch (Exception ex) {
			return LogErrorAndReturnErrorResponse(ex);
		}
	}

	[HttpGet, Route("[action]/{companyId}")]
	public async Task<ActionResult<List<AppUser>>> GetByCompanyExtIdWPging([FromRoute] string companyId, [FromQuery] string extId, [FromQuery] int pgSize = 0, [FromQuery] int pgOffset = 0)
	{
		try {
			return await _appUserService.GetByCompanyExtIdWPging(companyId, extId, pgSize, pgOffset);
		} catch (Exception ex) {
			return LogErrorAndReturnErrorResponse(ex);
		}
	}

	[HttpGet, Route("[action]/{groupCode}")]
	public async Task<ActionResult<List<AppUser>>> GetByGroupCode([FromRoute] int groupCode)
	{
		try {
			return await _appUserService.GetByGroupCode(groupCode);
		} catch (Exception ex) {
			return LogErrorAndReturnErrorResponse(ex);
		}
	}

	[HttpGet, Route("[action]/{groupCode}")]
	public async Task<ActionResult<List<AppUser>>> GetByGroupCodeWPging([FromRoute] int groupCode, [FromQuery] int pgSize = 0, [FromQuery] int pgOffset = 0)
	{
		try {
			return await _appUserService.GetByGroupCodeWPging(groupCode, pgSize, pgOffset);
		} catch (Exception ex) {
			return LogErrorAndReturnErrorResponse(ex);
		}
	}

	[HttpGet, Route("[action]/{userType}")]
	public async Task<ActionResult<List<AppUser>>> GetByUserType([FromRoute] UserType userType)
	{
		try {
			return await _appUserService.GetByUserType(userType);
		} catch (Exception ex) {
			return LogErrorAndReturnErrorResponse(ex);
		}
	}

	[HttpGet, Route("[action]/{userType}")]
	public async Task<ActionResult<List<AppUser>>> GetByUserTypeWPging([FromRoute] UserType userType, [FromQuery] int pgSize = 0, [FromQuery] int pgOffset = 0)
	{
		try {
			return await _appUserService.GetByUserTypeWPging(userType, pgSize, pgOffset);
		} catch (Exception ex) {
			return LogErrorAndReturnErrorResponse(ex);
		}
	}

	[HttpGet, Route("[action]")]
	public async Task<ActionResult<List<AppUser>>> GetEnabledByUserTypeWPging([FromQuery] UserType? userType, [FromQuery] int pgSize = 0, [FromQuery] int pgOffset = 0)
	{
		try {
			return await _appUserService.GetEnabledByUserTypeWPging(userType, pgSize, pgOffset);
		} catch (Exception ex) {
			return LogErrorAndReturnErrorResponse(ex);
		}
	}


}
