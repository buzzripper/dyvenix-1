namespace Dyvenix.App1.Server.Config
{
	public class AuthConfig
	{
		public bool Disabled { get; set; }
		public string AllowedOrigins { get; set; }

		public void ProcessEnvironmentVars()
		{
			this.Disabled = ConfigUtils.Replace(ConfigConst.EV_AUTHCONFIG_DISABLED, this.Disabled);
			this.AllowedOrigins = ConfigUtils.Replace(ConfigConst.EV_AUTHCONFIG_ALLOWEDORIGINS, this.AllowedOrigins);
		}
	}
}
