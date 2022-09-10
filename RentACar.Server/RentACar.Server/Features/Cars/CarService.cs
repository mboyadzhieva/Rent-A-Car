namespace RentACar.Server.Features.Cars
{
    using AutoMapper;
    using AutoMapper.QueryableExtensions;
    using Data;
    using Data.Models;
    using Microsoft.EntityFrameworkCore;
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Threading.Tasks;

    public class CarService : ICarService
    {
        private readonly IMapper mapper;
        private readonly RentACarDbContext dbContext;

        public CarService(IMapper mapper, RentACarDbContext dbContext)
        {
            this.mapper = mapper;
            this.dbContext = dbContext;
        }

        public async Task<IEnumerable<CarModel>> GetAll()
        {
            var configuration = new MapperConfiguration(cfg => cfg.CreateProjection<Car, CarModel>());

            var result = await this.dbContext
                .Cars
                .Where(c => c.IsDeleted == false)
                .ProjectTo<CarModel>(configuration)
                .ToListAsync();

            Console.WriteLine($"Tracked entities in CarService.GetAll(): {dbContext.ChangeTracker.Entries().Count()}");

            return result;
        }

        public async Task<CarModel> Get(int id)
        {
            var user = await this.dbContext.Cars.FindAsync(id);

            return mapper.Map<CarModel>(user);
        }

        public async Task<int> Create(CarModel model)
        {
            var car = mapper.Map<Car>(model);

            this.dbContext.Cars.Add(car);
            await this.dbContext.SaveChangesAsync();

            return car.Id;
        }

        public async Task<bool> Update(CarModel model)
        {
            var car = await this.dbContext.Cars.FindAsync(model.Id);

            if (car == null)
            {
                return false;
            }

            mapper.Map(model, car);
            await this.dbContext.SaveChangesAsync();

            return true;
        }

        public async Task<bool> Delete(int carId)
        {
            var car = new Car { Id = carId };

            try
            {
                this.dbContext.Remove(car);
                await this.dbContext.SaveChangesAsync();

                return true;
            }
            catch
            {
                return false;
            }
        }
    }
}
