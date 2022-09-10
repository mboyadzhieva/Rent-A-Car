namespace RentACar.Server.Features.Users
{
    using Data.Models;
    using Microsoft.AspNetCore.Authorization;
    using Microsoft.AspNetCore.Identity;
    using Microsoft.AspNetCore.Mvc;
    using System.Collections.Generic;
    using System.Threading.Tasks;

    [Authorize]
    public class UsersController : ApiController
    {
        private readonly IUserService users;

        public UsersController(IUserService users)
        {
            this.users = users;
        }

        [HttpGet]
        public async Task<IEnumerable<UserModel>> GetAll()
        {
            return await this.users.GetAll();
        }

        [HttpGet("currentUser")]
        public async Task<UserModel> GetCurrentUser()
        {
            return await this.users.GetCurrentUser();
        }

        [HttpGet]
        [Route("{id}")]
        [Authorize(Roles = "Admin")]
        public async Task<UserModel> GetUserById(string id)
        {
            return await users.Get(id);
        }

        [HttpPut]
        [Authorize(Roles = "Admin")]
        public async Task<bool> EditUser(UserModel model)
        {
            return await this.users.Update(model);
        }

        [HttpDelete]
        [Route("{id}")]
        [Authorize(Roles = "Admin")]
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
