
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace SistemaMedicoAPI.Models
{
    public class Historial
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [Key]
        public int IdPaciente { get; set; }
        public string NombrePaciente { get; set; }
        public string ApellidoPaciente { get; set; }
        public string Pais { get; set; }
        public string  Ciudad { get; set; }
        [Column(TypeName = "Date")]
        public  DateTime FechaCita { get; set; }
        public string DoctorTurno { get; set; }
        public string Descripcion { get; set; }
    }
}
