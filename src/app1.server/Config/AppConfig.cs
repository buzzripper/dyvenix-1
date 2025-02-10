using Dyvenix.Logging.Config;
using Serilog;
using System;
using System.Text;

namespace Dyvenix.App1.Server.Config
{
	public partial class AppConfig
	{
		public string EnvName { get; set; }
		public string MinLogLevel { get; set; }
		public AuthConfig AuthConfig { get; set; }
		public LogConfig LogConfig { get; set; }

		public void ProcessEnvironmentVars()
		{
			this.EnvName = ConfigUtils.Replace(ConfigConst.EV_ENVNAME, this.EnvName);
			this.AuthConfig.ProcessEnvironmentVars();
		}

		public void WriteSettingsToLog(ILogger logger)
		{
			var sb = new StringBuilder();

			sb.AppendLine($"------------ AppConfig Settings ---------------");
			sb.AppendLine($"Starting service {ConfigConst.AppDisplayName}  [{DateTime.Now}]");
			sb.AppendLine("Application Configuration:");
			sb.AppendLine($"\tMinLogLevel: {MinLogLevel}");

			// AuthConfig
			sb.AppendLine("AuthConfig:");
			sb.AppendLine($"\tDisabled: {AuthConfig.Disabled}");
			sb.AppendLine($"\tAllowedOrigins: {AuthConfig.AllowedOrigins}");

			logger.Information(sb.ToString());
		}
	}
}
