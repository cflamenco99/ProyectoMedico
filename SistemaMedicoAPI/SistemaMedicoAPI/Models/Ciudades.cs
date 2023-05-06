using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace SistemaMedicoAPI.Models
{
    public class Ciudades
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [Key]
        public int IdCiudad { get; set; }
        public string Descripcion { get; set; }

        public virtual Paises Paises { get; set; } 

        [ForeignKey("Paises")]
        public int IdPais { get; set; }
        [ForeignKey("Usuarios")]
        public int UsuarioAgrega { get; set; }

        [Column(TypeName = "Date")]
        public DateTime FechaAgrega { get; set; }
        [ForeignKey("Usuarios")]
        public int UsuarioModifica { get; set; }

        [Column(TypeName = "Date")]
        public DateTime FechaModifica { get; set; }
        public virtual Usuarios Usuarios { get; set; }
    }
}
