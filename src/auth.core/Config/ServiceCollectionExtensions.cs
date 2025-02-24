using Microsoft.AspNetCore.Builder;
using Microsoft.Extensions.DependencyInjection;
using Dyvenix.Auth.Server.SvcClients;
using Microsoft.AspNetCore.Mvc.Routing;
using Microsoft.AspNetCore.Routing;
using System.Diagnostics.CodeAnalysis;
using Microsoft.AspNetCore.Mvc.Core;

namespace Dyvenix.Auth.Server.Config;

public static class ServiceCollectionExtensions
{
	public static void AddDyvenixAuthServices(this IServiceCollection services, AuthConfig authConfig)
	{
		services.AddDistributedMemoryCache();

		services.AddScoped<IB2CSvcClient, B2CSvcClient>();
		services.AddSingleton(authConfig);
		services.AddSingleton(authConfig.B2CConfig);
	}

	public static IApplicationBuilder UseDyvenixAuth(this IApplicationBuilder app, AuthConfig authConfig)
	{
		if (authConfig.Enabled) {
			app.UseAuthentication(); // resposible for constructing AuthenticationTicket objects representing the user's identity
			app.UseAuthorization();

		} else {
			//app.MapControllers().AllowAnonymous();
		}

		return app;
	}
}