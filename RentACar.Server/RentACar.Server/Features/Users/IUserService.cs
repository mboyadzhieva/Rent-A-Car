namespace RentACar.Server.Features.Users
{
    using System.Collections.Generic;
    using System.Threading.Tasks;

    public interface IUserService
    {
        Task<IEnumerable<UserModel>> GetAll();

        Task<UserModel> Get(string id);

        Task<UserModel> GetCurrentUser();

        Task<bool> Update(UserModel model);

        Task<bool> Delete(string id);
    }
}
