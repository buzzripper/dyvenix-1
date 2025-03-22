//------------------------------------------------------------------------------
// This file was auto-generated. Any changes made to it will be lost.
//------------------------------------------------------------------------------
using System;
using System.Linq;
using System.Text;
using System.Text.Json.Serialization;

namespace Dyvenix.App1.Data.Entities;

public partial class LogEvent
{
	public int Id { get; set; }

	public string Message { get; set; }
	public DateTime Timestamp { get; set; }
	public string Exception { get; set; }
	[JsonConverter(typeof(JsonStringEnumConverter))]
	public LogLevel? LogLevel { get; set; }
	public string Application { get; set; }
	public string Source { get; set; }
	public string CorrelationId { get; set; }
}
