
namespace Dyvenix.App1.Server.DTOs;

public abstract class SvcResponseBase
{
	public int StatusCode { get; set; }
	public string Message { get; set; }
}

public abstract class SvcResponseBase<T> : SvcResponseBase
{
	public T Data { get; set; }
}
