namespace RentACar.Server.Tests.Controllers
{
    using Fakes;
    using Features.Cars;

    public class CarsControllerTest
    {
        [Fact]
        public async Task GetAll_ReturnsAllCars()
        {
            // Arrange
            var carController = new CarsController(new FakeCarService());

            // Act
            var getAll = await carController.GetAll();

            // Assert
            var result = Assert.IsAssignableFrom<IEnumerable<CarModel>>(getAll);
            Assert.Equal(3, result.Count());

            Assert.Collection(result,
                    item =>
                    {
                        Assert.Equal(1, item.Id);
                        Assert.Equal(1999, item.ConstructionYear);
                        Assert.Equal("Lanos", item.Model);
                        Assert.Equal("Daewoo", item.Brand);
                    },
                    item => Assert.Equal("Petrol", item.FuelType),
                    item => Assert.Equal(20.9m, item.PricePerDay)
                );
        }
    }
}
