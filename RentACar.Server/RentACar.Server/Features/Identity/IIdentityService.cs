namespace RentACar.Server.Features.Identity
{
    public interface IIdentityService
    {
        string GenerateJwtToken(string userId, string email, string secret);
    }
}
