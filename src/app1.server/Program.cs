using DotNetEnv;
using Dyvenix.App1.Server.Config;
using Dyvenix.Auth.Server.Config;
using Dyvenix.Logging.Config;
using Dyvenix.Logging.Correlation;
using Microsoft.AspNetCore.Builder;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Serilog;
using System;
using Dyvenix.Core.Models;

const string cRootConfigSectionName = "ApplicationConfig";

// Load environment variables from .env file and get the current app environment
//Env.Load();
//var appEnv = GetAppEnv();

var builder = WebApplication.CreateBuilder(args);
builder.Configuration
	.AddJsonFile("appsettings.json", optional: false, reloadOnChange: true);
	//.AddJsonFile($"appsettings.{appEnv}.json", optional: true);

var appConfig = AppConfigBuilder.Build(builder.Configuration);

Log.Logger = new LogConfigBuilder().Build(appConfig.LogConfig).CreateLogger();
builder.Services.AddDyvenixLoggingServices(builder.Configuration);

builder.Services.AddAppServices(appConfig, appConfig.AuthConfig);
builder.Services.AddDyvenixAuthServices(appConfig.AuthConfig);

builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerServices(appConfig.AuthConfig.Enabled);
builder.Services.AddHttpClient();
builder.Services.AddHttpContextAccessor();

Log.Logger.Debug("Building web application");
var app = builder.Build();

app.UseSwagger();
app.UseSwaggerUI();
app.UseHttpsRedirection();
app.UseCors("CORSPolicy");
app.MapControllers();
app.UseDefaultFiles(); // Allows serving index.html as default
app.UseStaticFiles(); // Enables serving files from wwwroot
app.UseRouting();

app.UseMiddleware<CorrelationIdMiddleware>();

Log.Logger.Debug($"Application URLs: {Environment.GetEnvironmentVariable("ASPNETCORE_URLS")}");

Log.Logger.Debug("Starting application");
app.Run();
Log.Logger.Debug("Application started.");


//static string GetAppEnv()
//{
//	var appEnv = Environment.GetEnvironmentVariable(DyvenixConst.EV_ENVNAME);
//	if (!string.IsNullOrWhiteSpace(appEnv))
//		return appEnv.ToLower();
//	else
//		return string.Empty;
//}

//static void ConfigureServices(IServiceCollection services, IConfiguration configuration, ILogger logger)
//{

	// Web API services
	//services.AddControllers();
	//services.AddEndpointsApiExplorer();
	//services.AddHttpClient();

	// Swagger
	//var version = Assembly.GetExecutingAssembly().GetName().Version;
	//services.AddSwaggerGen(opt => {
	//	opt.SwaggerDoc("v1", new Microsoft.OpenApi.Models.OpenApiInfo {
	//		Title = ConfigConst.AppDisplayName,
	//		Version = version.ToString(),
	//		Description = ConfigConst.AppDisplayName
	//	});

	//	if (!authConfig.Disabled) {
	//		opt.AddSecurityDefinition("Bearer", //Name the security scheme
	//			new OpenApiSecurityScheme {
	//				Description = "JWT Authorization header using the Bearer scheme.",
	//				Type = SecuritySchemeType.Http, //We set the scheme type to http since we're using bearer authentication
	//				Scheme = "bearer" //The name of the HTTP Authorization scheme to be used in the Authorization header. In this case "bearer".
	//			});
	//		opt.AddSecurityRequirement(new OpenApiSecurityRequirement{
	//			{
	//				new OpenApiSecurityScheme{
	//					Reference = new OpenApiReference{
	//						Id = "Bearer", //The name of the previously defined security scheme.
	//						Type = ReferenceType.SecurityScheme
	//					}
	//				},new List<string>()
	//			}
	//		});
	//	}
	//});

	// Set up auth if enabled
	//if (!appConfig.AuthConfig.Disabled)
	//ConfigureAuth(services, configuration, authConfig);

	//services.AddSwaggerGen(opt => {
	//	opt.SwaggerDoc("v1", new Microsoft.OpenApi.Models.OpenApiInfo {
	//		Title = ConfigConst.AppDisplayName,
	//		Version = version.ToString(),
	//		Description = ConfigConst.AppDisplayName
	//	});

	//	if (!authConfig.Disabled) {
	//		opt.AddSecurityDefinition("Bearer", //Name the security scheme
	//			new OpenApiSecurityScheme {
	//				Description = "JWT Authorization header using the Bearer scheme.",
	//				Type = SecuritySchemeType.Http, //We set the scheme type to http since we're using bearer authentication
	//				Scheme = "bearer" //The name of the HTTP Authorization scheme to be used in the Authorization header. In this case "bearer".
	//			});
	//		opt.AddSecurityRequirement(new OpenApiSecurityRequirement{
	//			{
	//				new OpenApiSecurityScheme{
	//					Reference = new OpenApiReference{
	//						Id = "Bearer", //The name of the previously defined security scheme.
	//						Type = ReferenceType.SecurityScheme
	//					}
	//				},new List<string>()
	//			}
	//		});
	//	}
	//});

	// Set up auth if enabled
	//if (!appConfig.AuthConfig.Disabled)
	//ConfigureAuth(services, configuration, authConfig);

	// API services
