using Dyvenix.Auth.Core.Models;
using Dyvenix.Auth.Server.SvcClients;
using Dyvenix.Core.Controllers;
using Dyvenix.Core.Models;
using Dyvenix.Logging;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Caching.Distributed;
using System;
using System.Threading.Tasks;

namespace Dyvenix.Auth.Server.Controllers
{
	[ApiController]
	[Route("api/auth/[controller]")]
	public class SessionController : ApiControllerBase<ApiConnectorController>
	{
		private readonly IB2CSvcClient _b2cSvcClient;
		private readonly IDistributedCache _cache;

		public SessionController(IDyvenixLogger<ApiConnectorController> logger, IB2CSvcClient b2cSvcClient, IDistributedCache cache) : base(logger)
		{
			_b2cSvcClient = b2cSvcClient;
			_cache = cache;
		}

		[HttpPost, Route("[action]")]
		public async Task<ActionResult<ControllerResponseBase<StartSessionResponse>>> StartSession([FromBody] StartSessionRequest startSessionRequest)
		{
			_logger.Info("Starting StartSession()...");

			var tokenResponse = await _b2cSvcClient.GetTokenFromAuthCode(startSessionRequest.AuthCode, startSessionRequest.CodeVerifier);
			var sessionId = Guid.NewGuid().ToString();
			var accessToken = string.Empty;	 // TO DO

			await _cache.SetStringAsync(sessionId, accessToken, new DistributedCacheEntryOptions { AbsoluteExpirationRelativeToNow = TimeSpan.FromSeconds(tokenResponse.RefreshTokenExpiresInSecs) });

			var response = new ControllerResponseBase<B2CTokenResponse>();

			response.Data = tokenResponse;

			return Ok(response);
		}
	}
}
