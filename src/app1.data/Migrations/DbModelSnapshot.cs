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
                .HasAnnotation("ProductVersion", "9.0.4")
                .HasAnnotation("Relational:MaxIdentifierLength", 128);

            SqlServerModelBuilderExtensions.UseIdentityColumns(modelBuilder);

            modelBuilder.Entity("Dyvenix.App1.Common.Entities.AccessClaim", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("uniqueidentifier");

                    b.Property<Guid>("AppUserId")
                        .HasColumnType("uniqueidentifier");

                    b.Property<string>("ClaimName")
                        .IsRequired()
                        .HasMaxLength(100)
                        .HasColumnType("nvarchar(100)");

                    b.Property<string>("ClaimValue")
                        .HasMaxLength(200)
                        .HasColumnType("nvarchar(200)");

                    b.Property<byte[]>("RowVersion")
                        .IsConcurrencyToken()
                        .ValueGeneratedOnAddOrUpdate()
                        .HasColumnType("rowversion");

                    b.HasKey("Id");

                    b.HasIndex(new[] { "AppUserId" }, "IX_AccessClaim_AppUserId");

                    b.HasIndex(new[] { "Id" }, "IX_AccessClaim_Id")
                        .IsUnique();

                    b.ToTable("AccessClaim", (string)null);
                });

            modelBuilder.Entity("Dyvenix.App1.Common.Entities.AppUser", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("uniqueidentifier");

                    b.Property<string>("CompanyId")
                        .HasMaxLength(10)
                        .HasColumnType("nvarchar(10)");

                    b.Property<string>("Email")
                        .IsRequired()
                        .HasMaxLength(200)
                        .HasColumnType("nvarchar(200)");

                    b.Property<string>("ExtId")
                        .IsRequired()
                        .HasMaxLength(68)
                        .HasColumnType("nvarchar(68)");

                    b.Property<string>("FirstName")
                        .IsRequired()
                        .HasMaxLength(100)
                        .HasColumnType("nvarchar(100)");

                    b.Property<int?>("GroupCode")
                        .HasColumnType("int");

                    b.Property<bool>("IsEnabled")
                        .HasColumnType("bit");

                    b.Property<string>("LastName")
                        .IsRequired()
                        .HasMaxLength(100)
                        .HasColumnType("nvarchar(100)");

                    b.Property<byte[]>("RowVersion")
                        .IsConcurrencyToken()
                        .ValueGeneratedOnAddOrUpdate()
                        .HasColumnType("rowversion");

                    b.Property<int>("UserType")
                        .HasColumnType("int");

                    b.HasKey("Id");

                    b.HasIndex(new[] { "CompanyId" }, "IX_AppUser_CompanyId");

                    b.HasIndex(new[] { "Email" }, "IX_AppUser_Email");

                    b.HasIndex(new[] { "ExtId" }, "IX_AppUser_ExtId");

                    b.HasIndex(new[] { "Id" }, "IX_AppUser_Id")
                        .IsUnique();

                    b.HasIndex(new[] { "LastName" }, "IX_AppUser_LastName");

                    b.ToTable("AppUser", (string)null);
                });

            modelBuilder.Entity("Dyvenix.App1.Common.Entities.AccessClaim", b =>
                {
                    b.HasOne("Dyvenix.App1.Common.Entities.AppUser", null)
                        .WithMany("Claims")
                        .HasForeignKey("AppUserId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("Dyvenix.App1.Common.Entities.AppUser", b =>
                {
                    b.Navigation("Claims");
                });
#pragma warning restore 612, 618
        }
    }
}
