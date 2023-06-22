using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Microsoft.EntityFrameworkCore;

namespace SistemaMedicoAPI.Models.Maps
{
    public class UsuariosMap : IEntityTypeConfiguration<Usuarios>
    {
        public void Configure(EntityTypeBuilder<Usuarios> builder)
        {
            builder.ToTable("Usuarios", "dbo");
            builder.HasKey(x => x.IdUsuario);
            builder.Property(x => x.IdUsuario).HasColumnName("IdUsuario");
            builder.Property(x => x.Correo).HasColumnName("Correo");
            builder.Property(x => x.Clave).HasColumnName("Clave");
        }
    }
}
