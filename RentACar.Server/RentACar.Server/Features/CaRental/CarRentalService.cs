using System.Runtime.CompilerServices;

[assembly: InternalsVisibleTo("RentACar.Server.Tests")]
namespace RentACar.Server.Features.CaRental
{
    using AutoMapper;
    using Data;
    using Data.Models;
    using Infrastructure.Services;
    using Microsoft.EntityFrameworkCore;
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Threading.Tasks;

    public class CarRentalService : ICarRentalService
    {
        private readonly RentACarDbContext dbContext;
        private readonly ICurrentUserService currentUser;
        private readonly IMapper mapper;

        public CarRentalService(
            RentACarDbContext dbContext,
            ICurrentUserService currentUser,
            IMapper mapper)
        {
            this.dbContext = dbContext;
            this.currentUser = currentUser;
            this.mapper = mapper;
        }

        public async Task<CreatedCarRentalResponseModel> Rent(CreateCarRentalRequestModel model)
        {
            if (model.StartDate < DateTime.UtcNow
                || model.EndDate < model.StartDate
                || model.EndDate < DateTime.UtcNow)
            {
                return null;
            }

            var userId = this.currentUser.GetUserId();

            var days = (model.EndDate - model.StartDate).Days;

            var carToBeRented = this.dbContext
                .Cars
                .Where(c => c.Id == model.CarId)
                .First();

            carToBeRented.Count--;

            var totalPrice = CalculateTotalPrice(userId, days, carToBeRented.PricePerDay);

            var carRental = mapper.Map<CarRental>(model);
            carRental.UserId = userId;
            carRental.Days = days;
            carRental.TotalPrice = totalPrice;

            this.dbContext.Add(carRental);
            await this.dbContext.SaveChangesAsync();

            var createdCarRental = mapper.Map<CreatedCarRentalResponseModel>(carRental);

            createdCarRental.ConstructionYear = carToBeRented.ConstructionYear;
            createdCarRental.Brand = carToBeRented.Brand;
            createdCarRental.Model = carToBeRented.Model;

            return createdCarRental;
        }

        public async Task<IEnumerable<CarRentalDetailsResponseModel>> Get()
        {
            string userId = this.currentUser.GetUserId();

            return await this.dbContext.CarRentals
                .Where(cr => cr.UserId == userId)
                .Join(this.dbContext.Cars,
                        cr => cr.CarId,
                        c => c.Id, 
                        (cr, c) => new CarRentalDetailsResponseModel
                        {
                            Brand = c.Brand,
                            Model = c.Model,
                            ConstructionYear = c.ConstructionYear,
                            Days = cr.Days,
                            TotalPrice = cr.TotalPrice,
                            StartDate = cr.StartDate,
                            EndDate = cr.EndDate
                        })
                .ToListAsync();
        }

        //public async Task<CarRentalDetailsResponseModel> Get(int id)
        //{
        //    return await this.dbContext
        //        .CarRentals
        //        .Where(cr => cr.Id == id)
        //        .Select(cr => mapper.Map<CarRentalDetailsResponseModel>(cr))
        //        .FirstOrDefaultAsync();
        //}

        private decimal CalculateTotalPrice(string userId, int days, decimal pricePerDay)
        {
            var totalPrice = days * pricePerDay;

            // aplly discounts when applicable
            if (IsUserVIP(userId))
            {
                totalPrice *= 0.85M;
            }
            else if (days > 10)
            {
                totalPrice *= 0.90M;
            }
            else if (days > 5)
            {
                totalPrice *= 0.93M;
            }
            else if (days > 3)
            {
                totalPrice *= 0.95M;
            }

            return totalPrice;
        }

        // Internal for testing purposes.
        internal bool IsUserVIP(string userId)
        {
            var userCarRentals = this.dbContext
                .CarRentals
                .Where(cr =>
                    cr.UserId.Equals(userId)
                    && (cr.StartDate.AddDays(60) >= DateTime.Now))
                .ToList();

            if (userCarRentals.Count > 3)
            {
                return true;
            }

            return false;
        }
    }
}
