using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SistemaMedicoAPI.Models.DTOs
{
    public class CitasDTO
    {
        public int IdCita { get; set; }
        public int IdPaciente { get; set; }
        public DateTime FechaCita { get; set; }

    }
}
