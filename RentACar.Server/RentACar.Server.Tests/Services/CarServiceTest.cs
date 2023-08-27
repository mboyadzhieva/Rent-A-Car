using Microsoft.EntityFrameworkCore;
using RentACar.Server.Data;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RentACar.Server.Tests.Services
{
    public class CarServiceTest
    {
        [Fact]
        public void GetAll_ReturnsAllCarsInDb()
        {
            //var options = new DbContextOptionsBuilder<RentACarDbContext>()
            //    .UseInMemoryDatabase("GetAllCars")
            //    .Options;

            //using (var db = new RentACarDbContext(options))
            //{

            //}
        }
    }
}
