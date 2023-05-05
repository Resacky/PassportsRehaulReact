using Microsoft.EntityFrameworkCore;
using PassportsRehaulReact.Models;

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

        /* to create an arbitary primary key */
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Employees>().HasKey(x => x.idnum);
        }

        public DbSet<Employees> employees { get; set; }
        public DbSet<PassPortARSCG> PassPortARSCGs { get; set; }
        public DbSet<PassPortARSSD> PassPortARSSDs { get; set; }
        public DbSet<PassPortFees> PassPortFeess { get; set; }
        public DbSet<PassPortLockBoxes> PassPortLockBoxess { get; set; }

    }
}
