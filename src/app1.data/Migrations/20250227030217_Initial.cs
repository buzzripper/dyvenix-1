using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Dyvenix.App1.Data.Migrations
{
    /// <inheritdoc />
    public partial class Initial : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.EnsureSchema(
                name: "Logs");

            migrationBuilder.CreateTable(
                name: "AppUser",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uniqueidentifier", maxLength: -1, nullable: false),
                    IdentityId = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: false),
                    FirstName = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: false),
                    LastName = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: false),
                    Email = table.Column<string>(type: "nvarchar(200)", maxLength: 200, nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AppUser", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "LogEvents",
                schema: "Logs",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", maxLength: -1, nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    TimeStamp = table.Column<DateTime>(type: "datetime2", maxLength: -1, nullable: false),
                    LogLevel = table.Column<int>(type: "int", maxLength: -1, nullable: false),
                    Application = table.Column<string>(type: "nvarchar(200)", maxLength: 200, nullable: true),
                    Source = table.Column<string>(type: "nvarchar(200)", maxLength: 200, nullable: true),
                    Message = table.Column<string>(type: "nvarchar(max)", maxLength: -1, nullable: true),
                    CorrelationId = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: true),
                    Exception = table.Column<string>(type: "nvarchar(max)", maxLength: -1, nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_LogEvents", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "AccessClaim",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", maxLength: -1, nullable: false),
                    ClaimName = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: false),
                    ClaimValue = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: false),
                    AppUserId = table.Column<Guid>(type: "uniqueidentifier", maxLength: -1, nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AccessClaim", x => x.Id);
                    table.ForeignKey(
                        name: "FK_AccessClaim_AppUser_AppUserId",
                        column: x => x.AppUserId,
                        principalTable: "AppUser",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_AccessClaim_AppUserId",
                table: "AccessClaim",
                column: "AppUserId");

            migrationBuilder.CreateIndex(
                name: "IX_AppUser_Email",
                table: "AppUser",
                column: "Email");

            migrationBuilder.CreateIndex(
                name: "IX_AppUser_IdentityId",
                table: "AppUser",
                column: "IdentityId");

            migrationBuilder.CreateIndex(
                name: "IX_AppUser_LastName",
                table: "AppUser",
                column: "LastName");

            migrationBuilder.CreateIndex(
                name: "IX_LogEvents_CorrelationId",
                schema: "Logs",
                table: "LogEvents",
                column: "CorrelationId");

            migrationBuilder.CreateIndex(
                name: "IX_LogEvents_Source",
                schema: "Logs",
                table: "LogEvents",
                column: "Source");

            migrationBuilder.CreateIndex(
                name: "IX_LogEvents_TimeStamp",
                schema: "Logs",
                table: "LogEvents",
                column: "TimeStamp");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "AccessClaim");

            migrationBuilder.DropTable(
                name: "LogEvents",
                schema: "Logs");

            migrationBuilder.DropTable(
                name: "AppUser");
        }
    }
}
