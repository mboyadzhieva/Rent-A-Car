namespace RentACar.Server.Data.Models.Base
{
    using System;

    public abstract class Entity : IEntity
    {
        public DateTime CreatedOn { get; set; }

        public string CreatedBy { get; set; }

        public DateTime? ModifiedOn { get; set; }

        public string ModifiedBy { get; set; }

        public DateTime? DeletedOn { get; set; }

        public string DeletedBy { get; set; }

        public bool IsDeleted { get; set; }
    }
}
