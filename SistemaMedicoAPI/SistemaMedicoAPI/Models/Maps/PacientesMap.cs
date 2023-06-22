using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace SistemaMedicoAPI.Models.Maps
{
    public class PacientesMap : IEntityTypeConfiguration<Pacientes>
    {
        public void Configure(EntityTypeBuilder<Pacientes> builder)
        {
            builder.ToTable("Pacientes", "dbo");
            builder.HasKey(x => x.IdPaciente);
            builder.Property(x => x.IdPaciente).HasColumnName("IdPaciente");
            builder.Property(x => x.Nombres).HasColumnName("Nombres");
            builder.Property(x => x.Apellidos).HasColumnName("Apellidos");
            builder.Property(x => x.CodigoPostal).HasColumnName("CodigoPostal");
            builder.Property(x => x.Direccion).HasColumnName("Direccion");
            builder.Property(x => x.FechaNacimiento).HasColumnName("FechaNacimiento");
            builder.Property(x => x.IdCiudad).HasColumnName("IdCiudad");
            builder.Property(x => x.UsuarioAgrega).HasColumnName("UsuarioAgrega");
            builder.Property(x => x.FechaAgrega).HasColumnName("FechaAgrega");
            builder.Property(x => x.UsuarioModifica).HasColumnName("UsuarioModifica");
            builder.Property(x => x.FechaModifica).HasColumnName("FechaModifica");
        }
    }
}
