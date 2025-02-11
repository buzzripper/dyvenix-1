using Serilog;

namespace Dyvenix.Logging;

public interface IDyvenixLogger<T>
{
	void Verbose(string message);
	void Debug(string message);
	void Info(string message);
	void Warn(string message);
	void Error(string message);
	void Fatal(string message);
}

public class DyvenixLogger<T> : IDyvenixLogger<T>
{
	private readonly ILogger _logger;

	public DyvenixLogger()
	{
		_logger = Log.ForContext("Source", typeof(T).Name);
	}

	public void Verbose(string message)
	{
		_logger.Verbose(message);
	}

	public void Debug(string message)
	{
		_logger.Debug(message);
	}

	public void Info(string message)
	{
		_logger.Information(message);
	}

	public void Warn(string message)
	{
		_logger.Warning(message);
	}

	public void Error(string message)
	{
		_logger.Error(message);
	}

	public void Fatal(string message)
	{
		_logger.Fatal(message);
	}
}