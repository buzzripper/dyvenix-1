//using Dyvenix.App1.Data.Entities;
//using Dyvenix.App1.Data.Queries;
//using Dyvenix.App1.Server.Services;
//using Dyvenix.Core.Controllers;
//using Dyvenix.Core.Entities;
//using Dyvenix.Logging;
//using Microsoft.AspNetCore.Mvc;
//using System;
//using System.Collections.Generic;
//using System.Threading.Tasks;

//namespace Dyvenix.App1.Server.Controllers
//{
//	[ApiController]
//	[Route("api/[controller]")]
//	public class AppUserController2 : ApiControllerBase<AppUserController2>
//	{
//		private readonly IAppUserService _appUserService;

//		public AppUserController2(IAppUserService appUserService, IDyvenixLogger<AppUserController2> logger) : base(logger)
//		{
//			_appUserService = appUserService;
//		}

//		#region Get Single

//		[HttpGet, Route("[action]/{id}")]
//		public async Task<ActionResult<AppUser>> GetById(Guid id)
//		{
//			try {
//				return await _appUserService.GetById(id);

//			} catch (Exception ex) {
//				return LogErrorAndReturnErrorResponse(ex);
//			}
//		}

//		[HttpGet, Route("[action]/{email}")]
//		public async Task<ActionResult<AppUser>> GetByEmail(string email)
//		{
//			try {
//				return await _appUserService.GetByEmail(email);

//			} catch (Exception ex) {
//				return LogErrorAndReturnErrorResponse(ex);
//			}
//		}

//		#endregion

//		#region Get List

//		[HttpGet, Route("[action]")]
//		public async Task<ActionResult<List<AppUser>>> GetAll()
//		{
//			try {
//				return await _appUserService.GetAll();

//			} catch (Exception ex) {
//				return LogErrorAndReturnErrorResponse(ex);
//			}
//		}

//		[HttpGet, Route("[action]/{lastName}")]
//		public async Task<ActionResult<List<AppUser>>> GetWithLastName(string lastName)
//		{
//			try {
//				return await _appUserService.GetWithLastName(lastName);

//			} catch (Exception ex) {
//				return LogErrorAndReturnErrorResponse(ex);
//			}
//		}

//		[HttpGet, Route("[action]/{isEnabled}")]
//		public async Task<ActionResult<List<AppUser>>> GetWithIsEnabled(bool isEnabled)
//		{
//			try {
//				return await _appUserService.GetWithIsEnabled(isEnabled);

//			} catch (Exception ex) {
//				return LogErrorAndReturnErrorResponse(ex);
//			}
//		}

//		#endregion

//		#region Queries

//		[HttpPost, Route("[action]")]
//		public async Task<ActionResult<EntityList<AppUser>>> Query([FromBody] GetAppUsersQuery getAppUsersQuery)
//		{
//			try {
//				return await _appUserService.Query(getAppUsersQuery);

//			} catch (Exception ex) {
//				return LogErrorAndReturnErrorResponse(ex);
//			}
//		}

//		#endregion
//	}
//}
