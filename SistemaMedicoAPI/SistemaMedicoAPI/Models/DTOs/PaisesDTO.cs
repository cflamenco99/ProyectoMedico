using System;

namespace SistemaMedicoAPI.Models.DTOs
{
    public class PaisesDTO
    {
        public int IdPais { get; set; }
        public string Descripcion { get; set; }
        public int UsuarioAgrega { get; set; }
        public DateTime FechaAgrega { get; set; }
        public int UsuarioModifica { get; set; }
        public DateTime FechaModifica { get; set; }
    }
}
