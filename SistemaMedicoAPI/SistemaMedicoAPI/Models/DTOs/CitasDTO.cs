using System;

namespace SistemaMedicoAPI.Models.DTOs
{
    public class CitasDTO
    {
        public int IdCita { get; set; }
        public int IdPaciente { get; set; }
        public DateTime FechaCita { get; set; }
        public string Nombres { get; set; }
        public string Apellidos { get; set; }
        public string Direccion { get; set; }
        public DateTime FechaNacimiento { get; set; }
        public int UsuarioAgrega { get; set; }
        public DateTime FechaAgrega { get; set; }
        public int UsuarioModifica { get; set; }
        public DateTime FechaModifica { get; set; }
    }
}