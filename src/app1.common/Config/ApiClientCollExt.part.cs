//using Dyvenix.App1.Common.ApiClients;
//using Dyvenix.Logging;
//using Microsoft.AspNetCore.Http;
//using Microsoft.Extensions.DependencyInjection;
//using Microsoft.Extensions.Logging;
//using System.Configuration;
//using System.Net.Http;
//using Microsoft.Extensions.Http;

//namespace Dyvenix.App1.Common.Config;

//public static partial class ApiClientCollExt
//{
//	static partial void AddGeneratedApiClients(this IServiceCollection services, ApiClientConfig apiClientConfig)
//	{
//		services.AddScoped<IAppUserClient, AppUserClient>(serviceProvider =>
//		new AppUserClient(
//                serviceProvider.GetRequiredService<IHttpClientFactory>(), 
//                apiClientConfig.BaseUrl, 
//                serviceProvider.GetRequiredService<IHttpContextAccessor>(),
//                serviceProvider.GetRequiredService<IDyvenixLogger<AppUserClient>>()));
//	}
//}
