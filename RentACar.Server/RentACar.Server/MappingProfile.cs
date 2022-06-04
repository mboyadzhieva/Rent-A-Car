namespace RentACar.Server
{
    using AutoMapper;
    using Data.Models;
    using Features.Cars;
    using Features.Users;
    using Models.Identity;
    using RentACar.Server.Features.CaRental;

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

            CreateMap<CarRental, CarRentalDetailsResponseModel>();
            CreateMap<CarRentalDetailsResponseModel, CarRental>();
        }
    }
}
