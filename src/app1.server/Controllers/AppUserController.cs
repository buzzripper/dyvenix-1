//------------------------------------------------------------------------------------------------------------
// This file was auto-generated 3/26/2025 9:38 PM. Any changes made to it will be lost.
//------------------------------------------------------------------------------------------------------------
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Dyvenix.Core.Controllers;
using Dyvenix.Core.Entities;
using Dyvenix.Logging;
using Dyvenix.App1.Server.Services;
using Dyvenix.App1.Server.Services.Queries;
using Dyvenix.App1.Data.Entities;

namespace Dyvenix.App1.Server.Controllers;

[ApiController]
[Route("api/[controller]")]
public class AppUserController : ApiControllerBase<AppUserController>
{
	private readonly IAppUserService _appUserService;

	public AppUserController(IAppUserService appUserService, IDyvenixLogger<AppUserController> logger) : base(logger)
	{
		_appUserService = appUserService;
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

	[HttpGet, Route("[action]/{email}")]
	public async Task<ActionResult<AppUser>> GetByEmail(string email)
	{
		try {
			return await _appUserService.GetByEmail(email);
		} catch (Exception ex) {
			return LogErrorAndReturnErrorResponse(ex);
		}
	}

	#endregion

	#region Get List

	[HttpGet, Route("[action]")]
	public async Task<ActionResult<List<AppUser>>> GetAll()
	{
		try {
			return await _appUserService.GetAll();
		} catch (Exception ex) {
			return LogErrorAndReturnErrorResponse(ex);
		}
	}

	[HttpGet, Route("[action]/{lastName}/{pageSize?}/{rowOffset?}")]
	public async Task<ActionResult<List<AppUser>>> GetWithLastName(string lastName, int pageSize = 0, int rowOffset = 0)
	{
		try {
			return await _appUserService.GetWithLastName(lastName, pageSize, rowOffset);
		} catch (Exception ex) {
			return LogErrorAndReturnErrorResponse(ex);
		}
	}

	[HttpGet, Route("[action]/{extId}")]
	public async Task<ActionResult<List<AppUser>>> GetWithExtId(string extId)
	{
		try {
			return await _appUserService.GetWithExtId(extId);
		} catch (Exception ex) {
			return LogErrorAndReturnErrorResponse(ex);
		}
	}

	[HttpGet, Route("[action]/{pageSize?}/{rowOffset?}")]
	public async Task<ActionResult<List<AppUser>>> GetAll2(int pageSize = 0, int rowOffset = 0)
	{
		try {
			return await _appUserService.GetAll2(pageSize, rowOffset);
		} catch (Exception ex) {
			return LogErrorAndReturnErrorResponse(ex);
		}
	}

	#endregion

	#region Queries

	[HttpPost, Route("[action]")]
	public async Task<ActionResult<EntityList<AppUser>>> FindCompanyUsers([FromBody] FindCompanyUsersQuery findCompanyUsersQuery)
	{
		try {
			return await _appUserService.FindCompanyUsers(findCompanyUsersQuery);
		} catch (Exception ex) {
			return LogErrorAndReturnErrorResponse(ex);
		}
	}

	[HttpPost, Route("[action]")]
	public async Task<ActionResult<EntityList<AppUser>>> QueryDisabledUsers([FromBody] QueryDisabledUsersQuery queryDisabledUsersQuery)
	{
		try {
			return await _appUserService.QueryDisabledUsers(queryDisabledUsersQuery);
		} catch (Exception ex) {
			return LogErrorAndReturnErrorResponse(ex);
		}
	}

	#endregion

}
