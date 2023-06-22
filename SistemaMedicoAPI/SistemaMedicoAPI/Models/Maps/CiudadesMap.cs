using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Microsoft.EntityFrameworkCore;

namespace SistemaMedicoAPI.Models.Maps
{
    public class CiudadesMap : IEntityTypeConfiguration<Ciudades>
    {
        public void Configure(EntityTypeBuilder<Ciudades> builder)
        {
            builder.ToTable("Ciudades", "dbo");
            builder.HasKey(x => x.IdCiudad);
            builder.Property(x => x.IdCiudad).HasColumnName("IdCiudad");
            builder.Property(x => x.Descripcion).HasColumnName("Descripcion");
            builder.Property(x => x.IdPais).HasColumnName("IdPais");
            builder.Property(x => x.UsuarioAgrega).HasColumnName("UsuarioAgrega");
            builder.Property(x => x.FechaAgrega).HasColumnName("FechaAgrega");
            builder.Property(x => x.UsuarioModifica).HasColumnName("UsuarioModifica");
            builder.Property(x => x.FechaModifica).HasColumnName("FechaModifica");
        }
    }
}
