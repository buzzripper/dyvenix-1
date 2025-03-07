using Dyvenix.Core.Controllers;
using Dyvenix.Logging;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;

namespace Dyvenix.App1.Server.Controllers
{
	[ApiController]
	[Route("api/[controller]")]
	[Authorize]
	public class WeatherForecastController : ApiControllerBase<WeatherForecastController>
	{
		private static readonly string[] Summaries = new[]
		{
			"Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
		};

		public WeatherForecastController(IDyvenixLogger<WeatherForecastController> logger) : base(logger)
		{
		}

		[HttpGet]
		public IEnumerable<WeatherForecast> GetWeatherForecast()
		{
			return Enumerable.Range(1, 5).Select(index => new WeatherForecast {
				Date = DateOnly.FromDateTime(DateTime.Now.AddDays(index)),
				TemperatureC = Random.Shared.Next(-20, 55),
				Summary = Summaries[Random.Shared.Next(Summaries.Length)]
			})
			.ToArray();
		}
	}
}
