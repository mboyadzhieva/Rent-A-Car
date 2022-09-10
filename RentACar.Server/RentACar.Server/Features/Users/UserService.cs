namespace RentACar.Server.Features.Users
{
    using AutoMapper;
    using AutoMapper.QueryableExtensions;
    using Data;
    using Microsoft.AspNetCore.Identity;
    using Microsoft.EntityFrameworkCore;
    using RentACar.Server.Data.Models;
    using RentACar.Server.Infrastructure.Services;
    using System.Collections.Generic;
    using System.Linq;
    using System.Threading.Tasks;

    public class UserService : IUserService
    {
        private readonly RentACarDbContext dbContext;
        private readonly UserManager<User> userManager;
        private readonly ICurrentUserService currentUser;
        private readonly IMapper mapper;

        public UserService(RentACarDbContext data, IMapper mapper, UserManager<User> userManager,
            ICurrentUserService currentUser)
        {
            this.dbContext = data;
            this.mapper = mapper;
            this.currentUser = currentUser;
            this.userManager = userManager;
        }

        public async Task<IEnumerable<UserModel>> GetAll()
        {
            var configuration = new MapperConfiguration(cfg => cfg.CreateProjection<User, UserModel>());

            var result = await this.dbContext
                .Users
                .Where(u => u.IsDeleted == false)
                .OrderBy(u => u.FullName)
                .ProjectTo<UserModel>(configuration)
                .ToListAsync();

            System.Console.WriteLine($"Tracked entities in UserService.GetAll(): {dbContext.ChangeTracker.Entries().Count()}");

            return result;
        }

        public async Task<UserModel> Get(string id)
        {
            var user = await userManager.FindByIdAsync(id);

            return mapper.Map<UserModel>(user);
        }

        public async Task<UserModel> GetCurrentUser()
        {
            var userId = this.currentUser.GetUserId(); 
            var user = await userManager.FindByIdAsync(userId);
            var isAdmin = await userManager.IsInRoleAsync(user, "Admin");

            var userModel = mapper.Map<UserModel>(user);
            userModel.IsAdmin = isAdmin;

            return userModel;
        }

        public async Task<bool> Update(UserModel model)
        {
            var user = await userManager.FindByIdAsync(model.Id);

            if (user != null)
            {
                user.NormalizedEmail = model.Email.ToUpper();
                user.NormalizedUserName = model.UserName.ToUpper();
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
