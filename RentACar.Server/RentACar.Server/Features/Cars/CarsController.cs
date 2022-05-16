using Microsoft.AspNetCore.Mvc;

namespace RentACar.Server.Features.Cars
{
    public class CarsController : Controller
    {
        [HttpGet]
        public IActionResult Index()
        {
            return View();
        }
    }
}
