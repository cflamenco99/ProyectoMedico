using System;

namespace SistemaMedicoAPI.Models.DTOs
{
    public class HistorialDTO
    {
        public int IdHistorialMedico { get; set; }
        public int IdPaciente { get; set; }
        public string Observaciones { get; set; }
        public DateTime FechaCita { get; set; }
        public string Nombres { get; set; }
        public string Apellidos { get; set; }
        public int IdCiudad { get; set; }
        public int UsuarioAgrega { get; set; }
        public DateTime FechaAgrega { get; set; }
        public int UsuarioModifica { get; set; }
        public DateTime FechaModifica { get; set; }
    }
}