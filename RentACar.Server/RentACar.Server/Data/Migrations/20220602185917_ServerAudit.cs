using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace RentACar.Server.Data.Migrations
{
    public partial class ServerAudit : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "CreatedBy",
                table: "Cars",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<DateTime>(
                name: "CreatedOn",
                table: "Cars",
                type: "datetime2",
                nullable: false,
                defaultValue: new DateTime(2022, 1, 1, 0, 0, 0, 0, DateTimeKind.Utc));

            migrationBuilder.AddColumn<string>(
                name: "DeletedBy",
                table: "Cars",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<DateTime>(
                name: "DeletedOn",
                table: "Cars",
                type: "datetime2",
                nullable: true);

            migrationBuilder.AddColumn<bool>(
                name: "IsDeleted",
                table: "Cars",
                type: "bit",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<string>(
                name: "ModifiedBy",
                table: "Cars",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<DateTime>(
                name: "ModifiedOn",
                table: "Cars",
                type: "datetime2",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "CreatedBy",
                table: "AspNetUsers",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<DateTime>(
                name: "CreatedOn",
                table: "AspNetUsers",
                type: "datetime2",
                nullable: false,
                defaultValue: new DateTime(2022, 1, 1, 0, 0, 0, 0, DateTimeKind.Utc));

            migrationBuilder.AddColumn<string>(
                name: "DeletedBy",
                table: "AspNetUsers",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<DateTime>(
                name: "DeletedOn",
                table: "AspNetUsers",
                type: "datetime2",
                nullable: true);

            migrationBuilder.AddColumn<bool>(
                name: "IsDeleted",
                table: "AspNetUsers",
                type: "bit",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<string>(
                name: "ModifiedBy",
                table: "AspNetUsers",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<DateTime>(
                name: "ModifiedOn",
                table: "AspNetUsers",
                type: "datetime2",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "CreatedBy",
                table: "Cars");

            migrationBuilder.DropColumn(
                name: "CreatedOn",
                table: "Cars");

            migrationBuilder.DropColumn(
                name: "DeletedBy",
                table: "Cars");

            migrationBuilder.DropColumn(
                name: "DeletedOn",
                table: "Cars");

            migrationBuilder.DropColumn(
                name: "IsDeleted",
                table: "Cars");

            migrationBuilder.DropColumn(
                name: "ModifiedBy",
                table: "Cars");

            migrationBuilder.DropColumn(
                name: "ModifiedOn",
                table: "Cars");

            migrationBuilder.DropColumn(
                name: "CreatedBy",
                table: "AspNetUsers");

            migrationBuilder.DropColumn(
                name: "CreatedOn",
                table: "AspNetUsers");

            migrationBuilder.DropColumn(
                name: "DeletedBy",
                table: "AspNetUsers");

            migrationBuilder.DropColumn(
                name: "DeletedOn",
                table: "AspNetUsers");

            migrationBuilder.DropColumn(
                name: "IsDeleted",
                table: "AspNetUsers");

            migrationBuilder.DropColumn(
                name: "ModifiedBy",
                table: "AspNetUsers");

            migrationBuilder.DropColumn(
                name: "ModifiedOn",
                table: "AspNetUsers");
        }
    }
}
