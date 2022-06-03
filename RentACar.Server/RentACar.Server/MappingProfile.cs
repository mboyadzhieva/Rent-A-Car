namespace RentACar.Server
{
    using AutoMapper;
    using Data.Models;
    using Features.Cars;
    using Features.Users;
    using Models.Identity;

    public class MappingProfile : Profile
    {
        public MappingProfile()
        {
            CreateMap<Car, CarRequestModel>();
            CreateMap<CarRequestModel, Car>();

            CreateMap<User, UserResponseModel>();
            CreateMap<UserResponseModel, User>();

            CreateMap<User, RegisterRequestModel>();
            CreateMap<RegisterRequestModel, User>();
        }
    }
}
