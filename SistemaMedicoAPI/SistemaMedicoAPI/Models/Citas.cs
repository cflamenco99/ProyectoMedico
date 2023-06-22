using System;

namespace SistemaMedicoAPI.Models
{
    public class Citas
    {
        public int IdCita { get; set; }
        public DateTime FechaCita { get; set; }
        public int IdPaciente { get; set; }        
        public int UsuarioAgrega { get; set; } = 3;
        public DateTime FechaAgrega { get; set; } = DateTime.Now;
        public int? UsuarioModifica { get; set; }
        public DateTime? FechaModifica { get; set; }
    }
}
