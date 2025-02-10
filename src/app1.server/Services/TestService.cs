using Serilog;

namespace Dyvenix.App1.Server.Services;

public interface ITestService
{
	void Test();
}

public class TestService : ITestService
{
	private readonly ILogger _logger;

	public TestService(ILogger logger)
	{
		_logger = logger;
	}

	public void Test()
	{
		_logger.Information("TestService.Test()");
	}
}
