namespace RentACar.Server.Infrastructure.Extensions
{
    using AutoMapper;
    using Data;
    using Data.Models;
    using Features.CaRental;
    using Features.Cars;
    using Features.Identity;
    using Features.Users;
    using Microsoft.AspNetCore.Authentication.JwtBearer;
    using Microsoft.AspNetCore.Identity;
    using Microsoft.EntityFrameworkCore;
    using Microsoft.Extensions.Configuration;
    using Microsoft.Extensions.DependencyInjection;
    using Microsoft.IdentityModel.Tokens;
    using Microsoft.OpenApi.Models;
    using Services;
    using System;
    using System.Text;

    public static class ServiceCollectionExtension
    {
        public static AppSettings GetAppSettings(
            this IServiceCollection services,
            IConfiguration configuration)
        {
            var appSettingsConfig = configuration.GetSection("AppSettings");
            services.Configure<AppSettings>(appSettingsConfig);

            return appSettingsConfig.Get<AppSettings>();
        }

        public static IServiceCollection AddDatabase(
            this IServiceCollection services,
            IConfiguration configuration)
        {
            var isDevelopment =
                Environment.GetEnvironmentVariable("ASPNETCORE_ENVIRONMENT") == "Development";

            if (isDevelopment)
            {
                services.AddDbContext<RentACarDbContext>(options => options
                        .UseSqlServer(configuration.GetConnectionString("DefaultConnection")));
            }
            else
            {
                services.AddDbContext<RentACarDbContext>(options => options
                        .UseNpgsql(GetHerokuConnectionString()));
            }

            return services;
        }

        private static string GetHerokuConnectionString()
        {
            string connectionUrl = Environment.GetEnvironmentVariable("DATABASE_URL");

            var databaseUri = new Uri(connectionUrl);

            string db = databaseUri.LocalPath.TrimStart('/');
            string[] userInfo = databaseUri.UserInfo.Split(':', StringSplitOptions.RemoveEmptyEntries);

            return $"User ID={userInfo[0]};Password={userInfo[1]};Host={databaseUri.Host};Port={databaseUri.Port};Database={db};Pooling=true;SSL Mode=Require;Trust Server Certificate=True;";
        }

        public static IServiceCollection AddIdentity(this IServiceCollection services)
        {
            services
                .AddIdentity<User, IdentityRole>(options =>
                {
                    options.Password.RequireDigit = false;
                    options.Password.RequireLowercase = false;
                    options.Password.RequireNonAlphanumeric = false;
                    options.Password.RequireUppercase = false;
                    options.Password.RequiredLength = 4;
                })
                .AddEntityFrameworkStores<RentACarDbContext>();

            return services;
        }

        public static IServiceCollection AddJwtAuthentication(
            this IServiceCollection services,
            AppSettings appSettings)
        {
            var key = Encoding.ASCII.GetBytes(appSettings.Secret);

            services.AddAuthentication(x =>
            {
                x.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
                x.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
            })
            .AddJwtBearer(x =>
            {
                x.RequireHttpsMetadata = false;
                x.SaveToken = true;
                x.TokenValidationParameters = new TokenValidationParameters
                {
                    ValidateIssuerSigningKey = true,
                    IssuerSigningKey = new SymmetricSecurityKey(key),
                    ValidateIssuer = false,
                    ValidateAudience = false
                };
            });

            return services;
        }

        public static IServiceCollection AddApplicationServices(
            this IServiceCollection services)
        {
            services
               .AddTransient<IIdentityService, IdentityService>()
               .AddTransient<ICurrentUserService, CurrentUserService>()
               .AddTransient<ICarService, CarService>()
               .AddTransient<IUserService, UserService>()
               .AddTransient<ICarRentalService, CarRentalService>();

            return services;
        }

        public static IServiceCollection AddSwagger(this IServiceCollection services)
            => services.AddSwaggerGen(c =>
            {
                c.SwaggerDoc("v1",
                    new OpenApiInfo
                    {
                        Title = "Rent A Car API",
                        Version = "v1"
                    });
            });

        public static IServiceCollection AddAutoMapper(this IServiceCollection sevices)
        {
            var mapperConfig = new MapperConfiguration(mc =>
            {
                mc.AddProfile(new MappingProfile());
            });

            IMapper mapper = mapperConfig.CreateMapper();
            sevices.AddSingleton(mapper);

            return sevices;
        }

        public static IServiceCollection AddCustomCorsPolicy(this IServiceCollection services, string policyName)
        =>
            services
                .AddCors(options =>
                {
                    options.AddPolicy(name: policyName,
                        policy => policy
                            .AllowAnyOrigin()
                            .AllowAnyHeader());

                });
    }
}