//}

//static void ConfigureAuth(IServiceCollection services, IConfiguration configuration, AuthConfig authConfig)
//{
	//services.AddDyvenixAuthServices(authConfig);

	//Adds Microsoft Identity platform(AAD v2.0) support to protect this Api
	//services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
	//	.AddMicrosoftIdentityWebApi(options =>
	//	{
	//		configuration.Bind("AzureAdB2C", options);
	//		options.Events = new JwtBearerEvents();

	//		/// <summary>
	//		/// Below you can do extended token validation and check for additional claims, such as:
	//		///
	//		/// - check if the caller's account is homed or guest via the 'acct' optional claim
	//		/// - check if the caller belongs to right roles or groups via the 'roles' or 'groups' claim, respectively
	//		///
	//		/// Bear in mind that you can do any of the above checks within the individual routes and/or controllers as well.
	//		/// For more information, visit: https://docs.microsoft.com/azure/active-directory/develop/access-tokens#validate-the-user-has-permission-to-access-this-data
	//		/// </summary>

	//		//options.Events.OnTokenValidated = async context =>
	//		//{
	//		//    string[] allowedClientApps = { /* list of client ids to allow */ };

	//		//    string clientAppId = context?.Principal?.Claims
	//		//        .FirstOrDefault(x => x.Type == "azp" || x.Type == "appid")?.Value;

	//		//    if (!allowedClientApps.Contains(clientAppId))
	//		//    {
	//		//        throw new System.Exception("This client is not authorized");
	//		//    }
	//		//};
	//	}, options => { configuration.Bind("AzureAdB2C", options); }
	//);

	//services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme);

	//services.AddSingleton<IAuthorizationHandler, HasScopeHandler>();

	//services.AddAuthorization(options => {
	//	var scopeName = $"{ConfigConst.Scope_Api1_Read}";
	//	options.AddPolicy("MainPolicy", policy =>
	//		policy.Requirements.Add(new HasScopeRequirement(scopeName)));
	//});

	//// Configure CORS
	//services.AddCors(item => {
	//	item.AddPolicy("CORSPolicy", builder => {
	//		builder.WithOrigins(authConfig.AllowedOrigins)
	//		.AllowAnyMethod()
	//		.AllowAnyHeader();
	//	});
	//});
//}

//static void Configure(IApplicationBuilder app)
//{
	//if (!appConfig.AuthConfig.Disabled) {
	//	app.UseAuthentication(); // resposible for constructing AuthenticationTicket objects representing the user's identity
	//	app.UseAuthorization();
	//} else {
	//	app.MapControllers().AllowAnonymous();
	//}

	// Redirect non-API requests to Angular app
	//app.Use(async (context, next) => {
	//	if (!context.Request.Path.Value.StartsWith("/api") && !Path.HasExtension(context.Request.Path.Value)) {
	//		context.Request.Path = "/index.html";
	//	}
	//	await next();
	//});

	// Swagger
	//var version = Assembly.GetExecutingAssembly().GetName().Version;
//}
