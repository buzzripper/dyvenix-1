//using Dyvenix.App1.Data.Config;
//using Dyvenix.App1.Data.Contexts;
//using Microsoft.Extensions.DependencyInjection;
//using System.Linq;

//namespace Dyvenix.App1.Server.Tests.DbSetup;

//[TestFixture]
//public class SeedDataTests
//{
//	IServiceCollection _services;
//	//private ServiceProvider _serviceProvider;

//	#region Setup / Tear Down

//	[OneTimeSetUp]
//	public void OneTimeSetUp()
//	{
//		_services = new ServiceCollection();
//	}

//	[OneTimeTearDown]
//	public void OneTimeTearDown()
//	{
//		//_serviceProvider?.Dispose();
//	}

//	[SetUp]
//	public void Setup()
//	{
//		_services.Clear();
//		_services.AddScoped<IDbContextFactory, DbContextFactory>();
//		var dataConfig = new DataConfig { ConnectionString = "Server=.;Database=Dyvenix;Trusted_Connection=True;" };
//		_services.AddSingleton(dataConfig);
//	}

//	[TearDown]
//	public void TestTearDown()
//	{
//	}

//	private ServiceProvider GetServiceProvider()
//	{
//		return _services.BuildServiceProvider();
//	}

//	#endregion

//	[Test]
//	public void CreateSeedData()
//	{
//		using var serviceProider = GetServiceProvider();
//		using var db = serviceProider.GetRequiredService<IDbContextFactory>().CreateDbContext();

//		var appUser = db.AppUser.AppUser.FirstOrDefault(u => u.IdentityId == "7f6dc6a3-0015-4ff8-adb5-26995850d637");
//	}

//	private SeedData GetSeedData() 

//}
