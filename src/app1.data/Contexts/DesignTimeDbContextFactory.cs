using Microsoft.EntityFrameworkCore.Design;
using Microsoft.EntityFrameworkCore;

namespace Dyvenix.App1.Data;

public class DesignTimeDbContextFactory : IDesignTimeDbContextFactory<Db>
{
    public Db CreateDbContext(string[] args)
    {
        var optionsBuilder = new DbContextOptionsBuilder<Db>();
        optionsBuilder.UseSqlServer("Password=?#cbz84A#znn5gL3pap;User ID=dyvenix_admin;Initial Catalog=dyvenix;Data Source=localhost;Encrypt=False;");

        return new Db(optionsBuilder.Options);
    }
}