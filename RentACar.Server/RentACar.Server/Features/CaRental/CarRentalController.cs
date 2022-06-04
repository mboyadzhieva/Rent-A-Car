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
        [Route("{id}")]
        public async Task<IEnumerable<CarRentalDetailsResponseModel>> GetByUserId(string id)
        {
            return await this.carRental.GetByUserId(id);
        }

        [HttpPost]
        public async Task<CarRentalDetailsResponseModel> Create(CreateCarRentalRequestModel model)
        {
            return await this.carRental.Rent(model);
        }
    }
}
