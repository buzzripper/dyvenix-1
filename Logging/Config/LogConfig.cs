using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Dyvenix.Logging.Config
{
	public class LogConfig
	{
		// Console
		public bool EnableConsoleLogging { get; set; }
		public string ConsoleLogLevel { get; set; }

		// File
		public bool EnableFileLogging { get; set; }
		public string FileLogLevel { get; set; }
		public string FilePath { get; set; }

		// Database
		public bool EnableDbLogging { get; set; }
		public string DbLogLevel { get; set; }
		public string DbConnectionString { get; set; }
		public string Schema { get; set; }
		public string TableName { get; set; }
		public int BatchPostingLimit { get; set; }
	}
}
