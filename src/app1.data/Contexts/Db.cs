//------------------------------------------------------------------------------
// This file was auto-generated. Any changes made to it will be lost.
//------------------------------------------------------------------------------
using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using Dyvenix.App1.Data.Entities;
using System;
using System.Collections.Generic;


namespace Dyvenix.App1.Data;

public partial class Db : DbContext
{
    public Db(DbContextOptions<Db> options)
        : base(options)
    {
    }

    # region Properties

	// Properties
	public DbSet<AppUser> AppUser { get; set; }
	public DbSet<AccessClaim> AccessClaim { get; set; }
	public DbSet<LogEvent> LogEvent { get; set; }



    # endregion

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
		modelBuilder.Entity<AppUser>(entity =>
		{
			entity.ToTable("AppUser");

			entity.Property(e => e.Id).ValueGeneratedNever().IsRequired();
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
			entity.Property(e => e.TinyInteger);
		});

		modelBuilder.Entity<AccessClaim>(entity =>
		{
			entity.ToTable("AccessClaim");

			entity.Property(e => e.Id).ValueGeneratedNever().IsRequired();
			entity.Property(e => e.AppUserId).IsRequired();
			entity.Property(e => e.ClaimName).IsRequired().HasMaxLength(50);
			entity.Property(e => e.ClaimValue).IsRequired().HasMaxLength(50);
		});

		modelBuilder.Entity<LogEvent>(entity =>
		{
			entity.ToTable("LogEvents");

			entity.Property(e => e.Id).ValueGeneratedNever().IsRequired();
			entity.Property(e => e.Message).HasMaxLength(0);
			entity.Property(e => e.Timestamp).HasColumnType("datetime");
			entity.Property(e => e.Exception).HasMaxLength(0);
			entity.Property(e => e.LogLevel);
			entity.Property(e => e.Application).HasMaxLength(200);
			entity.Property(e => e.Source).HasMaxLength(200);
			entity.Property(e => e.CorrelationId).HasMaxLength(50);
		});


        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
