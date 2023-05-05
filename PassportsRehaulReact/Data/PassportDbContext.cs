using Microsoft.EntityFrameworkCore;
using PassportsRehaulReact.Models;

namespace PassportsRehaulReact.Data
{

    public class PassportDbContext : DbContext
    {

        public PassportDbContext(DbContextOptions<PassportDbContext> options) : base(options)
        {



        }

        /* to create an arbitary primary key */
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Employees>().HasKey(x => x.idnum);
        }

        public DbSet<Employees> employees { get; set; }

        public DbSet<PassportsRehaulReact.Models.PassPortARSCG>? PassPortARSCG { get; set; }

        public DbSet<PassportsRehaulReact.Models.PassPortARSSD>? PassPortARSSD { get; set; }

        public DbSet<PassportsRehaulReact.Models.PassPortFees>? PassPortFees { get; set; }

        public DbSet<PassportsRehaulReact.Models.PassPortLockBoxes>? PassPortLockBoxes { get; set; }
    }
}
