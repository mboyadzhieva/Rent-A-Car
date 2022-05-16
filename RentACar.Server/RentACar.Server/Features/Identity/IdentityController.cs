namespace RentACar.Server.Features.Identity
{
    using Data.Models;
    using Microsoft.AspNetCore.Http;
    using Microsoft.AspNetCore.Identity;
    using Microsoft.AspNetCore.Mvc;
    using Microsoft.Extensions.Options;
    using Models.Identity;
    using System.Threading.Tasks;

    public class IdentityController : ApiController
    {
        private readonly UserManager<User> userManager;
        private readonly IIdentityService identityService;
        private readonly AppSettings appSettings;

        public IdentityController(UserManager<User> userManager, IOptions<AppSettings> appSettings, IIdentityService identityService)
        {
            this.userManager = userManager;
            this.identityService = identityService;
            this.appSettings = appSettings.Value;
        }

        /// <summary>
        /// Summary 
        /// </summary>
        /// <param name="model"></param>
        /// <returns></returns>
        [HttpPost]
        [Route(nameof(Register))]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        public async Task<ActionResult> Register(RegisterRequestModel model)
        {
            var user = new User
            {
                UserName = model.Username,
                PhoneNumber = model.Phone,
                Email = model.Email,
                FullName = model.FullName
            };

            var result = await userManager.CreateAsync(user, model.Password);

            if (result.Succeeded)
            {
                return Ok();
            }

            return BadRequest(result.Errors);
        }

        [HttpPost]
        [Route(nameof(Login))]
        public async Task<ActionResult<object>> Login(LoginRequestModel model)
        {
            var user = await userManager.FindByEmailAsync(model.Email);

            if (user == null)
            {
                return Unauthorized();
            }

            var passwordValid = await userManager.CheckPasswordAsync(user, model.Password);

            if (!passwordValid)
            {
                return Unauthorized();
            }

            var encryptedToken = identityService.GenerateJwtToken(
                user.Id, 
                user.Email, 
                this.appSettings.Secret);

            return new LoginResponseModel
            {
                Token = encryptedToken
            };
        }
    }
}
