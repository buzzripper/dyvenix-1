//------------------------------------------------------------------------------------------------------------
// This file was auto-generated 4/6/2025 11:44 AM. Any changes made to it will be lost.
//------------------------------------------------------------------------------------------------------------
using Microsoft.EntityFrameworkCore;
using Dyvenix.App1.Common.Entities;


namespace Dyvenix.App1.Data;

public partial class Db : DbContext
{
    public Db(DbContextOptions<Db> options)
        : base(options)
    {
    }

    # region Properties

	public DbSet<AppUser> AppUser { get; set; }

    # endregion

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
		modelBuilder.Entity<AppUser>(entity =>
		{
			entity.ToTable("AppUser");

			// PK
			entity.HasKey(e => e.Id);

			// Properties
			entity.Property(e => e.IsEnabled).IsRequired(true);
			entity.Property(e => e.FirstName).IsRequired(true);
			entity.Property(e => e.LastName).IsRequired(true);
			entity.Property(e => e.Email).IsRequired(true);
			entity.Property(e => e.CompanyId).IsRequired(false);

			// Indexes
			entity.HasIndex(e => e.Id, "IX_AppUser_Id").IsUnique();
			entity.HasIndex(e => e.LastName, "IX_AppUser_LastName");
			entity.HasIndex(e => e.Email, "IX_AppUser_Email");
		});


        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
