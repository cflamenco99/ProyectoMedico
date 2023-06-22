using System;

namespace SistemaMedicoAPI.Models
{
    public class Ciudades
    {
        public int IdCiudad { get; set; }
        public string Descripcion { get; set; }
        public int IdPais { get; set; }
        public int UsuarioAgrega { get; set; } = 3;
        public DateTime FechaAgrega { get; set; } = DateTime.Now;
        public int? UsuarioModifica { get; set; }
        public DateTime? FechaModifica { get; set; }
    }
}
