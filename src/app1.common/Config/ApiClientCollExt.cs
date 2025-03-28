using Microsoft.Extensions.DependencyInjection;

namespace Dyvenix.App1.Common.Config;

public static partial class ApiClientCollExt
{
	public static void AddApiClientServices(this IServiceCollection services, ApiClientConfig apiClientConfig)
	{
		services.AddSingleton(apiClientConfig);

		AddGeneratedApiClients(services, apiClientConfig);
	}

	static partial void AddGeneratedApiClients(this IServiceCollection services, ApiClientConfig apiClientConfig);
}