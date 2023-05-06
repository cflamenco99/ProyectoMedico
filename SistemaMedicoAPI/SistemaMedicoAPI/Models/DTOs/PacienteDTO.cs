using System;

namespace SistemaMedicoAPI.Models.DTOs
{
    public class PacienteDTO
    {       
        public int IdPaciente { get; set; }
        public string Nombres { get; set; }
        public string Apellidos { get; set; }
        public int IdCiudad { get; set; }
        public int CodigoPostal { get; set; }
        public string Direccion { get; set; }
        public DateTime FechaNacimiento { get; set; }
        public string Ciudad { get; set; }
        public string Pais { get; set; }
        public int IdPais { get; set; }
        public int UsuarioAgrega { get; set; }
        public DateTime FechaAgrega { get; set; }
        public int UsuarioModifica { get; set; }
        public DateTime FechaModifica { get; set; }
    }
}
