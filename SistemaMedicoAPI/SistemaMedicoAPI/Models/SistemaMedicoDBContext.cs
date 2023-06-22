using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using SistemaMedicoAPI.Models.Maps;
using System;

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
            modelBuilder.Entity(new Action<EntityTypeBuilder<Pacientes>>(new PacientesMap().Configure));
            modelBuilder.Entity(new Action<EntityTypeBuilder<Citas>>(new CitasMap().Configure));
            modelBuilder.Entity(new Action<EntityTypeBuilder<Ciudades>>(new CiudadesMap().Configure));
            modelBuilder.Entity(new Action<EntityTypeBuilder<Historial>>(new HistorialMedicoMap().Configure));
            modelBuilder.Entity(new Action<EntityTypeBuilder<Paises>>(new PaisesMap().Configure));
            modelBuilder.Entity(new Action<EntityTypeBuilder<Recetas>>(new RecetasMap().Configure));
            modelBuilder.Entity(new Action<EntityTypeBuilder<Usuarios>>(new UsuariosMap().Configure));
        }
    }
}
