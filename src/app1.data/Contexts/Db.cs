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

			entity.Property(e => e.ClaimName).IsRequired().HasMaxLength(50);
			entity.Property(e => e.ClaimValue).IsRequired().HasMaxLength(50);
			entity.Property(e => e.AppUserId).IsRequired();
			entity.Property(e => e.ClaimName).IsRequired().HasMaxLength(50);
			entity.Property(e => e.ClaimValue).IsRequired().HasMaxLength(50);
			entity.Property(e => e.AppUserId).IsRequired();

			// Indexes
			entity.HasIndex(e => e.Id, "IX_AccessClaim_Id").IsUnique();
		});

		modelBuilder.Entity<AppUser>(entity =>
		{
			entity.ToTable("AppUser");

			entity.HasKey(e => e.Id);

			entity.Property(e => e.ExtId).IsRequired().HasMaxLength(100);
			entity.Property(e => e.FirstName).IsRequired().HasMaxLength(100);
			entity.Property(e => e.LastName).IsRequired().HasMaxLength(100);
			entity.Property(e => e.Email).IsRequired().HasMaxLength(200);
			entity.Property(e => e.Birthdate).HasColumnType("datetime");
			entity.Property(e => e.Age);
			entity.Property(e => e.Population);
			entity.Property(e => e.IsEnabled).IsRequired();
			entity.Property(e => e.Temp).IsRequired();
			entity.Property(e => e.VarBin).IsRequired();
			entity.Property(e => e.Fubar);
			entity.Property(e => e.ExtId).IsRequired().HasMaxLength(100);
			entity.Property(e => e.FirstName).IsRequired().HasMaxLength(100);
			entity.Property(e => e.LastName).IsRequired().HasMaxLength(100);
			entity.Property(e => e.Email).IsRequired().HasMaxLength(200);
			entity.Property(e => e.Birthdate).HasColumnType("datetime");
			entity.Property(e => e.Age);
			entity.Property(e => e.Population);
			entity.Property(e => e.IsEnabled).IsRequired();
			entity.Property(e => e.Temp).IsRequired();
			entity.Property(e => e.VarBin).IsRequired();
			entity.Property(e => e.Fubar);

			// Indexes
			entity.HasIndex(e => e.Id, "IX_AppUser_Id").IsUnique();
			entity.HasIndex(e => e.ExtId, "IX_AppUser_ExtId");
			entity.HasIndex(e => e.FirstName, "IX_AppUser_FirstName");
			entity.HasIndex(e => e.LastName, "IX_AppUser_LastName");
			entity.HasIndex(e => e.Email, "IX_AppUser_Email");
		});

		modelBuilder.Entity<LogEvent>(entity =>
		{
			entity.ToTable("LogEvents", "Logs");

			entity.HasKey(e => e.Id);

			entity.Property(e => e.Message);
			entity.Property(e => e.Timestamp).HasColumnType("datetime");
			entity.Property(e => e.Exception);
			entity.Property(e => e.LogLevel);
			entity.Property(e => e.Application).HasMaxLength(200);
			entity.Property(e => e.Source).HasMaxLength(200);
			entity.Property(e => e.CorrelationId).HasMaxLength(50);
			entity.Property(e => e.Message);
			entity.Property(e => e.Timestamp).HasColumnType("datetime");
			entity.Property(e => e.Exception);
			entity.Property(e => e.LogLevel);
			entity.Property(e => e.Application).HasMaxLength(200);
			entity.Property(e => e.Source).HasMaxLength(200);
			entity.Property(e => e.CorrelationId).HasMaxLength(50);

			// Indexes
			entity.HasIndex(e => e.Id, "IX_LogEvent_Id").IsUnique();
			entity.HasIndex(e => e.Timestamp, "IX_LogEvent_Timestamp");
			entity.HasIndex(e => e.Application, "IX_LogEvent_Application");
		});


        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
