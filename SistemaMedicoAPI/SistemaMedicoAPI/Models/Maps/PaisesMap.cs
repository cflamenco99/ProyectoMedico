using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Microsoft.EntityFrameworkCore;

namespace SistemaMedicoAPI.Models.Maps
{
    public class PaisesMap : IEntityTypeConfiguration<Paises>
    {
        public void Configure(EntityTypeBuilder<Paises> builder)
        {
            builder.ToTable("Paises", "dbo");
            builder.HasKey(x => x.IdPais);
            builder.Property(x => x.IdPais).HasColumnName("IdPais");
            builder.Property(x => x.Descripcion).HasColumnName("Descripcion");
            builder.Property(x => x.UsuarioAgrega).HasColumnName("UsuarioAgrega");
            builder.Property(x => x.FechaAgrega).HasColumnName("FechaAgrega");
            builder.Property(x => x.UsuarioModifica).HasColumnName("UsuarioModifica");
            builder.Property(x => x.FechaModifica).HasColumnName("FechaModifica");
        }
    }
}
