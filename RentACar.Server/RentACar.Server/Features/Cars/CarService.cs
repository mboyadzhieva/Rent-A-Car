namespace RentACar.Server.Features.Cars
{
    using AutoMapper;
    using Data;
    using Data.Models;
    using Microsoft.EntityFrameworkCore;
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
            return await this.dbContext
                .Cars
                .Where(c => c.IsDeleted == false)
                .Select(c => mapper.Map<CarModel>(c))
                .ToListAsync();
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

            if (car != null)
            {
                mapper.Map(model, car);
                await this.dbContext.SaveChangesAsync();

                return true;
            }

            return false;
        }

        public async Task<bool> Delete(int carId)
        {
            var car = await this.dbContext
                .Cars
                .Where(x => x.Id == carId)
                .FirstOrDefaultAsync();

            if (car != null)
            {
                this.dbContext.Remove(car);
                await this.dbContext.SaveChangesAsync();

                return true;
            }
            else
            {
                return false;
            }
        }
    }
}
