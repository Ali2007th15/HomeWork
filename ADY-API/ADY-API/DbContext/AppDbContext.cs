using ADY_API.Models;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Reflection.Emit;


public class AppDbContext : DbContext
{
    public DbSet<Train> Trains { get; set; }
    public DbSet<Ticket> Tickets { get; set; }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Train>().ToTable("Trains");
        modelBuilder.Entity<Ticket>().ToTable("Tickets");
    }

    public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
    {
    }
}

