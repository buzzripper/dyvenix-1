using DotNetEnv;
using Dyvenix.App1.Server.Auth;
using Dyvenix.App1.Server.Config;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Builder;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Identity.Web;
using Microsoft.IdentityModel.Tokens;
using Microsoft.OpenApi.Models;
using Serilog;
using Serilog.Events;
using Serilog.Templates;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.IO;
using System.Net.Http;
using System.Reflection;


// Load environment variables from .env file
Env.Load();

// Build AppConfig from appsettings.json
var configuration = new ConfigurationBuilder().AddJsonFile("appsettings.json", optional: false).Build();
var appConfig = AppConfigBuilder.Build(configuration);

// Initialize logging
var logger = CreateLogger(appConfig);
appConfig.WriteSettingsToLog(logger);

var builder = WebApplication.CreateBuilder(args);

ConfigureServices(builder.Services, logger, appConfig, configuration);

var app = builder.Build();

Configure(app, logger, appConfig, configuration);

#region Startup Methods

static ILogger CreateLogger(AppConfig appConfig)
{
	var minLogLevel = Enum.TryParse<LogEventLevel>(appConfig.MinLogLevel, out var level) ? level : LogEventLevel.Debug;
	var fileLogFormatter = new ExpressionTemplate("[{@t:yyyy-MM-dd HH:mm:ss}] {@l:u3} {SourceContext} {@m}\n{@x}");
	var awsLogFormatter = new ExpressionTemplate("{@l:u3} {SourceContext} {@m}\n{@x}");

	var loggerConfiguration = new LoggerConfiguration();

	// Minimum log level
	switch (minLogLevel)
	{
		case LogEventLevel.Verbose:
			loggerConfiguration.MinimumLevel.Verbose();
			break;
		case LogEventLevel.Debug:
			loggerConfiguration.MinimumLevel.Debug();
			break;
		case LogEventLevel.Information:
			loggerConfiguration.MinimumLevel.Information();
			break;
		case LogEventLevel.Warning:
			loggerConfiguration.MinimumLevel.Warning();
			break;
		default:
			loggerConfiguration.MinimumLevel.Error();
			break;
	};

	// Console
	loggerConfiguration.WriteTo.Console(fileLogFormatter);

	return loggerConfiguration.CreateLogger();
}

#endregion

#region ConfigureServices

