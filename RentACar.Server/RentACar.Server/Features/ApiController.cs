namespace RentACar.Server.Features
{
    using Microsoft.AspNetCore.Cors;
    using Microsoft.AspNetCore.Mvc;

    [ApiController]
    [Route("[controller]")]
    public abstract class ApiController : ControllerBase
    {
    }
}
