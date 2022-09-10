namespace RentACar.Server.Data
{
    using Infrastructure.Services;
    using Microsoft.AspNetCore.Identity;
    using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
    using Microsoft.EntityFrameworkCore;
    using Models;
    using Models.Base;
    using System;
    using System.Linq;
    using System.Threading;
    using System.Threading.Tasks;

    public class RentACarDbContext : IdentityDbContext<User>
    {
        private readonly ICurrentUserService currentUser;

        public RentACarDbContext(DbContextOptions<RentACarDbContext> options, ICurrentUserService currentUser)
            : base(options)
        {
            this.currentUser = currentUser;
        }

        public DbSet<Car> Cars { get; set; }

        public DbSet<CarRental> CarRentals { get; set; }

        public override int SaveChanges(bool acceptAllChangesOnSuccess)
        {
            this.ApplyAuditIformation();
            return base.SaveChanges(acceptAllChangesOnSuccess);
        }

        public override Task<int> SaveChangesAsync(bool acceptAllChangesOnSuccess, CancellationToken cancellationToken = default)
        {
            this.ApplyAuditIformation();
            return base.SaveChangesAsync(acceptAllChangesOnSuccess, cancellationToken);
        }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            this.AddIdentityRoles(builder);
            base.OnModelCreating(builder);
        }

        private void AddIdentityRoles(ModelBuilder builder)
        {
            builder.Entity<IdentityRole>().HasData(
                new IdentityRole
                {
                    Name = "Admin",
                    NormalizedName = "ADMIN",
                    Id = Guid.NewGuid().ToString(),
                    ConcurrencyStamp = Guid.NewGuid().ToString()
                });

            builder.Entity<IdentityRole>().HasData(
                new IdentityRole
                {
                    Name = "User",
                    NormalizedName = "USER",
                    Id = Guid.NewGuid().ToString(),
                    ConcurrencyStamp = Guid.NewGuid().ToString()
                });
        }

        private void ApplyAuditIformation()
        {
            this.ChangeTracker
                .Entries()
                .ToList()
                .ForEach(entry =>
                {
                    var userName = this.currentUser.GetUserName();

                    if (entry.Entity is IEntity entity)
                    {
                        if (entry.State == EntityState.Added)
                        {
                            entity.CreatedOn = DateTime.UtcNow;
                            entity.CreatedBy = userName;
                        }
                        else if (entry.State == EntityState.Modified)
                        {
                            entity.ModifiedOn = DateTime.UtcNow;
                            entity.ModifiedBy = userName;
                        }
                        else if (entry.State == EntityState.Deleted)
                        {
                            entity.DeletedOn = DateTime.UtcNow;
                            entity.DeletedBy = userName;
                            entity.IsDeleted = true;

                            entry.State = EntityState.Modified;
                        }
                    }
                });
        }
    }
}
