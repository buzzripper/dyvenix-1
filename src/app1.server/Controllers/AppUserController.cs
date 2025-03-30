//------------------------------------------------------------------------------------------------------------
// This file was auto-generated 3/29/2025 10:53 PM. Any changes made to it will be lost.
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
using Dyvenix.App1.Server.Services.Queries;
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

	#region Get Single

	[HttpGet, Route("[action]/{id}")]
	public async Task<ActionResult<AppUser>> GetById(Guid id)
	{
		try {
			return await _appUserService.GetById(id);
		} catch (Exception ex) {
			return LogErrorAndReturnErrorResponse(ex);
		}
	}

	#endregion

	#region Get List

	[HttpGet, Route("[action]/{extId?}")]
	public async Task<ActionResult<List<AppUser>>> GetByExtId(string extId)
	{
		try {
			return await _appUserService.GetByExtId(extId);
		} catch (Exception ex) {
			return LogErrorAndReturnErrorResponse(ex);
		}
	}

	[HttpGet, Route("[action]/{firstName?}")]
	public async Task<ActionResult<List<AppUser>>> GetByFirstName(string firstName)
	{
		try {
			return await _appUserService.GetByFirstName(firstName);
		} catch (Exception ex) {
			return LogErrorAndReturnErrorResponse(ex);
		}
	}

	[HttpGet, Route("[action]/{lastName?}")]
	public async Task<ActionResult<List<AppUser>>> GetByLastNameWithClaims(string lastName)
	{
		try {
			return await _appUserService.GetByLastNameWithClaims(lastName);
		} catch (Exception ex) {
			return LogErrorAndReturnErrorResponse(ex);
		}
	}

	[HttpGet, Route("[action]/{extId?}/{lastName?}")]
	public async Task<ActionResult<List<AppUser>>> GetByExtIdAndLast(string extId, string lastName)
	{
		try {
			return await _appUserService.GetByExtIdAndLast(extId, lastName);
		} catch (Exception ex) {
			return LogErrorAndReturnErrorResponse(ex);
		}
	}

	[HttpGet, Route("[action]/{extId?}")]
	public async Task<ActionResult<List<AppUser>>> GetByExtIdSorted(string extId)
	{
		try {
			return await _appUserService.GetByExtIdSorted(extId);
		} catch (Exception ex) {
			return LogErrorAndReturnErrorResponse(ex);
		}
	}

	[HttpGet, Route("[action]/{extId?}/{pageSize?}/{rowOffset?}")]
	public async Task<ActionResult<List<AppUser>>> QueryByExtIdPaging(string extId, int pageSize = 0, int rowOffset = 0)
	{
		try {
			return await _appUserService.QueryByExtIdPaging(extId, pageSize, rowOffset);
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

	#endregion

}
