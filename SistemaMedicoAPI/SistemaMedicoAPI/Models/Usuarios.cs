using Newtonsoft.Json.Linq;
using SistemaMedicoAPI.Commons;
using SistemaMedicoAPI.Models.DTOs;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace SistemaMedicoAPI.Models
{
    public class Usuarios
    {
        public Usuarios()
        {
        }

        public Usuarios(CredencialesDTO credencial)
        {
            Correo = credencial.Correo;
            Clave = Encriptacion.Encriptar(credencial.Clave);
        }

        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [Key]
        public int IdUsuario { get; set; }
        public string Correo { get; set; }
        public string Clave { get; set; }
    }
}
