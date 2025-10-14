using Microsoft.EntityFrameworkCore;
using PlayTour.Domain.Entities;


namespace PlayTour.Infrastructure.Persistence
{
    public class PlayTourDbContext : DbContext
    {
        public PlayTourDbContext(DbContextOptions<PlayTourDbContext> options)
        : base(options) { }


        public DbSet<Event> Events { get; set; }
        public DbSet<Club> Clubs { get; set; }

    }
}
