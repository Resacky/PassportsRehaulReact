using Microsoft.EntityFrameworkCore;

namespace PassportsRehaulReact.Data
{

    public class PassportDbContext : DbContext
    {

        public IConfiguration _config { get; set; }

        public PassportDbContext(IConfiguration config)
        {

        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer();
        }

    }

}
