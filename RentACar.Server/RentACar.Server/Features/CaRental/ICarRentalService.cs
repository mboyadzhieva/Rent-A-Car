namespace RentACar.Server.Features.CaRental
{
    using System.Collections.Generic;
    using System.Threading.Tasks;

    public interface ICarRentalService
    {
        Task<IEnumerable<CarRentalDetailsResponseModel>> Get();

        Task<CreatedCarRentalResponseModel> Rent(CreateCarRentalRequestModel model);

        //Task<CarRentalDetailsResponseModel> Get(int id);
    }
}
