namespace RentACar.Server.Data.Models
{
    using RentACar.Server.Data.Models.Base;
    using System.ComponentModel.DataAnnotations;

    public class Car : Entity
    {
        public int Id { get; set; }

        [Required]
        public VehicleType VehicleType { get; set; }

        [Required]
        public string Brand { get; set; }

        [Required]
        public string Model { get; set; }

        [Required]
        public int ConstructionYear { get; set; }

        [Required]
        public FuelType FuelType { get; set; }

        [Required]
        public int NumberOfSeats { get; set; }

        [Required]
        public string PictureUrl { get; set; }

        [Required]
        public double PricePerDay { get; set; }

        [Required]
        public int Count { get; set; }
    }
}
