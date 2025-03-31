//------------------------------------------------------------------------------------------------------------
// This file was auto-generated 3/30/2025 10:36 PM. Any changes made to it will be lost.
//------------------------------------------------------------------------------------------------------------
using System.Net.Http;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.DependencyInjection;
using Dyvenix.App1.Common.ApiClients;

namespace Dyvenix.App1.Common.Config;

public static partial class ApiClientCollExt
{
	static partial void AddGeneratedApiClients(this IServiceCollection services, ApiClientConfig apiClientConfig)
	{
		services.AddScoped<IAppUserApiClient, AppUserApiClient>(serviceProvider =>
			new AppUserApiClient(apiClientConfig.BaseUrl, serviceProvider.GetRequiredService<IHttpClientFactory>(), serviceProvider.GetRequiredService<IHttpContextAccessor>())
		);
	}
}
