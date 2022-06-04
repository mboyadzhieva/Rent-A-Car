namespace RentACar.Server.Features.Users
{
    using System.Collections.Generic;
    using System.Threading.Tasks;

    public interface IUserService
    {
        Task<IEnumerable<UserModel>> GetAll();

        Task<bool> Delete(string id);

        Task<UserModel> Get(string id);

        Task<bool> Update(UserModel model);
    }
}
