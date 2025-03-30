//------------------------------------------------------------------------------------------------------------
// This file was auto-generated 3/30/2025 7:31 PM. Any changes made to it will be lost.
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


	[HttpGet, Route("[action]/{id}")]
	public async Task<ActionResult<AppUser>> GetById(Guid id)
	{
		try {
			return await _appUserService.GetById(id);
		} catch (Exception ex) {
			return LogErrorAndReturnErrorResponse(ex);
		}
	}


	[HttpGet, Route("[action]/{extId}/{lastName}")]
	public async Task<ActionResult<List<AppUser>>> GetByExtId(string extId, string lastName)
	{
		try {
			return await _appUserService.GetByExtId(extId, lastName);
		} catch (Exception ex) {
			return LogErrorAndReturnErrorResponse(ex);
		}
	}

	[HttpGet, Route("[action]/{firstName}")]
	public async Task<ActionResult<List<AppUser>>> GetByFirstName(string firstName)
	{
		try {
			return await _appUserService.GetByFirstName(firstName);
		} catch (Exception ex) {
			return LogErrorAndReturnErrorResponse(ex);
		}
	}

	[HttpGet, Route("[action]/{lastName}")]
	public async Task<ActionResult<List<AppUser>>> GetByLastNameWithClaims(string lastName)
	{
		try {
			return await _appUserService.GetByLastNameWithClaims(lastName);
		} catch (Exception ex) {
			return LogErrorAndReturnErrorResponse(ex);
		}
	}

	[HttpGet, Route("[action]/{extId}/{lastName}/{isEnabled}")]
	public async Task<ActionResult<List<AppUser>>> GetByExtId(string extId, string lastName, bool isEnabled)
	{
		try {
			return await _appUserService.GetByExtId(extId, lastName, isEnabled);
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

	[HttpGet, Route("[action]/{pageSize}/{pageOffset}")]
	public async Task<ActionResult<List<AppUser>>> GetAllWithPaging(int pageSize = 0, int pageOffset = 0)
	{
		try {
			return await _appUserService.GetAllWithPaging(pageSize, pageOffset);
		} catch (Exception ex) {
			return LogErrorAndReturnErrorResponse(ex);
		}
	}

	[HttpGet, Route("[action]/{email}/{isEnabled}/{companyId}")]
	public async Task<ActionResult<List<AppUser>>> GetForCoEnabled(string email, bool isEnabled, string companyId)
	{
		try {
			return await _appUserService.GetForCoEnabled(email, isEnabled, companyId);
		} catch (Exception ex) {
			return LogErrorAndReturnErrorResponse(ex);
		}
	}


	#region Queries

	[HttpPost, Route("[action]")]
	public async Task<ActionResult<EntityList<AppUser>>> QueryByExtIdSorted([FromBody] QueryByExtIdSortedQuery queryByExtIdSortedQuery)
	{
		try {
			return await _appUserService.QueryByExtIdSorted(queryByExtIdSortedQuery);
		} catch (Exception ex) {
			return LogErrorAndReturnErrorResponse(ex);
		}
	}

	[HttpPost, Route("[action]")]
	public async Task<ActionResult<EntityList<AppUser>>> QueryByExtIdPaging([FromBody] QueryByExtIdPagingQuery queryByExtIdPagingQuery)
	{
		try {
			return await _appUserService.QueryByExtIdPaging(queryByExtIdPagingQuery);
		} catch (Exception ex) {
			return LogErrorAndReturnErrorResponse(ex);
		}
	}

	#endregion

}
