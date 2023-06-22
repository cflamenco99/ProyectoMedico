using System;

namespace SistemaMedicoAPI.Models
{
    public class Historial
    {
        public int IdHistorialMedico { get; set; }
        public int IdPaciente { get; set; }        
        public string Observaciones { get; set; }
        public  DateTime Fecha { get; set; }
        public int UsuarioAgrega { get; set; } = 3;
        public DateTime FechaAgrega { get; set; } = DateTime.Now;
        public int? UsuarioModifica { get; set; }
        public DateTime? FechaModifica { get; set; }
    }
}
