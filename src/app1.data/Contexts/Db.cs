//------------------------------------------------------------------------------
// This file was auto-generated. Any changes made to it will be lost.
//------------------------------------------------------------------------------
using System;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using Dyvenix.App1.Data.Entities;


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

			entity.HasKey(e => e.Id);

			entity.Property(e => e.ClaimName).IsRequired(true).HasMaxLength(50);
			entity.Property(e => e.ClaimValue).IsRequired(true).HasMaxLength(50);
			entity.Property(e => e.AppUserId).IsRequired(true);

			// Indexes
			entity.HasIndex(e => e.Id, "IX_AccessClaim_Id").IsUnique();
			entity.HasIndex(e => e.ClaimName, "IX_AccessClaim_ClaimName");
			entity.HasIndex(e => e.AppUserId, "IX_AccessClaim_AppUserId");
		});

		modelBuilder.Entity<AppUser>(entity =>
		{
			entity.ToTable("AppUser");

			entity.HasKey(e => e.Id);

			entity.Property(e => e.ExtId).IsRequired(true).HasMaxLength(100);
			entity.Property(e => e.FirstName).IsRequired(true).HasMaxLength(100);
			entity.Property(e => e.LastName).IsRequired(true).HasMaxLength(100);
			entity.Property(e => e.Email).IsRequired(true).HasMaxLength(200);
			entity.Property(e => e.Birthdate).IsRequired(false).HasColumnType("datetime");
			entity.Property(e => e.Age).IsRequired(false);
			entity.Property(e => e.IsEnabled).IsRequired(false).HasColumnType("datetime");

			// Indexes
			entity.HasIndex(e => e.Id, "IX_AppUser_Id").IsUnique();
			entity.HasIndex(e => e.ExtId, "IX_AppUser_ExtId");
			entity.HasIndex(e => e.LastName, "IX_AppUser_LastName");
			entity.HasIndex(e => e.Email, "IX_AppUser_Email");
		});

		modelBuilder.Entity<LogEvent>(entity =>
		{
			entity.ToTable("LogEvents", "Logs");

			entity.HasKey(e => e.Id);

			entity.Property(e => e.Message).IsRequired(false);
			entity.Property(e => e.Timestamp).IsRequired(true).HasColumnType("datetime");
			entity.Property(e => e.Exception).IsRequired(true);
			entity.Property(e => e.LogLevel).IsRequired(true);
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
