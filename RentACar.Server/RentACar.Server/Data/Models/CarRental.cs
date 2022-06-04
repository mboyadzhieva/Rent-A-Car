using RentACar.Server.Data.Models.Base;
using System;
using System.ComponentModel.DataAnnotations;

namespace RentACar.Server.Data.Models
{
    public class CarRental : Entity
    {
        public int Id { get; set; }

        [Required]
        public string UserId { get; set; }

        public User User { get; set; }

        [Required]
        public int CarId { get; set; }

        public Car Car { get; set; }

        public DateTime StartDate { get; set; }

        public DateTime EndDate { get; set; }

        public int Days { get; set; }

        public decimal TotalPrice { get; set; }
    }
}
