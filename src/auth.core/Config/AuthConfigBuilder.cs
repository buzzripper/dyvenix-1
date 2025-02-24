using Dyvenix.Auth.Server.Config;
using Dyvenix.Core.Models;
using Microsoft.Extensions.Configuration;
using System;

namespace Dyvenix.App1.Server.Config;

public static class AuthConfigBuilder
{
	private const string cConfigSectionName = "AuthConfig";

	public static AuthConfig Build(IConfiguration configuration)
	{
		var authConfig = configuration.GetSection(DyvenixConst.RootConfigSectionName).Get<AuthConfig>();
		if (authConfig == null)
			throw new ApplicationException($"Unable to retrieve {cConfigSectionName} section from appsettings.json file.");

		// Replace config values with env variables if running on a server
		//if (!string.IsNullOrWhiteSpace(Environment.GetEnvironmentVariable(DyvenixConst.EV_ENVNAME)))
		//	authConfig.ProcessEnvironmentVars();

		return authConfig;
	}
}
