﻿// <auto-generated />
using System;
using Dyvenix.App1.Data;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

#nullable disable

namespace Dyvenix.App1.Data.Migrations
{
    [DbContext(typeof(Db))]
    partial class DbModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "9.0.2")
                .HasAnnotation("Relational:MaxIdentifierLength", 128);

            SqlServerModelBuilderExtensions.UseIdentityColumns(modelBuilder);

            modelBuilder.Entity("Dyvenix.App1.Data.Entities.AccessClaim", b =>
                {
                    b.Property<Guid>("Id")
                        .HasColumnType("uniqueidentifier");

                    b.Property<Guid>("AppUserId")
                        .HasColumnType("uniqueidentifier");

                    b.Property<string>("ClaimName")
                        .IsRequired()
                        .HasMaxLength(50)
                        .HasColumnType("nvarchar(50)");

                    b.Property<string>("ClaimValue")
                        .IsRequired()
                        .HasMaxLength(50)
                        .HasColumnType("nvarchar(50)");

                    b.HasKey("Id");

                    b.HasIndex(new[] { "AppUserId" }, "IX_AccessClaim_AppUserId");

                    b.HasIndex(new[] { "Id" }, "IX_AccessClaim_Id")
                        .IsUnique();

                    b.ToTable("AccessClaim", (string)null);
                });

            modelBuilder.Entity("Dyvenix.App1.Data.Entities.AppUser", b =>
                {
                    b.Property<Guid>("Id")
                        .HasColumnType("uniqueidentifier");

                    b.Property<int>("Age")
                        .HasColumnType("int");

                    b.Property<DateTime>("Birthdate")
                        .HasColumnType("datetime");

                    b.Property<string>("Email")
                        .IsRequired()
                        .HasMaxLength(200)
                        .HasColumnType("nvarchar(200)");

                    b.Property<string>("ExtId")
                        .IsRequired()
                        .HasMaxLength(100)
                        .HasColumnType("nvarchar(100)");

                    b.Property<string>("FirstName")
                        .IsRequired()
                        .HasMaxLength(100)
                        .HasColumnType("nvarchar(100)");

                    b.Property<bool>("IsEnabled")
                        .HasColumnType("bit");

                    b.Property<string>("LastName")
                        .IsRequired()
                        .HasMaxLength(100)
                        .HasColumnType("nvarchar(100)");

                    b.Property<long>("Population")
                        .HasColumnType("bigint");

                    b.Property<double>("Temp")
                        .HasColumnType("float");

                    b.Property<byte>("TinyInteger")
                        .HasColumnType("tinyint");

                    b.Property<byte[]>("VarBin")
                        .IsRequired()
                        .HasColumnType("varbinary(max)");

                    b.HasKey("Id");

                    b.HasIndex(new[] { "Email" }, "IX_AppUser_Email");

                    b.HasIndex(new[] { "ExtId" }, "IX_AppUser_ExtId");

                    b.HasIndex(new[] { "FirstName" }, "IX_AppUser_FirstName");

                    b.HasIndex(new[] { "Id" }, "IX_AppUser_Id")
                        .IsUnique();

                    b.HasIndex(new[] { "LastName" }, "IX_AppUser_LastName");

                    b.ToTable("AppUser", (string)null);
                });

            modelBuilder.Entity("Dyvenix.App1.Data.Entities.LogEvent", b =>
                {
                    b.Property<Guid>("Id")
                        .HasColumnType("uniqueidentifier");

                    b.Property<string>("Application")
                        .HasMaxLength(200)
                        .HasColumnType("nvarchar(200)");

                    b.Property<string>("CorrelationId")
                        .HasMaxLength(50)
                        .HasColumnType("nvarchar(50)");

                    b.Property<string>("Exception")
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("LogLevel")
                        .HasColumnType("int");

                    b.Property<string>("Message")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Source")
                        .HasMaxLength(200)
                        .HasColumnType("nvarchar(200)");

                    b.Property<DateTime>("Timestamp")
                        .HasColumnType("datetime");

                    b.HasKey("Id");

                    b.HasIndex(new[] { "Application" }, "IX_LogEvent_Application");

                    b.HasIndex(new[] { "Id" }, "IX_LogEvent_Id")
                        .IsUnique();

                    b.HasIndex(new[] { "Timestamp" }, "IX_LogEvent_Timestamp");

                    b.ToTable("LogEvents", (string)null);
                });

            modelBuilder.Entity("Dyvenix.App1.Data.Entities.AccessClaim", b =>
                {
                    b.HasOne("Dyvenix.App1.Data.Entities.AppUser", null)
                        .WithMany("AccessClaims")
                        .HasForeignKey("AppUserId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("Dyvenix.App1.Data.Entities.AppUser", b =>
                {
                    b.Navigation("AccessClaims");
                });
#pragma warning restore 612, 618
        }
    }
}
