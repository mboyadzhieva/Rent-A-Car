namespace RentACar.Server.Features.Identity
{
    using AutoMapper;
    using Data.Models;
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
        private readonly IMapper mapper;

        public IdentityController(
            UserManager<User> userManager, 
            IOptions<AppSettings> appSettings, 
            IIdentityService identityService, 
            IMapper mapper)
        {
            this.userManager = userManager;
            this.identityService = identityService;
            this.appSettings = appSettings.Value;
            this.mapper = mapper;
        }

        [HttpPost]
        [Route(nameof(Register))]
        public async Task<ActionResult> Register(RegisterRequestModel model)
        {
            var user = mapper.Map<User>(model);

            var result = await userManager.CreateAsync(user, model.Password);

            if (result.Succeeded)
            {
                if (user.Email.Contains("admin"))
                {
                    await userManager.AddToRoleAsync(user, "Admin");
                }

                await userManager.AddToRoleAsync(user, "User");
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
                user.UserName,
                user.Email, 
                this.appSettings.Secret);

            return new LoginResponseModel
            {
                Token = encryptedToken
            };
        }
    }
}
