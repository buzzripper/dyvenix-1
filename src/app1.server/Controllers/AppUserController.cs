//------------------------------------------------------------------------------------------------------------
// This file was auto-generated 3/24/2025 7:00 PM. Any changes made to it will be lost.
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


	[HttpGet, Route("[action]/{lastName}")]
	public async Task<ActionResult<List<AppUser>>> GetWithLastName(string lastName)
	{
		try {
			return await _appUserService.GetWithLastName(lastName);
		} catch (Exception ex) {
			return LogErrorAndReturnErrorResponse(ex);
		}
	}


	[HttpGet, Route("[action]/{isEnabled}")]
	public async Task<ActionResult<List<AppUser>>> GetWithIsEnabled(bool isEnabled)
	{
		try {
			return await _appUserService.GetWithIsEnabled(isEnabled);
		} catch (Exception ex) {
			return LogErrorAndReturnErrorResponse(ex);
		}
	}

	#endregion

	#region Queries

	[HttpPost, Route("[action]")]
	public async Task<ActionResult<EntityList<AppUser>>> Query([FromBody] FindCompanyUsersQuery findCompanyUsersQuery)
	{
		try {
			return await _appUserService.FindCompanyUsers(findCompanyUsersQuery);
		} catch (Exception ex) {
			return LogErrorAndReturnErrorResponse(ex);
		}
	}

	#endregion

}
