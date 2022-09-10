namespace RentACar.Server.Features.Users
{
    public class UserModel
    {
        public string Id { get; set; }

        public string FullName { get; set; }

        public string Email { get; set; }

        public string PhoneNumber { get; set; }

        public string UserName { get; set; }

        public string PictureUrl { get; set; }

        public bool IsAdmin { get; set; }
    }
}
