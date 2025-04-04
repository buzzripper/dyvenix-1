//------------------------------------------------------------------------------------------------------------
// This file was auto-generated 4/2/2025 9:33 PM. Any changes made to it will be lost.
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

	public DbSet<AccessClaim> AccessClaim { get; set; }
	public DbSet<AppUser> AppUser { get; set; }
	public DbSet<LogEvent> LogEvent { get; set; }

    # endregion

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
		modelBuilder.Entity<AccessClaim>(entity =>
		{
			entity.ToTable("AccessClaim");

			// PK
			entity.HasKey(e => e.Id);

			// Properties
			entity.Property(e => e.ClaimName).IsRequired(true).HasMaxLength(50);
			entity.Property(e => e.ClaimValue).IsRequired(false).HasMaxLength(50);
			entity.Property(e => e.AppUserId).IsRequired(true);

			// Indexes
			entity.HasIndex(e => e.Id, "IX_AccessClaim_Id").IsUnique();
			entity.HasIndex(e => e.AppUserId, "IX_AccessClaim_AppUserId");
		});

		modelBuilder.Entity<AppUser>(entity =>
		{
			entity.ToTable("AppUser");

			// PK
			entity.HasKey(e => e.Id);

			// Properties
			entity.Property(e => e.ExtId).IsRequired(false).HasMaxLength(100);
			entity.Property(e => e.FirstName).IsRequired(true).HasMaxLength(100);
			entity.Property(e => e.LastName).IsRequired(true).HasMaxLength(100);
			entity.Property(e => e.Email).IsRequired(true).HasMaxLength(200);
			entity.Property(e => e.IsEnabled).IsRequired(true);
			entity.Property(e => e.CompanyId).IsRequired(true).HasMaxLength(10);

			// Indexes
			entity.HasIndex(e => e.Id, "IX_AppUser_Id").IsUnique();
			entity.HasIndex(e => e.ExtId, "IX_AppUser_ExtId");
			entity.HasIndex(e => e.LastName, "IX_AppUser_LastName");
			entity.HasIndex(e => e.Email, "IX_AppUser_Email").IsUnique();
			entity.HasIndex(e => e.CompanyId, "IX_AppUser_CompanyId");
		});

		modelBuilder.Entity<LogEvent>(entity =>
		{
			entity.ToTable("LogEvents", "Logs");

			// PK
			entity.HasKey(e => e.Id);

			// Properties
			entity.Property(e => e.Message).IsRequired(false);
			entity.Property(e => e.Timestamp).IsRequired(false).HasColumnType("datetime");
			entity.Property(e => e.Exception).IsRequired(false);
			entity.Property(e => e.LogLevel).IsRequired(false);
			entity.Property(e => e.Application).IsRequired(false).HasMaxLength(200);
			entity.Property(e => e.Source).IsRequired(false).HasMaxLength(200);
			entity.Property(e => e.CorrelationId).IsRequired(false).HasMaxLength(50);

			// Indexes
			entity.HasIndex(e => e.Id, "IX_LogEvent_Id").IsUnique();
			entity.HasIndex(e => e.Timestamp, "IX_LogEvent_Timestamp");
			entity.HasIndex(e => e.Application, "IX_LogEvent_Application");
		});


        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
