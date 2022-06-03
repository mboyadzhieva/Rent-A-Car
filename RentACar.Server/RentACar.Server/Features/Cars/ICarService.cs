namespace RentACar.Server.Features.Cars
{
    using System.Collections.Generic;
    using System.Threading.Tasks;

    public interface ICarService
    {
        Task<IEnumerable<CarModel>> GetAll();

        Task<CarModel> Get(int id);

        Task<int> Create(CarModel model);

        Task<bool> Update(CarModel model);

        Task<bool> Delete(int carId);
    }
}
