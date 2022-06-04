namespace RentACar.Server.Data.Models
{
    using Microsoft.AspNetCore.Identity;
    using Data.Models.Base;
    using System;
    using System.Collections.Generic;

    public class User : IdentityUser, IEntity
    {
        public string FullName { get; set; }

        public string PictureUrl { get; set; }

        public DateTime CreatedOn { get; set; }

        public string CreatedBy { get; set; }

        public DateTime? ModifiedOn { get; set; }

        public string ModifiedBy { get; set; }

        public DateTime? DeletedOn { get; set; }

        public string DeletedBy { get; set; }

        public bool IsDeleted { get; set; }
    }
}
