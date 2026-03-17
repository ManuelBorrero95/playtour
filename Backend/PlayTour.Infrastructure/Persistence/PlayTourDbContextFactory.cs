using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;

using System.IO;

namespace PlayTour.Infrastructure.Persistence
{
    public class PlayTourDbContextFactory : IDesignTimeDbContextFactory<PlayTourDbContext>
    {
        public PlayTourDbContext CreateDbContext(string[] args)
        {
            var optionsBuilder = new DbContextOptionsBuilder<PlayTourDbContext>();

      
            optionsBuilder.UseSqlServer(
                "Server=tcp:playtour-sqlsrv.database.windows.net,1433;Initial Catalog=PlayTourDb;Persist Security Info=False;User ID=playtouradmin;Password=M1uoc1gd!;MultipleActiveResultSets=False;Encrypt=True;TrustServerCertificate=False;Connection Timeout=30;");

            return new PlayTourDbContext(optionsBuilder.Options);
        }
    }
}
