using System;
using System.ComponentModel.DataAnnotations;

namespace API.DTOs
{
    public class RegisterDto
    {
        [Required]
        public string Firstname { get; set; }
        [Required]
        public string Middlename { get; set; }
        [Required]
        public string Lastname { get; set; }
        [Required]
        public string Email { get; set; }
        [Required]
        public string Gender { get; set; }
        [Required]
        public DateTime DateOfBirth { get; set; }
        [Required]
        public string Username { get; set; }        
        [Required]
        [StringLength(8, MinimumLength=4)]
        public string Password { get; set; }
    }
}