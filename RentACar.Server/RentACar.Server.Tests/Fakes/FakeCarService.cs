namespace RentACar.Server.Tests.Fakes
{
    using Features.Cars;
    using System.Collections.Generic;
    using System.Threading.Tasks;

    public class FakeCarService : ICarService
    {
        public Task<int> Create(CarModel model)
        {
            throw new NotImplementedException();
        }

        public Task<bool> Delete(int carId)
        {
            throw new NotImplementedException();
        }

        public Task<CarModel> Get(int id)
        {
            throw new NotImplementedException();
        }

        public async Task<IEnumerable<CarModel>> GetAll()
            => await Task.FromResult(new List<CarModel>
            {
                new CarModel 
                { 
                    Id = 1, 
                    Brand = "Daewoo", 
                    Model = "Lanos", 
                    ConstructionYear = 1999, 
                    Count = 1, 
                    FuelType = "Petrol", 
                    NumberOfSeats = 5, 
                    VehicleType = "Economy", 
                    PricePerDay = 23.4m, 
                    PictureUrl = ""
                },
                new CarModel 
                { 
                    Id = 2, 
                    Brand = "Renault", 
                    Model = "Laguna", 
                    ConstructionYear = 1994, 
                    Count = 1, FuelType = "Petrol", 
                    NumberOfSeats = 5, 
                    VehicleType = "Estate", 
                    PricePerDay = 52.6m, 
                    PictureUrl = ""
                },
                new CarModel 
                { 
                    Id = 3, 
                    Brand = "Volvo", 
                    Model = "440", 
                    ConstructionYear = 1989, 
                    Count = 1, 
                    FuelType = "Petrol", 
                    NumberOfSeats = 5, 
                    VehicleType = "Economy", 
                    PricePerDay = 20.9m, 
                    PictureUrl = ""},
            });

        public Task<bool> Update(CarModel model)
        {
            throw new NotImplementedException();
        }
    }
}
