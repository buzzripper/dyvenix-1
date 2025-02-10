using Dyvenix.App1.Server.Config;
using Dyvenix.App1.Server.Services;
using Microsoft.AspNetCore.Mvc;
using Serilog;

namespace Dyvenix.App1.Server.Controllers
{
	[ApiController]
	[Route("api/[controller]")]
	public class SystemController : ApiControllerBase
	{
		private readonly AppConfig _appConfig;
		private readonly ITestService _testService;

		public SystemController(AppConfig appConfig, ILogger logger, ITestService testService) : base(logger)
		{
			_appConfig = appConfig;
			_testService = testService;
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

		[HttpGet, Route("[action]")]
		public IActionResult Test()
		{
			_testService.Test();
			return Ok();
		}
	}
}
