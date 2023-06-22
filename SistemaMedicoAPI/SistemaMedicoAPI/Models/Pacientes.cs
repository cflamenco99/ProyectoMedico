using System;

namespace SistemaMedicoAPI.Models
{
    public class Pacientes
    {
        public int IdPaciente { get; set; }
        public string Nombres { get; set; }
        public string Apellidos { get; set; }        
        public int CodigoPostal { get; set; }
        public string Direccion { get; set; }
        public DateTime FechaNacimiento { get; set; }
        public int IdCiudad { get; set; }
        public int UsuarioAgrega { get; set; } = 3;
        public DateTime FechaAgrega { get; set; } = DateTime.Now;
        public int? UsuarioModifica { get; set; }
        public DateTime? FechaModifica { get; set; }
    }
} 
