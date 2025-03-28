using Asp.Versioning.ApiExplorer;
using Asp.Versioning;
using Dyvenix.App1.Server.Auth;
using Dyvenix.App1.Server.Services;
using Dyvenix.Auth.Core.Services;
using Microsoft.AspNetCore.Builder;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.OpenApi.Models;
using System.Collections.Generic;
using System.Reflection;

namespace Dyvenix.App1.Server.Config;

public static partial class ServiceCollExt
{
	public static IServiceCollection AddAppServices(this IServiceCollection services, AppConfig appConfig)
	{
		services.AddSingleton(appConfig);
		services.AddScoped<ITestService, TestService>();
		services.AddScoped<IAccessClaimsProvider, AccessClaimsProvider>();
		services.AddScoped<IAppUserService2, AppUserService2>();

		AddGeneratedServices(services);

		return services;
	}

	static partial void AddGeneratedServices(this IServiceCollection services);

	//public static IServiceCollection AddSwaggerServices(this IServiceCollection services, bool includeAuth)
	//{
	//	var version = Assembly.GetExecutingAssembly().GetName().Version;

	//	services.AddSwaggerGen(opt => {
	//		opt.SwaggerDoc("v1", new Microsoft.OpenApi.Models.OpenApiInfo {
	//			Title = ConfigConst.AppDisplayName,
	//			Version = version.ToString(),
	//			Description = ConfigConst.AppDisplayName
	//		});

	//		if (includeAuth) {
	//			opt.AddSecurityDefinition("Bearer", //Name the security scheme
	//				new OpenApiSecurityScheme {
	//					Description = "JWT Authorization header using the Bearer scheme.",
	//					Type = SecuritySchemeType.Http, //We set the scheme type to http since we're using bearer authentication
	//					Scheme = "bearer" //The name of the HTTP Authorization scheme to be used in the Authorization header. In this case "bearer".
	//				});

	//			opt.AddSecurityRequirement(new OpenApiSecurityRequirement{
	//			{
	//				new OpenApiSecurityScheme{
	//					Reference = new OpenApiReference{
	//						Id = "Bearer", //The name of the previously defined security scheme.
	//						Type = ReferenceType.SecurityScheme
	//					}
	//				},new List<string>()
	//			}
	//		});
	//		}
	//	});

	//	return services;
	//}

	//public static void UseSwaggerServices(this IApplicationBuilder app)
	//{
	//	app.UseSwagger();
	//	app.UseSwaggerUI();
	//}

	public static IServiceCollection AddSwaggerServices(this IServiceCollection services, bool includeAuth)
	{
		var assyVersion = Assembly.GetExecutingAssembly().GetName().Version;

		services.AddApiVersioning(options => {
			options.ReportApiVersions = true;
			options.AssumeDefaultVersionWhenUnspecified = true;
			options.DefaultApiVersion = new ApiVersion(1, 0);
		})
		.AddApiExplorer(options => {
			options.GroupNameFormat = "'v'VVV"; // Formats version as "v1"
			options.SubstituteApiVersionInUrl = true;
		});

		// Register Swagger
		services.AddEndpointsApiExplorer();
		services.AddSwaggerGen(options => {
			var provider = services.BuildServiceProvider()
							 .GetRequiredService<IApiVersionDescriptionProvider>();

			foreach (var description in provider.ApiVersionDescriptions) {
				options.SwaggerDoc(description.GroupName, new OpenApiInfo {
					Title = $"{ConfigConst.AppDisplayName} {description.ApiVersion}",
					Version = description.ApiVersion.ToString(),
					Description = $"Application server for App1 ({assyVersion})"
				});
			}
		});

		return services;
	}

	public static void UseSwaggerServices(this WebApplication app, IServiceCollection services)
	{
		app.UseSwagger();
		app.UseSwaggerUI(options => {
			var provider = app.Services.GetRequiredService<IApiVersionDescriptionProvider>();
			foreach (var description in provider.ApiVersionDescriptions) {
				options.SwaggerEndpoint($"/swagger/{description.GroupName}/swagger.json", $"My API {description.ApiVersion}");
			}
		});
	}
}
