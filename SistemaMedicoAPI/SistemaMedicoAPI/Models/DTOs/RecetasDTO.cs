using System;

namespace SistemaMedicoAPI.Models.DTOs
{
    public class RecetasDTO
    {
        public int IdRecetas { get; set; }
        public string Diagnostico { get; set; }
        public string Medicinas { get; set; }
        public int IdPaciente { get; set; }
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
 