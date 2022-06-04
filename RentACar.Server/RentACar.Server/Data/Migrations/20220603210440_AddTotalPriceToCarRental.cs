using Microsoft.EntityFrameworkCore.Migrations;

namespace RentACar.Server.Data.Migrations
{
    public partial class AddTotalPriceToCarRental : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<double>(
                name: "TotalPrice",
                table: "CarRentals",
                type: "decimal(16,2)",
                nullable: false,
                defaultValue: 0.0);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "TotalPrice",
                table: "CarRentals");
        }
    }
}
