namespace RentACar.Server.Features.CaRental
{
    using System.Collections.Generic;
    using System.Threading.Tasks;

    public interface ICarRentalService
    {
        Task<IEnumerable<CarRentalDetailsResponseModel>> GetByUserId(string id);

        Task<CarRentalDetailsResponseModel> Rent(CreateCarRentalRequestModel model);

        Task<CarRentalDetailsResponseModel> Get(int id);
    }
}
