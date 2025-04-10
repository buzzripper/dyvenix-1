//------------------------------------------------------------------------------------------------------------
// This file was auto-generated 4/9/2025 9:08 PM. Any changes made to it will be lost.
//------------------------------------------------------------------------------------------------------------
using System;

namespace Dyvenix.App1.Common.Entities;

public partial class LogEvent
{
	// PK
	public Guid Id { get; set; }

	// Properties
	public string Message { get; set; }
	public DateTime Timestamp { get; set; }
	public string Exception { get; set; }
	public string Application { get; set; }
	public string Source { get; set; }
	public string CorrelationId { get; set; }

	

	public static class PropNames 
    {
		public const string Id = nameof(LogEvent.Id);
		public const string Message = nameof(LogEvent.Message);
		public const string Timestamp = nameof(LogEvent.Timestamp);
		public const string Exception = nameof(LogEvent.Exception);
		public const string Application = nameof(LogEvent.Application);
		public const string Source = nameof(LogEvent.Source);
		public const string CorrelationId = nameof(LogEvent.CorrelationId);
    }
}
