using SistemaMedicoAPI.Commons;

namespace SistemaMedicoAPI.Models.DTOs
{
    public class CredencialesDTO
    {
        public string Correo { get; set; }
        private string _clave;

        public string Clave
        {
            get { return Encriptacion.Desencriptar(_clave); }
            set { _clave = Encriptacion.Encriptar(value); }
        }
    }
}
