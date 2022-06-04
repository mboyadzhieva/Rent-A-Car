namespace RentACar.Server.Features.Users
{
    using Microsoft.AspNetCore.Authorization;
    using Microsoft.AspNetCore.Identity;
    using Microsoft.AspNetCore.Mvc;
    using RentACar.Server.Data.Models;
    using System.Collections.Generic;
    using System.Threading.Tasks;

    [Authorize]
    public class UsersController : ApiController
    {
        private readonly IUserService users;
        private readonly UserManager<User> userManager;

        public UsersController(IUserService users, UserManager<User> userManager)
        {
            this.users = users;
            this.userManager = userManager;
        }

        [HttpGet]
        public async Task<IEnumerable<UserModel>> GetAll()
        {
            return await this.users.GetAll();
        }

        [HttpGet]
        [Route("{id}")]
        public async Task<UserModel> GetUserById(string id)
        {
            return await users.Get(id);
        }

        [HttpPut]
        public async Task<bool> EditUser(UserModel model)
        {
            return await this.users.Update(model);
        }

        [HttpDelete]
        [Route("{id}")]
        public async Task<ActionResult> DeleteUser(string id)
        {
            var deleted = await this.users.Delete(id);

            if (!deleted)
            {
                return BadRequest();
            }

            return Ok();
        }
    }
}
