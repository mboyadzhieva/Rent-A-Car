namespace RentACar.Server.Data
{
    using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
    using Microsoft.EntityFrameworkCore;
    using Models;

    public class RentACarDbContext : IdentityDbContext<User>
    {
        public RentACarDbContext(DbContextOptions<RentACarDbContext> options)
            : base(options)
        {
        }
    }
}
