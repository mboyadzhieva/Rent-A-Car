using RentACar.Server.Features.CaRental;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RentACar.Server.Tests.Services
{
    internal class CarRentalServiceTest
    {
        public void CalculateTotalPrice_ReturnsDiscountedPriceIfApplicable()
        {

        }

        public void IsUserVip_ReturnsTrueIfTheUserHasVipStatus()
        {
            // Arrange
            var carRentalService = new CarRentalService(null, null, null);

            // Act
            carRentalService.IsUserVIP("jksuhf");
        }
    }
}

