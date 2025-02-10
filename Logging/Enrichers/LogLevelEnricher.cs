using Serilog.Core;
using Serilog.Events;

namespace Dyvenix.Logging.Enrichers;

public class LogLevelEnricher : ILogEventEnricher
{
	public void Enrich(LogEvent logEvent, ILogEventPropertyFactory propertyFactory)
	{
		var levelValue = (int)logEvent.Level;
		var levelProperty = new LogEventProperty("LogLevel", new ScalarValue(levelValue));
		logEvent.AddPropertyIfAbsent(levelProperty);
	}
}