static void ConfigureServices(IServiceCollection services, ILogger logger, AppConfig appConfig, IConfiguration configuration)
{
	logger.Debug("Configuring services");

	// Web API services
	services.AddControllers();
	services.AddHttpClient();

	// Swagger
	var version = Assembly.GetExecutingAssembly().GetName().Version;
	services.AddSwaggerGen(opt =>
	{
		opt.SwaggerDoc("v1", new Microsoft.OpenApi.Models.OpenApiInfo
		{
			Title = ConfigConst.AppDisplayName,
			Version = version.ToString(),
			Description = ConfigConst.AppDisplayName
		});

		if (!appConfig.AuthConfig.Disabled)
		{
			opt.AddSecurityDefinition("Bearer", //Name the security scheme
				new OpenApiSecurityScheme
				{
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
	
	//{
	//	services.AddAuthorizationBuilder()
	//		.SetFallbackPolicy(new AuthorizationPolicyBuilder()
	//		.RequireAssertion(_ => true) // Always allow
	//		.Build());
	//}
	//else

	if (!appConfig.AuthConfig.Disabled)
		ConfigureAuth(services, configuration, appConfig);

	// Register application services
	services.AddSingleton<ILogger>(provider => { return logger; });
	services.AddSerilog();
	services.AddSingleton(appConfig);
}

static void ConfigureAuth(IServiceCollection services, IConfiguration configuration, AppConfig appConfig)
{
	//Adds Microsoft Identity platform(AAD v2.0) support to protect this Api
	services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
		.AddMicrosoftIdentityWebApi(options =>
		{
			configuration.Bind("AzureAdB2C", options);
			options.Events = new JwtBearerEvents();

			/// <summary>
			/// Below you can do extended token validation and check for additional claims, such as:
			///
			/// - check if the caller's account is homed or guest via the 'acct' optional claim
			/// - check if the caller belongs to right roles or groups via the 'roles' or 'groups' claim, respectively
			///
			/// Bear in mind that you can do any of the above checks within the individual routes and/or controllers as well.
			/// For more information, visit: https://docs.microsoft.com/azure/active-directory/develop/access-tokens#validate-the-user-has-permission-to-access-this-data
			/// </summary>

			//options.Events.OnTokenValidated = async context =>
			//{
			//    string[] allowedClientApps = { /* list of client ids to allow */ };

			//    string clientAppId = context?.Principal?.Claims
			//        .FirstOrDefault(x => x.Type == "azp" || x.Type == "appid")?.Value;

			//    if (!allowedClientApps.Contains(clientAppId))
			//    {
			//        throw new System.Exception("This client is not authorized");
			//    }
			//};
		}, options => { configuration.Bind("AzureAdB2C", options); }
	);
	services.AddSingleton<IAuthorizationHandler, HasScopeHandler>();

	services.AddAuthorization(options =>
	{
		var scopeName = $"{ConfigConst.Scope_Api1_Read}";
		options.AddPolicy("MainPolicy", policy =>
			policy.Requirements.Add(new HasScopeRequirement(scopeName)));
	});

	//services.AddAuthorization(options =>
	//{
	//	if (appConfig.AuthConfig.Disabled)
	//	{
	//		// Allow all requests without authentication in Development
	//		options.FallbackPolicy = new AuthorizationPolicyBuilder()
	//			.RequireAssertion(_ => true) // Always allow access
	//			.Build();
	//	}
	//});

	//services.AddAuthorization(options =>
	//{
	//	if (appConfig.AuthConfig.Disabled)
	//	{
	//		options.DefaultPolicy = new AuthorizationPolicyBuilder()
	//			.RequireAssertion(_ => true) // Allow all requests
	//			.Build();
	//	}
	//});

	//services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
	//	.AddJwtBearer(options =>
	//	{
	//		options.Authority = "https://your-auth-provider.com";
	//		options.Audience = "your-api-audience";
	//	});
	//services.AddAuthentication();
	//services.AddAuthorization();
	//services.AddAuthorization(options =>
	//{
	//	if (appConfig.AuthConfig.Disabled)
	//	{
	//		options.FallbackPolicy = new AuthorizationPolicyBuilder()
	//			.RequireAssertion(_ => true) // Always allow
	//			.Build();
	//	}
	//});

	//Configure CORS
	services.AddCors(item =>
	{
		item.AddPolicy("CORSPolicy", builder =>
		{
			builder.WithOrigins(appConfig.AuthConfig.AllowedOrigins)
			.AllowAnyMethod()
			.AllowAnyHeader();
		});
	});
}

#endregion

#region Configure

static void Configure(WebApplication app, ILogger logger, AppConfig appConfig, IConfiguration configuration)
{
	logger.Debug("Building web application");

	logger.Debug("Configuring application");
	app.UseSwagger();
	app.UseSwaggerUI();
	app.UseHttpsRedirection();

	app.UseCors("CORSPolicy");
	app.UseDefaultFiles(); // Allows serving index.html as default
	app.UseStaticFiles(); // Enables serving files from wwwroot
	app.UseRouting();

	if (appConfig.AuthConfig.Disabled)
	{
		app.MapControllers().AllowAnonymous();
		app.MapControllers().WithMetadata(new AllowAnonymousAttribute());
	}
	else
	{
		app.UseAuthentication(); // resposible for constructing AuthenticationTicket objects representing the user's identity
		app.UseAuthorization();
		app.MapControllers();
	}

	//Redirect non-API requests to Angular app
	app.Use(async (context, next) =>
	{
		if (!context.Request.Path.Value.StartsWith("/api") && !Path.HasExtension(context.Request.Path.Value))
			context.Request.Path = "/index.html";

		await next();
	});

	//Serilog.Debugging.SelfLog.Enable(msg => Debug.WriteLine(msg));
	logger.Debug($"Application URLs: {Environment.GetEnvironmentVariable("ASPNETCORE_URLS")}");

	logger.Debug("Starting application");
	app.Run();
}

#endregion