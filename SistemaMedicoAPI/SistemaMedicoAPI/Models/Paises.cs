using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace SistemaMedicoAPI.Models
{
    public class Paises
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [Key]
        public int IdPais { get; set; }
        public string Descripcion { get; set; }
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
