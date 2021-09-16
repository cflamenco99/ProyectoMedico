using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SistemaMedicoAPI.Models.DTOs
{
    public class HistorialDTO
    {
        public int IdPaciente { get; set; }
        public string Nombres { get; set; }
        public string Apellidos { get; set; }
        public int IdCiudad { get; set; }
        public int IdCita { get; set; }
        public DateTime FechaCita { get; set; }
        public int IdRecetas { get; set; }
        public string Medicinas { get; set; }
        public string Diagnostico { get; set; }
}
}

