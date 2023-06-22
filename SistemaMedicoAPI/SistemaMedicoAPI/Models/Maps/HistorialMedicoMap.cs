using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Microsoft.EntityFrameworkCore;

namespace SistemaMedicoAPI.Models.Maps
{
    public class HistorialMedicoMap : IEntityTypeConfiguration<Historial>
    {
        public void Configure(EntityTypeBuilder<Historial> builder)
        {
            builder.ToTable("HistorialMedico", "dbo");
            builder.HasKey(x => x.IdHistorialMedico);
            builder.Property(x => x.IdHistorialMedico).HasColumnName("IdHistorialMedico");
            builder.Property(x => x.IdPaciente).HasColumnName("IdPaciente");
            builder.Property(x => x.Observaciones).HasColumnName("Observaciones");
            builder.Property(x => x.Fecha).HasColumnName("Fecha");
            builder.Property(x => x.UsuarioAgrega).HasColumnName("UsuarioAgrega");
            builder.Property(x => x.FechaAgrega).HasColumnName("FechaAgrega");
            builder.Property(x => x.UsuarioModifica).HasColumnName("UsuarioModifica");
            builder.Property(x => x.FechaModifica).HasColumnName("FechaModifica");
        }
    }
}
