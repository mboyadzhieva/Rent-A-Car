namespace RentACar.Server.Controllers
{
    using Features;
    using Microsoft.AspNetCore.Authorization;
    using Microsoft.AspNetCore.Mvc;

    [ApiController]
    [Route("[controller]")]
    public class HomeController : ApiController
    {
        [HttpGet]
        [Authorize]
        public IActionResult Get()
        {
            return Ok("Works");
        }

    }
}
