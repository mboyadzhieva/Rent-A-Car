using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace RentACar.Server.Features.CaRental
{
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

        //[HttpGet]
        //[Route("{id}")]
        //public async Task<CarRentalDetailsResponseModel> Get(int id)
        //{
        //    return await this.carRental.Get(id);
        //}


    }
}
