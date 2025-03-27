using Dyvenix.App1.Data.Entities;
using Dyvenix.App1.Server.Services;
using Dyvenix.Core.Controllers;
using Dyvenix.Core.DTOs;
using Dyvenix.Logging;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Threading.Tasks;

namespace Dyvenix.App1.Server.Controllers;

[ApiController]
[Route("api/[controller]")]
public class AppUserController2 : ApiControllerBase<AppUserController2>
{
	private readonly IAppUserService2 _appUserService2;

	public AppUserController2(IAppUserService2 appUserService2, IDyvenixLogger<AppUserController2> logger) : base(logger)
	{
		_appUserService2 = appUserService2;
	}

	[HttpPost, Route("[action]")]
	public async Task<ActionResult> CreateAppUser(AppUser appUser)
	{
		try {
			var svcResponse =new ServiceResponse();
			
			await _appUserService2.CreateAppUser(appUser);
			
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
			
			await _appUserService2.UpdateAppUser(appUser);
			
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
			
			await _appUserService2.DeleteAppUser(id);
			
			svcResponse.Message = "Success";
			return Ok(svcResponse);

		} catch (Exception ex) {
			return LogErrorAndReturnErrorResponse(ex);
		}
	}
}
