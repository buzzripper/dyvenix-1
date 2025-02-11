using Dyvenix.Logging;
using Serilog;

namespace Dyvenix.App1.Server.Services;

public interface ITestService
{
	void Test();
}

public class TestService : ITestService
{
	private readonly IDyvenixLogger<TestService> _logger;

	public TestService(IDyvenixLogger<TestService> logger)
	{
		_logger = logger;
	}

	public void Test()
	{
		_logger.Info("TestService.Test()");
	}
}
