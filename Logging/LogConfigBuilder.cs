using Dyvenix.Logging.Config;
using Serilog;
using Serilog.Events;
using Serilog.Sinks.MSSqlServer;
using System;
using System.Collections.ObjectModel;
using System.Data;

namespace Dyvenix.Logging
{
	public class LogConfigBuilder
	{
		public LoggerConfiguration Build(LogConfig logConfig)
		{
			ValidateConfig(logConfig);

			var loggerConfiguration = new LoggerConfiguration().Enrich.FromLogContext();
			loggerConfiguration.Enrich.FromLogContext();

			if (logConfig.EnableConsoleLogging)
			{
				loggerConfiguration.WriteTo.Console(GetLogEventLevel(logConfig.ConsoleLogLevel));
			}

			if (logConfig.EnableFileLogging)
			{
				loggerConfiguration.WriteTo.File(logConfig.FilePath, GetLogEventLevel(logConfig.FileLogLevel));
			}

			if (logConfig.EnableDbLogging)
			{
				loggerConfiguration
					.WriteTo.MSSqlServer(
					logConfig.DbConnectionString,
					new MSSqlServerSinkOptions
					{
						TableName = logConfig.TableName,
						SchemaName = logConfig.Schema,
						AutoCreateSqlTable = false,
						BatchPostingLimit = logConfig.BatchPostingLimit
					},
					sinkOptionsSection: null,
					appConfiguration: null,
					restrictedToMinimumLevel: GetLogEventLevel(logConfig.DbLogLevel),
					formatProvider: null,
					columnOptions: BuildColumnOptions(),
					columnOptionsSection: null,
					logEventFormatter: null);
			}

			return loggerConfiguration;
		}

		private void ValidateConfig(LogConfig logConfig)
		{
			if (logConfig.EnableFileLogging)
			{
				if (string.IsNullOrWhiteSpace(logConfig.FilePath))
					throw new ArgumentException("File path is required when file logging is enabled.");
			}

			if (logConfig.EnableDbLogging)
			{
				if (string.IsNullOrWhiteSpace(logConfig.DbConnectionString))
					throw new ArgumentException("Database connection string is required when database logging is enabled.");

				if (string.IsNullOrWhiteSpace(logConfig.Schema))
					logConfig.Schema = "dbo";

				if (string.IsNullOrWhiteSpace(logConfig.TableName))
					throw new ArgumentException("Table name is required when database logging is enabled.");
			}
		}

		private LogEventLevel GetLogEventLevel(string logLevel)
		{
			LogEventLevel result = logLevel switch
			{
				"Verbose" => LogEventLevel.Verbose,
				"Debug" => LogEventLevel.Debug,
				"Information" => LogEventLevel.Information,
				"Warning" => LogEventLevel.Warning,
				"Error" => LogEventLevel.Error,
				"Fatal" => LogEventLevel.Fatal,
				_ => LogEventLevel.Information,
			};

			return result;
		}

		private ColumnOptions BuildColumnOptions()
		{
			var columnOptions = new ColumnOptions
			{
				TimeStamp =
				{
					ColumnName = "TimeStampUTC",
					ConvertToUtc = true,
				},
				Level =
				{
					DataLength = 12
				},
				AdditionalColumns = new Collection<SqlColumn>
				{
					new SqlColumn { ColumnName = "MachineName", DataType = SqlDbType.NVarChar, DataLength=100 },
					new SqlColumn { ColumnName = "Source", DataType = SqlDbType.NVarChar, DataLength=200 },
				}
			};
			columnOptions.Store.Remove(StandardColumn.Id);
			columnOptions.Store.Remove(StandardColumn.Properties);
			columnOptions.Store.Remove(StandardColumn.MessageTemplate);

			return columnOptions;
		}
	}
}
