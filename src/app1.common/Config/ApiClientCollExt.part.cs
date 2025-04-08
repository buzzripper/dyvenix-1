//------------------------------------------------------------------------------------------------------------
// This file was auto-generated 4/8/2025 9:53 AM. Any changes made to it will be lost.
//------------------------------------------------------------------------------------------------------------
using Microsoft.Extensions.DependencyInjection;
using Dyvenix.App1.Common.ApiClients;

namespace Dyvenix.App1.Common.Config;

public static partial class ApiClientCollExt
{
	static partial void AddGeneratedApiClients(this IServiceCollection services, ApiClientConfig apiClientConfig)
	{
		services.AddTransient<IAppUserApiClient, AppUserApiClient>();
	}
}
