namespace RentACar.Server.Features.CaRental
{
    using Microsoft.AspNetCore.Authorization;
    using Microsoft.AspNetCore.Mvc;
    using System.Collections.Generic;
    using System.Threading.Tasks;

    [Authorize]
    public class CarRentalController : ApiController
    {
        private readonly ICarRentalService carRental;

        public CarRentalController(ICarRentalService carRental)
        {
            this.carRental = carRental;
        }

        [HttpGet]
        public async Task<IEnumerable<CarRentalDetailsResponseModel>> Get()
        {
            return await this.carRental.Get();
        }

        [HttpPost]
        public async Task<CreatedCarRentalResponseModel> Create(CreateCarRentalRequestModel model)
        {
            return await this.carRental.Rent(model);
        }
    }
}
