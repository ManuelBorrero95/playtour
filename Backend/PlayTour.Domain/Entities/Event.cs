using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PlayTour.Domain.Entities
{
    public class Event
    {
        [Key]
        public int Id { get; set; }
        public string Title { get; set; } = string.Empty;
        public DateTime StartDate { get; set; }
        public DateTime EndDate { get; set; }
        public bool IsAllDay { get; set; }
        public string Address { get; set; } = string.Empty;        
        public string ContactPhone { get; set; } = string.Empty;

        public int ClubId { get; set; }
        public int EventTypeId {  get; set; }
        public int UserId { get; set; }
        public Club Club { get; set; }
        public EventType EventType { get; set; }
        public User User { get; set;  }
    }
}
