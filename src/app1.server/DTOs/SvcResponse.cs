
namespace Dyvenix.App1.Server.DTOs;

public abstract class SvcResponse
{
	public int StatusCode { get; set; }
	public string Message { get; set; }
}

public abstract class SvcResponse<T> : SvcResponse
{
	public T Data { get; set; }
}
