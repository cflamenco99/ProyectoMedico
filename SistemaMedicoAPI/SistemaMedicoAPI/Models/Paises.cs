using System;
using System.Collections.Generic;

namespace SistemaMedicoAPI.Models
{
    public class Paises
    {
        public int IdPais { get; set; }
        public string Descripcion { get; set; }
        public int UsuarioAgrega { get; set; } = 3;
        public DateTime FechaAgrega { get; set; } = DateTime.Now;
        public int? UsuarioModifica { get; set; }
        public DateTime? FechaModifica { get; set; }
    }
}
