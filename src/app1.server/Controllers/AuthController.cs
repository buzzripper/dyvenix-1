using Dyvenix.App1.Server.Config;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Serilog;
using System.Text.Json;
using System.Threading.Tasks;
using System;
using Dyvenix.App1.Server.Models.Auth;
using Microsoft.Extensions.Configuration;
using Dyvenix.Logging;

namespace Dyvenix.App1.Server.Controllers
{
	[ApiController]
	[Route("api/[controller]")]
	public class AuthController : ApiControllerBase<AuthController>
	{
		public AuthController(IDyvenixLogger<AuthController> logger) : base(logger)
		{
		}

		[HttpPost, Route("[action]")]
		public async Task<IActionResult> GetExtClaims()
		{
			_logger.Info("Starting GetExtClaims()...");

			// Check HTTP basic authorization
			if (!IsAuthorized(Request)) {
				_logger.Warn("HTTP basic authentication validation failed.");
				return Unauthorized();
			}

			string content = await new System.IO.StreamReader(Request.Body).ReadToEndAsync();
			var requestConnector = JsonSerializer.Deserialize<RequestConnector>(content);

			// If input data is null, show block page
			if (requestConnector == null) {
				_logger.Warn("Input data (RequestConnector) is empty.");
				return BadRequest(new AddClaimsResponse("ShowBlockPage", "There was a problem with your request."));
			}

			string clientId = "f23aee71-9ccb-49ef-9d7d-f3c4f12c7177";
			if (!clientId.Equals(requestConnector.ClientId)) {
				_logger.Warn($"HTTP clientId is not authorized. Received: {requestConnector.ClientId}  Expected:{clientId}");
				return Unauthorized();
			}

			// If email claim not found, show block page. Email is required and sent by default.
			if (string.IsNullOrWhiteSpace(requestConnector.Email) || requestConnector.Email.Contains("@") == false) {
				_logger.Warn($"No email claim found ({requestConnector?.Email})");
				return BadRequest(new AddClaimsResponse("ShowBlockPage", "Email name is mandatory."));
			}

			var result = new AddClaimsResponse {
				// use the objectId of the email to get the user specfic claims
				MyCustomClaim = "TheDudeAbides",
				OtherCustomClaim = "Super important info"
			};

			_logger.Info($"SUCCESS! Sending back additional claims!");

			return Ok(result);
		}

		private bool IsAuthorized(HttpRequest req)
		{
			string username = "azb2c";
			string password = "pwd";

			// Check if the HTTP Authorization header exist
			if (!req.Headers.ContainsKey("Authorization")) {
				_logger.Warn("Missing HTTP basic authentication header.");
				return false;
			}

			// Read the authorization header
			var auth = req.Headers["Authorization"].ToString();

			// Ensure the type of the authorization header id `Basic`
			if (!auth.StartsWith("Basic ")) {
				_logger.Warn("HTTP basic authentication header must start with 'Basic '.");
				return false;
			}

			// Get the the HTTP basinc authorization credentials
			var cred = System.Text.Encoding.UTF8.GetString(Convert.FromBase64String(auth.Substring(6))).Split(':');

			// Evaluate the credentials and return the result
			return (cred[0] == username && cred[1] == password);
		}
	}
}
