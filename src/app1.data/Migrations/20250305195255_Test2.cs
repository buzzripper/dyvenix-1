using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Dyvenix.App1.Data.Migrations
{
    /// <inheritdoc />
    public partial class Test2 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropIndex(
                name: "IX_LogEvent_EventId",
                table: "LogEvents");

            migrationBuilder.DropColumn(
                name: "EventId",
                table: "LogEvents");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<Guid>(
                name: "EventId",
                table: "LogEvents",
                type: "uniqueidentifier",
                nullable: false,
                defaultValue: new Guid("00000000-0000-0000-0000-000000000000"));

            migrationBuilder.CreateIndex(
                name: "IX_LogEvent_EventId",
                table: "LogEvents",
                column: "EventId",
                unique: true);
        }
    }
}
