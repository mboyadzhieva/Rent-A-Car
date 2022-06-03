namespace RentACar.Server.Features.Cars
{
    public class CarRequestModel
    {
        public string VehicleType { get; set; }

        public string Brand { get; set; }

        public string Model { get; set; }

        public int ConstructionYear { get; set; }

        public string FuelType { get; set; }

        public int NumberOfSeats { get; set; }

        public string PictureUrl { get; set; }

        public double PricePerDay { get; set; }

        public int Count { get; set; }
    }
}

