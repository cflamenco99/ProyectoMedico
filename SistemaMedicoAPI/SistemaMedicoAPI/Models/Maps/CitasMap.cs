using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Microsoft.EntityFrameworkCore;

namespace SistemaMedicoAPI.Models.Maps
{
    public class CitasMap : IEntityTypeConfiguration<Citas>
    {
        public void Configure(EntityTypeBuilder<Citas> builder)
        {
            builder.ToTable("Citas", "dbo");
            builder.HasKey(x => x.IdCita);
            builder.Property(x => x.IdCita).HasColumnName("IdCita");
            builder.Property(x => x.FechaCita).HasColumnName("FechaCita");
            builder.Property(x => x.IdPaciente).HasColumnName("IdPaciente");
            builder.Property(x => x.UsuarioAgrega).HasColumnName("UsuarioAgrega");
            builder.Property(x => x.FechaAgrega).HasColumnName("FechaAgrega");
            builder.Property(x => x.UsuarioModifica).HasColumnName("UsuarioModifica");
            builder.Property(x => x.FechaModifica).HasColumnName("FechaModifica");
        }
    }
}
