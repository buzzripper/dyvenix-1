//------------------------------------------------------------------------------------------------------------
// This file was auto-generated 4/9/2025 9:08 PM. Any changes made to it will be lost.
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
