using System;

namespace SistemaMedicoAPI.Models
{
    public class Recetas
    {
        public int IdRecetas { get; set; }
        public string Diagnostico { get; set; }
        public string Medicinas { get; set; }
        public int IdPaciente { get; set; }   
        public int UsuarioAgrega { get; set; } = 3;
        public DateTime FechaAgrega { get; set; } = DateTime.Now;
        public int? UsuarioModifica { get; set; }
        public DateTime? FechaModifica { get; set; }
    }
}
