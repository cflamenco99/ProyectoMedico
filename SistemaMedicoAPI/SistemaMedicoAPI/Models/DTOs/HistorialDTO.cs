using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SistemaMedicoAPI.Models.DTOs
{
    public class HistorialDTO
    {
        public int IdPaciente { get; set; }
        public string NombrePaciente { get; set; }
        public string ApellidoPaciente { get; set; }
        public string Pais { get; set; }
        public string Ciudad { get; set; }
        public DateTime FechaCita { get; set; }
        public string DoctorTurno { get; set; }
        public string Descripcion { get; set; }
    }
}

