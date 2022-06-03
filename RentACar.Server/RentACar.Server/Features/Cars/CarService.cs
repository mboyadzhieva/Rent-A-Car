using AutoMapper;
using RentACar.Server.Data;
using RentACar.Server.Data.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace RentACar.Server.Features.Cars
{
    public class CarService : ICarService
    {
        private readonly IMapper mapper;
        private readonly RentACarDbContext dbContext;

        public CarService(IMapper mapper, RentACarDbContext dbContext)
        {
            this.mapper = mapper;
            this.dbContext = dbContext;
        }

        public async Task<int> CreateCar(CarRequestModel model)
        {
            var car = mapper.Map<Car>(model);

            this.dbContext.Cars.Add(car);
            await this.dbContext.SaveChangesAsync();

            return car.Id;
        }

        public bool DeleteCar(int carId)
        {
            throw new System.NotImplementedException();
        }

        public List<CarRequestModel> GetAllCars()
        {
            throw new System.NotImplementedException();
        }

        public bool UpdateCar(CarRequestModel model)
        {
            throw new System.NotImplementedException();
        }
    }
}
