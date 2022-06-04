namespace RentACar.Server.Features.CaRental
{
    using System;

    public class CreateCarRentalRequestModel
    {
        public int CarId { get; set; }

        public DateTime StartDate { get; set; }

        public DateTime EndDate { get; set; }
    }
}
