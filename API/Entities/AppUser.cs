using System;
using System.Collections.Generic;
using API.Extensions;

namespace Entities
{
    public class AppUser
    {
        public int Id { get; set; }
        public string UserName { get; set; }
        public byte[] PasswordHash { get; set; }
        public byte[] PasswordSalt { get; set; }
        public string Email { get; set; }
        public string Firstname { get; set; }
        public string Middlename { get; set; }
        public string Lastname { get; set; }
        public DateTime DateOfBirth { get; set; }
        public string Gender { get; set; }
        public DateTime Created { get; set; } = DateTime.Now;
        // public DateTime LastActive { get; set; } = DateTime.Now;
        public string LatestStatus { get; set; }
        public ICollection<LoginHistory> LoginHistoryDetails { get; set; }

        // public int GetAge()
        // {
        //     return DateOfBirth.CalculateAge();
        // }

    }
}