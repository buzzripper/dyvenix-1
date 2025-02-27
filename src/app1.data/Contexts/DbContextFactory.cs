using Dyvenix.App1.Data.Config;
using Microsoft.EntityFrameworkCore;

namespace Dyvenix.App1.Data.Contexts;

public interface IDbContextFactory
{
	Db CreateDbContext();
}

public class DbContextFactory : IDbContextFactory
{
	protected readonly DataConfig _dataConfig;

	public DbContextFactory(DataConfig dataConfig)
	{
		_dataConfig = dataConfig;
	}

	public Db CreateDbContext()
	{
		var b = new DbContextOptionsBuilder<Db>();
		b.UseSqlServer(_dataConfig.ConnectionString);

		return new Db(b.Options);
	}
}
