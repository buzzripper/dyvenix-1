//------------------------------------------------------------------------------------------------------------
// This file was auto-generated 4/8/2025 9:53 AM. Any changes made to it will be lost.
//------------------------------------------------------------------------------------------------------------
using Microsoft.Extensions.DependencyInjection;
using Dyvenix.App1.Server.Services;

namespace Dyvenix.App1.Server.Config;

public static partial class ServiceCollExt
{
	static partial void AddGeneratedServices(this IServiceCollection services)
	{
		services.AddTransient<IAppUserService, AppUserService>();
	}
}
