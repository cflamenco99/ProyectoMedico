using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

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
        
    }
}
