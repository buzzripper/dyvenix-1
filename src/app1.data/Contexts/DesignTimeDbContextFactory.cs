using Microsoft.EntityFrameworkCore.Design;
using Microsoft.EntityFrameworkCore;
using Dyvenix.App1.Data.Contexts;

public class BloggingContextFactory : IDesignTimeDbContextFactory<Db>
{
    public Db CreateDbContext(string[] args)
    {
        var optionsBuilder = new DbContextOptionsBuilder<Db>();
        optionsBuilder.UseSqlServer("Password=?#cbz84A#znn5gL3pap;User ID=dyvenix_admin;Initial Catalog=dyvenix;Data Source=localhost;Encrypt=False;");

        return new Db(optionsBuilder.Options);
    }
}