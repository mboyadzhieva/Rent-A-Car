using AutoMapper;
using Microsoft.EntityFrameworkCore;
using RentACar.Server.Data;
using RentACar.Server.Data.Models;
using RentACar.Server.Features.Cars;
using RentACar.Server.Infrastructure.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace RentACar.Server.Features.CaRental
{
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

        public async Task<CarRentalDetailsResponseModel> Rent(CreateCarRentalRequestModel model)
        {
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

            var createdCarRental = mapper.Map<CarRentalDetailsResponseModel>(carRental);

            return createdCarRental;

        }

        public async Task<IEnumerable<CarRentalDetailsResponseModel>> GetByUserId(string id)
        {
            return await this.dbContext
                .CarRentals
                .Where(cr => cr.UserId == id)
                .Select(cr => mapper.Map<CarRentalDetailsResponseModel>(cr))
                .ToListAsync();
        }

        public async Task<CarRentalDetailsResponseModel> Get(int id)
        {
            return await this.dbContext
                .CarRentals
                .Where(cr => cr.Id == id)
                .Select(cr => mapper.Map<CarRentalDetailsResponseModel>(cr))
                .FirstOrDefaultAsync();
        }

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

        private bool IsUserVIP(string userId)
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
