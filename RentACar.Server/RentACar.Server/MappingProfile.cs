namespace RentACar.Server
{
    using AutoMapper;
    using Data.Models;
    using Features.CaRental;
    using Features.Cars;
    using Features.Users;
    using Models.Identity;

    public class MappingProfile : Profile
    {
        public MappingProfile()
        {
            CreateMap<Car, CarModel>();
            CreateMap<CarModel, Car>();

            CreateMap<User, UserModel>();
            CreateMap<UserModel, User>();

            CreateMap<User, RegisterRequestModel>();
            CreateMap<RegisterRequestModel, User>();

            CreateMap<CarRental, CreateCarRentalRequestModel>();
            CreateMap<CreateCarRentalRequestModel, CarRental>();

            CreateMap<CarRental, CreatedCarRentalResponseModel>();
            CreateMap<CreatedCarRentalResponseModel, CarRental>();

            CreateMap<CarRental, CarRentalDetailsResponseModel>();
            CreateMap<CarRentalDetailsResponseModel, CarRental>();
        }
    }
}
