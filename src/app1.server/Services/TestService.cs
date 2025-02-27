using Dyvenix.Logging;
using System;

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
		_logger.Verbose("TestService.Test() Verbose");
		_logger.Debug("TestService.Test() Debug");
		_logger.Info("TestService.Test() Info");
		_logger.Warn("TestService.Test() Warn");
		_logger.Fatal("TestService.Test() Fatal");
		try {
			throw new ApplicationException("YES!! App exception!!!");
		} catch (Exception ex) {
			_logger.Error(ex, ex.Message);
		}
	}
}
