using Dyvenix.App1.Server.Services;
using Microsoft.Extensions.DependencyInjection;

namespace Dyvenix.App1.Server.Config;

public static partial class ServiceCollExt
{
	static partial void AddGeneratedServices(this IServiceCollection services)
	{
		services.AddScoped<IAppUserService, AppUserService2>();
	}
}
