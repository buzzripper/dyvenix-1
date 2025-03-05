using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Dyvenix.App1.Data.Migrations
{
    /// <inheritdoc />
    public partial class Test1 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "AppUser",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    ExtId = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: false),
                    FirstName = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: false),
                    LastName = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: false),
                    Email = table.Column<string>(type: "nvarchar(200)", maxLength: 200, nullable: false),
                    Birthdate = table.Column<DateTime>(type: "datetime", nullable: false),
                    Age = table.Column<int>(type: "int", nullable: false),
                    Population = table.Column<long>(type: "bigint", nullable: false),
                    IsEnabled = table.Column<bool>(type: "bit", nullable: false),
                    Temp = table.Column<double>(type: "float", nullable: false),
                    VarBin = table.Column<byte[]>(type: "varbinary(max)", nullable: false),
                    TinyInteger = table.Column<byte>(type: "tinyint", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AppUser", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "LogEvents",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    Message = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Timestamp = table.Column<DateTime>(type: "datetime", nullable: false),
                    Exception = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    LogLevel = table.Column<int>(type: "int", nullable: false),
                    Application = table.Column<string>(type: "nvarchar(200)", maxLength: 200, nullable: true),
                    Source = table.Column<string>(type: "nvarchar(200)", maxLength: 200, nullable: true),
                    CorrelationId = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: true),
                    EventId = table.Column<Guid>(type: "uniqueidentifier", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_LogEvents", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "AccessClaim",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    AppUserId = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    ClaimName = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: false),
                    ClaimValue = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: false)
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
                name: "IX_AccessClaim_Id",
                table: "AccessClaim",
                column: "Id",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_AppUser_Email",
                table: "AppUser",
                column: "Email");

            migrationBuilder.CreateIndex(
                name: "IX_AppUser_ExtId",
                table: "AppUser",
                column: "ExtId");

            migrationBuilder.CreateIndex(
                name: "IX_AppUser_FirstName",
                table: "AppUser",
                column: "FirstName");

            migrationBuilder.CreateIndex(
                name: "IX_AppUser_Id",
                table: "AppUser",
                column: "Id",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_AppUser_LastName",
                table: "AppUser",
                column: "LastName");

            migrationBuilder.CreateIndex(
                name: "IX_LogEvent_Application",
                table: "LogEvents",
                column: "Application");

            migrationBuilder.CreateIndex(
                name: "IX_LogEvent_EventId",
                table: "LogEvents",
                column: "EventId",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_LogEvent_Id",
                table: "LogEvents",
                column: "Id",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_LogEvent_Timestamp",
                table: "LogEvents",
                column: "Timestamp");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "AccessClaim");

            migrationBuilder.DropTable(
                name: "LogEvents");

            migrationBuilder.DropTable(
                name: "AppUser");
        }
    }
}
