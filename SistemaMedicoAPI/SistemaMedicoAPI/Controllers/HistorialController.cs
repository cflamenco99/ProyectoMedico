using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using SistemaMedicoAPI.Models;
using SistemaMedicoAPI.Models.DTOs;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;


namespace SistemaMedicoAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class HistorialController : ControllerBase
    {
        private SistemaMedicoDBContext _db;

        public HistorialController(SistemaMedicoDBContext db)
        {
            _db = db;
        }

        // GET api/Historial/5
        [HttpGet("{id}")]
        public async Task<ActionResult<HistorialDTO>> ObtenerPacientePorId(int id)
        {
            Pacientes HistorialEF = await _db.Pacientes.FindAsync(id);

            if (HistorialEF != null)
            {
                HistorialDTO HistorialDTO = new HistorialDTO
                {
                    IdPaciente = HistorialEF.IdPaciente,
                    Nombres = HistorialEF.Nombres,
                    Apellidos = HistorialEF.Apellidos,
                    IdCiudad = HistorialEF.IdCiudad,    
                };

                return HistorialDTO;
            }
            else
                return BadRequest("No existe Historial Medico para este Paciente");
        }

        // GET api/Historial/citas/5
        [HttpGet("citas/{id}")]
        public async Task<ActionResult<List<Citas>>> ObtenerCitasPorID(int id)
        {
            List<Citas> HistorialEF = await _db.Citas.Where(x=> x.IdPaciente == id).ToListAsync();

            if (HistorialEF != null)
            {

                return HistorialEF;
            }
            else
                return NotFound();
        }
        // GET api/Historial/recetas/5
        [HttpGet("recetas/{id}")]
        public async Task<ActionResult<List<Recetas>>> ObtenerRecetasPorId(int id)
        {
            List<Recetas> HistorialEF = await _db.Recetas.Where(x => x.IdPaciente == id).ToListAsync();

            if (HistorialEF != null)
            {
                return HistorialEF;
            }
            else
                return NotFound();
        }

    }
}

