namespace RentACar.Server.Infrastructure.Services
{
    using Microsoft.AspNetCore.Http;
    using Extensions;

    public class CurrentUserService : ICurrentUserService
    {
        private readonly IHttpContextAccessor httpContextAccessor;

        public CurrentUserService(IHttpContextAccessor httpContextAccessor)
        => this.httpContextAccessor = httpContextAccessor;

        public string GetUserId()
            => this.httpContextAccessor
                .HttpContext
                .User?
                .GetId();
       
        public string GetUserName()
            => this.httpContextAccessor
                .HttpContext
                .User?
                .Identity?
                .Name;
    }
}
