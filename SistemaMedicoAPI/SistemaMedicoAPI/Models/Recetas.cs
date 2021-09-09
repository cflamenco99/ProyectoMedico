using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace SistemaMedicoAPI.Models
{
    public class Recetas
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [Key]

        public int IdRecetas { get; set; }

        [ForeignKey("Pacientes")]
        public int IdPaciente { get; set; }

        public string Medicinas { get; set; }

        public string Diagnostico { get; set; }

        [ForeignKey("Citas")]
        public int IdCita { get; set; }

    }
}
