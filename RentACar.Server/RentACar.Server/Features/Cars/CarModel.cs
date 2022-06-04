namespace RentACar.Server.Features.Cars
{
    public class CarModel
    {
        public int Id { get; set; }

        public string VehicleType { get; set; }

        public string Brand { get; set; }

        public string Model { get; set; }

        public int ConstructionYear { get; set; }

        public string FuelType { get; set; }

        public int NumberOfSeats { get; set; }

        public string PictureUrl { get; set; }

        public decimal PricePerDay { get; set; }

        public int Count { get; set; }
    }
}

