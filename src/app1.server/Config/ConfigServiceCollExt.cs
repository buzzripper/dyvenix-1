using Dyvenix.App1.Server.Services;
using Dyvenix.Auth.Server.Config;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.OpenApi.Models;
using System.Collections.Generic;
using System.Reflection;

namespace Dyvenix.App1.Server.Config;

public static class ConfigServiceCollExt
{
	public static IServiceCollection AddAppServices(this IServiceCollection services, AppConfig appConfig, AuthConfig authConfig)
	{
		services.AddSingleton(appConfig);
		services.AddSingleton(authConfig);
		services.AddScoped<ITestService, TestService>();

		return services;
	}

	public static IServiceCollection AddSwaggerServices(this IServiceCollection services, bool includeAuth)
	{
		var version = Assembly.GetExecutingAssembly().GetName().Version;

		services.AddSwaggerGen(opt => {
			opt.SwaggerDoc("v1", new Microsoft.OpenApi.Models.OpenApiInfo {
				Title = ConfigConst.AppDisplayName,
				Version = version.ToString(),
				Description = ConfigConst.AppDisplayName
			});

			if (includeAuth) {
				opt.AddSecurityDefinition("Bearer", //Name the security scheme
					new OpenApiSecurityScheme {
						Description = "JWT Authorization header using the Bearer scheme.",
						Type = SecuritySchemeType.Http, //We set the scheme type to http since we're using bearer authentication
						Scheme = "bearer" //The name of the HTTP Authorization scheme to be used in the Authorization header. In this case "bearer".
					});

				opt.AddSecurityRequirement(new OpenApiSecurityRequirement{
				{
					new OpenApiSecurityScheme{
						Reference = new OpenApiReference{
							Id = "Bearer", //The name of the previously defined security scheme.
							Type = ReferenceType.SecurityScheme
						}
					},new List<string>()
				}
			});
			}
		});



		return services;
	}
}
