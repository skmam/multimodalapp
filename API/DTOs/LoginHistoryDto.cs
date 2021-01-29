using System;

namespace API.DTOs
{
    public class LoginHistoryDto
    {
        public int Id { get; set; }
        public DateTime LoggedIn { get; set; }
        public DateTime LoggedOut { get; set; }
    }
}