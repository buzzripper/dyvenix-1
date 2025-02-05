using Dyvenix.App1.Server.Auth;
using Dyvenix.App1.Server.Config;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Builder;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.IdentityModel.Tokens;
using Microsoft.OpenApi.Models;
using Serilog;
using Serilog.Events;
using Serilog.Templates;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Net.Http;
using System.Reflection;


var appEnv = GetAppEnv();
var configuration = BuildConfiguration(appEnv);
var appConfig = AppConfigBuilder.Build(configuration, appEnv);

var logger = CreateLogger(appConfig);

appConfig.LogSettings(logger);

logger.Debug("Creating web application builder");
var builder = WebApplication.CreateBuilder(args);

logger.Debug("Configuring services");
ConfigureServices(builder.Services, logger, appConfig, configuration);

logger.Debug("Building web application");
var app = builder.Build();

logger.Debug("Configuring application");
app.UseSwagger();
app.UseSwaggerUI();
app.UseHttpsRedirection();

app.UseCors("CORSPolicy");
app.MapControllers();
app.UseDefaultFiles(); // Allows serving index.html as default
app.UseStaticFiles(); // Enables serving files from wwwroot
app.UseRouting();

if (!appConfig.AuthConfig.Disabled)
{
	app.UseAuthentication(); // resposible for constructing AuthenticationTicket objects representing the user's identity
	app.UseAuthorization();
}
else
{
	app.MapControllers().AllowAnonymous();
}

// Redirect non-API requests to Angular app
app.Use(async (context, next) =>
{
    if (!context.Request.Path.Value.StartsWith("/api") && 
        !System.IO.Path.HasExtension(context.Request.Path.Value))
    {
        context.Request.Path = "/index.html";
    }
    await next();
});

//Serilog.Debugging.SelfLog.Enable(msg => Debug.WriteLine(msg));

logger.Debug("Starting application");
app.Run();

static string GetAppEnv()
{
	var appEnv = Environment.GetEnvironmentVariable(Constants.Env_VarName);
	if (!string.IsNullOrWhiteSpace(appEnv))
		return appEnv.ToLower();
	else
		return Constants.Env_Local;
}

static IConfiguration BuildConfiguration(string appEnv)
{
	return new ConfigurationBuilder()
		.AddJsonFile("appsettings.json", optional: false)
		.AddJsonFile($"appsettings.{appEnv}.json", optional: false)
		.Build();
}

static void ConfigureServices(IServiceCollection services, ILogger logger, AppConfig appConfig, IConfiguration configuration)
{
	// Web API services
	services.AddControllers();
	services.AddEndpointsApiExplorer();
	services.AddHttpClient();

	// Swagger
	var version = Assembly.GetExecutingAssembly().GetName().Version;
	services.AddSwaggerGen(opt =>
	{
		opt.SwaggerDoc("v1", new Microsoft.OpenApi.Models.OpenApiInfo
		{
			Title = Constants.AppDisplayName,
			Version = version.ToString(),
			Description = Constants.AppDisplayName
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

	// Set up auth if enabled
	if (!appConfig.AuthConfig.Disabled)
		ConfigureAuth(services, appConfig.AuthConfig);

	// Engagement API services
	services.AddSingleton<ILogger>(provider =>
	{
		return logger;
	});
	services.AddSerilog();

	services.AddSingleton(appConfig);
}

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

static void ConfigureAuth(IServiceCollection services, AuthConfig authConfig)
{
	// Register authentication schemes, and specify the default authentication scheme
	services
		.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
		.AddJwtBearer(options =>
		{
			var issuer = $"https://cognito-idp.{authConfig.AWSRegion}.amazonaws.com/{authConfig.UserPoolId}";
			options.Authority = issuer;
			options.TokenValidationParameters = new TokenValidationParameters
			{
				ValidateIssuer = true,
				ValidIssuer = issuer,
				ValidateAudience = false,
				ValidateLifetime = true,
				IssuerSigningKeyResolver = (s, securityToken, identifier, parameters) =>
				{
					var httpClient = new HttpClient();
					var jwtKeySetUrl = issuer;
					var response = httpClient.GetAsync(jwtKeySetUrl).Result;
					var json = response.Content.ReadAsStringAsync().Result;
					var keys = new JsonWebKeySet(json).GetSigningKeys();
					return keys;
				}
			};
		});

	services.AddSingleton<IAuthorizationHandler, HasScopeHandler>();

	services.AddAuthorization(options =>
	{
		var scopeName = $"{authConfig.ResourceServerId}/{Constants.Scope_Foo}";
		options.AddPolicy("BridgeForms", policy =>
			policy.Requirements.Add(new HasScopeRequirement(scopeName)));
	});

	// Configure CORS
	services.AddCors(item =>
	{
		item.AddPolicy("CORSPolicy", builder =>
		{
			builder.WithOrigins(authConfig.AllowedOrigins)
			.AllowAnyMethod()
			.AllowAnyHeader();
		});
	});
}


