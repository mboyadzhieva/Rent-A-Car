namespace RentACar.Server.Features.Cars
{
    using System.Collections.Generic;
    using System.Threading.Tasks;

    public interface ICarService
    {
        List<CarRequestModel> GetAllCars();

        Task<int> CreateCar(CarRequestModel model);

        bool UpdateCar(CarRequestModel model);

        bool DeleteCar(int carId);
    }
}
