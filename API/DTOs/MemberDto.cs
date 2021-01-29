using System;
using System.Collections.Generic;
using Entities;

namespace API.DTOs
{
    public class MemberDto
    {
        public int Id { get; set; }
        public string UserName { get; set; }
        public string Email { get; set; }
        public string Firstname { get; set; }
        public string Middlename { get; set; }
        public string Lastname { get; set; }
        public DateTime DateOfBirth { get; set; }
        public int Age { get; set; }
        public string Gender { get; set; }
        public DateTime Created { get; set; }
        // public DateTime LastActive { get; set; }
        public string LatestStatus { get; set; }
        public DateTime LastLoggedIn {get; set; }
        public ICollection<LoginHistoryDto> LoginHistoryDetails { get; set; }
    }
}