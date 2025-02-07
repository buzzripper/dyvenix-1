using Dyvenix.App1.Server.Config;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Serilog;

namespace Dyvenix.App1.Server.Controllers
{
	[ApiController]
	[Route("api/[controller]")]
	[AllowAnonymous]
	public class SystemController : ApiControllerBase
	{
		private readonly AppConfig _appConfig;

		public SystemController(AppConfig appConfig, ILogger logger) : base(logger)
		{
			_appConfig = appConfig;
		}

		[HttpGet, Route("[action]")]
		public IActionResult Healthz()
		{
			return Ok("Healthy");
		}

		[HttpGet, Route("[action]")]
		public IActionResult GetConfig()
		{
			return Ok(_appConfig);
		}
	}
}
