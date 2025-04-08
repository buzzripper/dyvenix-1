//------------------------------------------------------------------------------------------------------------
// This file was auto-generated 4/8/2025 9:53 AM. Any changes made to it will be lost.
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
	public DbSet<AccessClaim> AccessClaim { get; set; }
	public DbSet<LogEvent> LogEvent { get; set; }

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
			entity.Property(e => e.FirstName).IsRequired(true).HasMaxLength(100);
			entity.Property(e => e.LastName).IsRequired(true).HasMaxLength(100);
			entity.Property(e => e.Email).IsRequired(true).HasMaxLength(200);
			entity.Property(e => e.CompanyId).IsRequired(false).HasMaxLength(10);
			entity.Property(e => e.ExtId).IsRequired(true).HasMaxLength(68);
			entity.Property(e => e.GroupCode).IsRequired(false);
			entity.Property(e => e.UserType).IsRequired(true);

			// Indexes
			entity.HasIndex(e => e.Id, "IX_AppUser_Id").IsUnique();
			entity.HasIndex(e => e.LastName, "IX_AppUser_LastName");
			entity.HasIndex(e => e.Email, "IX_AppUser_Email");
			entity.HasIndex(e => e.ExtId, "IX_AppUser_ExtId");
		});

		modelBuilder.Entity<AccessClaim>(entity =>
		{
			entity.ToTable("AccessClaim");

			// PK
			entity.HasKey(e => e.Id);

			// Properties
			entity.Property(e => e.ClaimName).IsRequired(true).HasMaxLength(100);
			entity.Property(e => e.ClaimValue).IsRequired(false).HasMaxLength(200);
			entity.Property(e => e.AppUserId).IsRequired(true);

			// Indexes
			entity.HasIndex(e => e.Id, "IX_AccessClaim_Id").IsUnique();
			entity.HasIndex(e => e.AppUserId, "IX_AccessClaim_AppUserId");
		});

		modelBuilder.Entity<LogEvent>(entity =>
		{
			entity.ToTable("LogEvents", "Logs");

			// PK
			entity.HasKey(e => e.Id);

			// Properties
			entity.Property(e => e.Message).IsRequired(true);
			entity.Property(e => e.Timestamp).IsRequired(true).HasColumnType("datetime");
			entity.Property(e => e.Exception).IsRequired(true);
			entity.Property(e => e.Application).IsRequired(true).HasMaxLength(100);
			entity.Property(e => e.Source).IsRequired(true).HasMaxLength(100);
			entity.Property(e => e.CorrelationId).IsRequired(true).HasMaxLength(50);

			// Indexes
			entity.HasIndex(e => e.Id, "IX_LogEvent_Id").IsUnique();
			entity.HasIndex(e => e.Message, "IX_LogEvent_Message");
			entity.HasIndex(e => e.Timestamp, "IX_LogEvent_Timestamp");
			entity.HasIndex(e => e.Application, "IX_LogEvent_Application");
			entity.HasIndex(e => e.Source, "IX_LogEvent_Source");
			entity.HasIndex(e => e.CorrelationId, "IX_LogEvent_CorrelationId");
		});


        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
