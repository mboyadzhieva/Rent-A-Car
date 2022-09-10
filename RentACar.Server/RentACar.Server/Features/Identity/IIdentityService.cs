namespace RentACar.Server.Features.Identity
{
    using Data.Models;
    using System.Threading.Tasks;

    public interface IIdentityService
    {
        Task<string> GenerateJwtToken(User user, string secret);
    }
}
