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
        //protected override void OnModelCreating(ModelBuilder modelBuilder)
        //{
        //    modelBuilder.Entity<Employees>().HasKey(x => x.idnum);
        //}

        public DbSet<PassportsRehaulReact.Models.PassPortARSCG>? PassPortARSCG { get; set; }

        public DbSet<PassportsRehaulReact.Models.PassPortARSSD>? PassPortARSSD { get; set; }

        public DbSet<PassportsRehaulReact.Models.PassPortLockBoxes>? PassPortLockBoxes { get; set; }

        public DbSet<PassportsRehaulReact.Models.PassportNewFees>? PassportNewFees { get; set; }

        public DbSet<PassportsRehaulReact.Models.entrybackup2>? entrybackup2 { get; set; }

    }
}
