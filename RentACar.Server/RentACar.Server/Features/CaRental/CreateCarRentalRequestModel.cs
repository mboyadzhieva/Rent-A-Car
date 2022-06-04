using RentACar.Server.Data.Models;
using System;

namespace RentACar.Server.Features.CaRental
{
    public class CreateCarRentalRequestModel
    {
        public int CarId { get; set; }

        public DateTime StartDate { get; set; }

        public DateTime EndDate { get; set; }
    }
}
