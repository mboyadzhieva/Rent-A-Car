using System;

namespace RentACar.Server.Features.CaRental
{
    public class CarRentalDetailsResponseModel
    {
        public string UserId { get; set; }

        public int CarId { get; set; }

        public DateTime StartDate { get; set; }

        public DateTime EndDate { get; set; }

        public int Days { get; set; }

        public decimal TotalPrice { get; set; }
    }
}
