using Dyvenix.App1.Data.Contexts;
using Microsoft.Extensions.DependencyInjection;

namespace Dyvenix.App1.Data.Config;

public static class DataCollExt
{
	public static void AddDyvenixDataServices(this IServiceCollection services, DataConfig dataConfig)
	{
		services.AddSingleton(dataConfig);
		services.AddScoped<IDbContextFactory, DbContextFactory>();
	}
}