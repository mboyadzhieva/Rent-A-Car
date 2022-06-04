using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace RentACar.Server.Data.Migrations
{
    public partial class AddAuditInfoForCarRental : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "CreatedBy",
                table: "CarRentals",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<DateTime>(
                name: "CreatedOn",
                table: "CarRentals",
                type: "datetime2",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));

            migrationBuilder.AddColumn<string>(
                name: "DeletedBy",
                table: "CarRentals",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<DateTime>(
                name: "DeletedOn",
                table: "CarRentals",
                type: "datetime2",
                nullable: true);

            migrationBuilder.AddColumn<bool>(
                name: "IsDeleted",
                table: "CarRentals",
                type: "bit",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<string>(
                name: "ModifiedBy",
                table: "CarRentals",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<DateTime>(
                name: "ModifiedOn",
                table: "CarRentals",
                type: "datetime2",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "CreatedBy",
                table: "CarRentals");

            migrationBuilder.DropColumn(
                name: "CreatedOn",
                table: "CarRentals");

            migrationBuilder.DropColumn(
                name: "DeletedBy",
                table: "CarRentals");

            migrationBuilder.DropColumn(
                name: "DeletedOn",
                table: "CarRentals");

            migrationBuilder.DropColumn(
                name: "IsDeleted",
                table: "CarRentals");

            migrationBuilder.DropColumn(
                name: "ModifiedBy",
                table: "CarRentals");

            migrationBuilder.DropColumn(
                name: "ModifiedOn",
                table: "CarRentals");
        }
    }
}
