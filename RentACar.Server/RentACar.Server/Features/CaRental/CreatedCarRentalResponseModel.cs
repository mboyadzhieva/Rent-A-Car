namespace RentACar.Server.Features.CaRental
{
    public class CreatedCarRentalResponseModel
    {
        public string Brand { get; set; }

        public string Model { get; set; }

        public int ConstructionYear { get; set; }

        public int Days { get; set; }

        public decimal TotalPrice { get; set; }
    }
}
