using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace RentACar.Server.Features.Cars
{
    [Authorize]
    public class CarsController : ApiController
    {
        private readonly ICarService cars;
        /*
         * GetAll GetByBrand GetByModel GetByPricePerDay GetByNumOfSeats GetByFuelType
         */

        public CarsController(ICarService cars)
        {
            this.cars = cars;
        }

        [HttpGet]
        public async Task<IEnumerable<CarModel>> GetAll()
        {
            return await cars.GetAll();
        }

        [HttpGet]
        [Route("{id}")]
        public async Task<CarModel> Get(int id)
        {
            return await this.cars.Get(id);
        }

        [HttpPost]
        public async Task<ActionResult<int>> Create(CarModel model)
        {
            var id = await this.cars.Create(model);

            return Created(nameof(this.Create), id);
        }

        [HttpPut]
        public async Task<ActionResult> Update(CarModel model)
        {
            var updated = await this.cars.Update(model);

            if (!updated)
            {
                return BadRequest();
            }

            return Ok();
        }

        [HttpDelete]
        [Route("{id}")]
        public async Task<ActionResult> Delete(int id)
        {
            var deleted = await this.cars.Delete(id);

            if (!deleted)
            {
                return BadRequest();
            }

            return Ok();
        }
    }
}
