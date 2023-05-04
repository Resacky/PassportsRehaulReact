using Microsoft.EntityFrameworkCore;

namespace PassportsRehaulReact.Data
{

    public class PassportDbContext : DbContext
    {

        public IConfiguration _config { get; set; }

        public PassportDbContext(IConfiguration config)
        {
            _config = config;
        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer(_config.GetConnectionString("DatabaseConnection"));
        }

        public DbSet<Employees> employees { get; set; }
    }
}
