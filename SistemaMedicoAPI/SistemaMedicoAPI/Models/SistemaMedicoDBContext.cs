using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SistemaMedicoAPI.Models
{
    public class SistemaMedicoDBContext : DbContext
    {
        public DbSet<Paises> Paises { get; set; }
        public DbSet<Ciudades> Ciudades { get; set; }
        public DbSet<Pacientes> Pacientes { get; set; }
        public DbSet<Usuarios> Usuarios { get; set; }
        public DbSet<Citas> Citas { get; set; }
        public DbSet<Recetas> Recetas { get; set; }
        public DbSet<Historial> HistorialMedico { get; set; }
        public SistemaMedicoDBContext(DbContextOptions<SistemaMedicoDBContext> options)
            : base(options)
        {
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Paises>().ToTable("Paises");
            modelBuilder.Entity<Ciudades>().ToTable("Ciudades");
            modelBuilder.Entity<Pacientes>().ToTable("Pacientes");
            modelBuilder.Entity<Usuarios>().ToTable("Usuarios");
            modelBuilder.Entity<Citas>().ToTable("Citas");
            modelBuilder.Entity<Recetas>().ToTable("Recetas");
           modelBuilder.Entity<Historial>().ToTable("HistorialMedico");
        }
    }
}
