using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using SistemaMedicoAPI.Models;
using SistemaMedicoAPI.Models.DTOs;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SistemaMedicoAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsuariosController : ControllerBase
    {
        private SistemaMedicoDBContext _db;
        private readonly ILogger<UsuariosController> _logger;

        public UsuariosController(ILogger<UsuariosController> logger, SistemaMedicoDBContext db)
        {
            _logger = logger;
            _db = db;
        }

        // POST: api/Usuarios
        [HttpPost]
        public ActionResult<CredencialesDTO> IniciarSesion(CredencialesDTO credenciales)
        {
            try
            {
                Usuarios usuario = _db.Usuarios.Where(x => x.Correo == credenciales.Correo && x.Clave == credenciales.Clave).FirstOrDefault();
                if (usuario != null)
                {
                    return Ok("Inicio de sesion exitoso.");
                }
                return NotFound("Usuario o contraseña incorrectos.");                
            }
            catch (Exception ex)
            {
                _logger.LogError(ex.Message);
                return BadRequest(ex.Message);
            }
        }
    }
}
