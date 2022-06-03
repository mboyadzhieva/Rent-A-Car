using Microsoft.EntityFrameworkCore.Migrations;

namespace RentACar.Server.Data.Migrations
{
    public partial class CarsTable : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Cars",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    VehicleType = table.Column<int>(type: "int", nullable: false),
                    Brand = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Model = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    ConstructionYear = table.Column<int>(type: "int", nullable: false),
                    FuelType = table.Column<int>(type: "int", nullable: false),
                    NumberOfSeats = table.Column<int>(type: "int", nullable: false),
                    PictureUrl = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    PricePerDay = table.Column<double>(type: "float", nullable: false),
                    Count = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Cars", x => x.Id);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Cars");
        }
    }
}
