namespace RentACar.Server.Tests.Controllers
{
    using Microsoft.AspNetCore.Mvc;
    using Server.Controllers;

    public class HomeControllerTest
    {
        [Fact]
        public void GetShouldReturnOk()
        {
            /// Should test the Authorize attribute
            /// 

            // Arrange
            var homeController = new HomeController();

            // Act
            var result = homeController.Get();

            // Assert
            var okRequestResult = Assert.IsType<OkObjectResult>(result);
            Assert.Equal("Works", okRequestResult.Value);
        }
    }
}
