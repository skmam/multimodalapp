using System;
using System.ComponentModel.DataAnnotations.Schema;

namespace Entities
{
    [Table("LoginHistoryDetails")]
    public class LoginHistory
    {
        public int Id { get; set; }
        public DateTime LoggedIn { get; set; }
        public DateTime LoggedOut { get; set; }
        public AppUser AppUser { get; set; }
        public int AppUserId { get; set; }
    }
}