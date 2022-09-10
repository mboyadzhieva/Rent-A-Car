namespace RentACar.Server.Features.CaRental
{
    using System;

    public class CarRentalDetailsResponseModel
    {
        public string Brand { get; set; }

        public string Model { get; set; }

        public int ConstructionYear { get; set; }

        public int Days { get; set; }

        public decimal TotalPrice { get; set; }

        public DateTime StartDate { get; set; }

        public DateTime EndDate { get; set; }
    }
}
