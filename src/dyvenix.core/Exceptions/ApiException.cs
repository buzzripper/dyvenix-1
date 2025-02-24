using System;

namespace Dyvenix.Core.Exceptions;

public abstract class ApiException : Exception
{
	public ApiException() : base() { }

	public ApiException(string message) : base(message) { }

	public ApiException(string message, Exception innerException) : base(message, innerException) { }

	public ApiException(string correlationId, string message) : this(message)
	{
		CorrelationId = correlationId;
	}

	public int StatusCode
	{
		get {
			return GetStatusCode();
		}
	}
	public string CorrelationId { get; set; }

	protected abstract int GetStatusCode();
}
