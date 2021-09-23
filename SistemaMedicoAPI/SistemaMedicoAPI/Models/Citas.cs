using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace SistemaMedicoAPI.Models
{
    public class Citas
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [Key]
        public int IdCita { get; set; }

        [ForeignKey("Pacientes")]
        public int IdPaciente { get; set; }

        [Column(TypeName = "Date")]
        public DateTime FechaCita { get; set; }

        public virtual Pacientes Pacientes { get; set; }
    }
}
