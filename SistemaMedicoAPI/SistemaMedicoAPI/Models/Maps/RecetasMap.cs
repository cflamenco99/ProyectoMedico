using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Microsoft.EntityFrameworkCore;

namespace SistemaMedicoAPI.Models.Maps
{
    public class RecetasMap : IEntityTypeConfiguration<Recetas>
    {
        public void Configure(EntityTypeBuilder<Recetas> builder)
        {
            builder.ToTable("Recetas", "dbo");
            builder.HasKey(x => x.IdRecetas);
            builder.Property(x => x.IdRecetas).HasColumnName("IdRecetas");
            builder.Property(x => x.Diagnostico).HasColumnName("Diagnostico");
            builder.Property(x => x.Medicinas).HasColumnName("Medicinas");
            builder.Property(x => x.IdPaciente).HasColumnName("IdPaciente");

            builder.Property(x => x.UsuarioAgrega).HasColumnName("UsuarioAgrega");
            builder.Property(x => x.FechaAgrega).HasColumnName("FechaAgrega");
            builder.Property(x => x.UsuarioModifica).HasColumnName("UsuarioModifica");
            builder.Property(x => x.FechaModifica).HasColumnName("FechaModifica");
        }
    }
}
