namespace RentACar.Server.Features.Users
{
    using AutoMapper;
    using Data;
    using Microsoft.AspNetCore.Identity;
    using Microsoft.EntityFrameworkCore;
    using RentACar.Server.Data.Models;
    using System.Collections.Generic;
    using System.Linq;
    using System.Threading.Tasks;

    public class UserService : IUserService
    {
        private readonly RentACarDbContext dbContext;
        private readonly UserManager<User> userManager;
        private readonly IMapper mapper;

        public UserService(RentACarDbContext data, IMapper mapper, UserManager<User> userManager)
        {
            this.dbContext = data;
            this.mapper = mapper;
            this.userManager = userManager;
        }

        public async Task<IEnumerable<UserModel>> GetAll()
        {
            return await this.dbContext
                .Users
                .OrderBy(u => u.FullName)
                .Where(u => u.IsDeleted == false)
                .Select(u => mapper.Map<UserModel>(u))
                .ToListAsync();
        }

        public async Task<UserModel> Get(string id)
        {
            var user = await userManager.FindByIdAsync(id);

            return mapper.Map<UserModel>(user);
        }

        public async Task<bool> Update(UserModel model)
        {
            var user = await userManager.FindByIdAsync(model.Id);

            if (user != null)
            {
                mapper.Map(model, user);
                await this.dbContext.SaveChangesAsync();

                return true;
            }

            return false;
        }

        public async Task<bool> Delete(string userId)
        {
            var user = await userManager.FindByIdAsync(userId);

            if (user != null)
            {
                this.dbContext.Users.Remove(user);
                await this.dbContext.SaveChangesAsync();

                return true;
            }

            return false;
        }
    }
}
