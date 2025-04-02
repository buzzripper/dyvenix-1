using System;

namespace App1.Common.IntTests;

public class GlobalTestFixture
{
	public ServerApiFactory ServerApiFactory { get; private set; }
	public IServiceProvider ServiceProvider { get; }

	public GlobalTestFixture()
	{
		ServerApiFactory = new ServerApiFactory();
		ServiceProvider = ServerApiFactory.Services; 
	}
}
