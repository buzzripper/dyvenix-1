namespace Dyvenix.App1.Server.Config
{
	public static class ConfigConst
	{
		// Application
		public const string AppName = "app1.server";
		public const string AppDisplayName = "App1 Server";

		// Logging
		public const string LogsFolder = "Logs";
		public const string LogFilename = "app1.server.log";

		// Environment variable names
		public const string EV_ENVNAME = "APP_ENV";
		public const string EV_AUTHCONFIG_DISABLED = "EV_AUTHCONFIG_DISABLED";
		public const string EV_AUTHCONFIG_ALLOWEDORIGINS = "EV_AUTHCONFIG_ALLOWEDORIGINS";

		// Auth
		public const string Scope_Api1_Read = "api.read";
		public const string Scope_Api1_Write = "api.write";

		// Status response
		public const string Status_Ok = "ok";
		public const string Status_Error = "error";
	}
}
