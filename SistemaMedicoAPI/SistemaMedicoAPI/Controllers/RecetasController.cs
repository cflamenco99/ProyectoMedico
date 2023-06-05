using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using SistemaMedicoAPI.Models;
using SistemaMedicoAPI.Models.DTOs;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace SistemaMedicoAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RecetasController : ControllerBase
    {
        private SistemaMedicoDBContext _db;
        private readonly ILogger<RecetasController> _logger;

        public RecetasController(ILogger<RecetasController> logger, SistemaMedicoDBContext db)
        {
            _logger = logger;
            _db = db;
        }

        // GET: api/<RecetasController>
        [HttpGet]
        public async Task<ActionResult<IEnumerable<RecetasDTO>>> ObtenerReceta()
        {
            try
            {
                var result = from r in _db.Recetas
                             select new RecetasDTO
                             {
                                 IdRecetas = r.IdRecetas,
                                 IdPaciente = r.IdPaciente,
                                 Nombres = r.Pacientes.Nombres,
                                 Apellidos = r.Pacientes.Apellidos,
                                 Direccion = r.Pacientes.Direccion,
                                 FechaNacimiento = r.Pacientes.FechaNacimiento,
                                 Medicinas = r.Medicinas,
                                 Diagnostico = r.Diagnostico,

                             };
                return Ok(await result.ToListAsync());
            }
            catch (Exception ex)
            {
                _logger.LogError(ex.Message);
                return BadRequest(ex.Message);
            }
        }

        // GET api/<RecetasController>/5
        [HttpGet("{id}")]
        public async Task<ActionResult<RecetasDTO>> ObtenerRecetaPorId(int id)
        {
            Recetas RecetasEF = await _db.Recetas.FindAsync(id);

            if (RecetasEF != null)
            {
                RecetasDTO RecetasDTO = new RecetasDTO
                {

                    IdPaciente = RecetasEF.IdPaciente,
                    Nombres = _db.Pacientes.Where(x => x.IdPaciente == RecetasEF.IdPaciente).Select(x => x.Nombres).FirstOrDefault(),
                    Apellidos = _db.Pacientes.Where(x => x.IdPaciente == RecetasEF.IdPaciente).Select(x => x.Apellidos).FirstOrDefault(),
                    Direccion = _db.Pacientes.Where(x => x.IdPaciente == RecetasEF.IdPaciente).Select(x => x.Direccion).FirstOrDefault(),
                    FechaNacimiento = _db.Pacientes.Where(x => x.IdPaciente == RecetasEF.IdPaciente).Select(x => x.FechaNacimiento).FirstOrDefault(),
                    IdRecetas = RecetasEF.IdRecetas,
                    Medicinas = RecetasEF.Medicinas,
                    Diagnostico = RecetasEF.Diagnostico,


                };
                return RecetasDTO;
            }
            else
                return NotFound();
        }

        // POST api/<RecetasController>
        [HttpPost]
        public async Task<ActionResult<RecetasDTO>> AgregarReceta(RecetasDTO receta)
        {
            try
            {
                Recetas Receta = new Recetas
                {

                    IdPaciente = receta.IdPaciente,
                    Medicinas = receta.Medicinas,
                    Diagnostico = receta.Diagnostico,

                };

                _db.Recetas.Add(Receta);
                int result = await _db.SaveChangesAsync();
                if (result > 0)
                {
                    return Ok(new { status = "Agregado exitosamente" });
                }
                else
                {
                    return BadRequest("Ocurrio un problema al agregar el receta");
                }
            }
            catch (Exception ex)
            {
                _logger.LogError(ex.Message);
                return BadRequest(ex.Message);
            }
        }

        // PUT api/<RecetasController>/
        [HttpPut("{id}")]
        public async Task<ActionResult<RecetasDTO>> EditarReceta(int id, RecetasDTO receta)
        {
            try
            {
                Recetas recetaEF = _db.Recetas.Find(id);
                if (recetaEF != null)
                {

                    recetaEF.Medicinas = receta.Medicinas;
                    recetaEF.Diagnostico = receta.Diagnostico;

                    int result = await _db.SaveChangesAsync();
                    if (result > 0)
                    {
                        return Ok(new { status = "Modificado exitosamente" });
                    }
                    else
                    {
                        return StatusCode(500);
                    }
                }
                else
                {
                    return NotFound($"No hemos encontrado un paciente con el id {receta.IdRecetas}");
                }
            }
            catch (Exception ex)
            {
                _logger.LogError(ex.Message);
                return BadRequest(ex.Message);
            }
        }

        // DELETE api/<RecetasController>/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<RecetasDTO>> EliminarReceta(int id)
        {
            try
            {
                Recetas recetaEF = _db.Recetas.Find(id);
                if (recetaEF != null)
                {
                    _db.Recetas.Remove(recetaEF);
                    int result = await _db.SaveChangesAsync();
                    if (result > 0)
                    {
                        return Ok(new { status = "Eliminado exitosamente" });
                    }
                    else
                    {
                        return StatusCode(500);
                    }
                }
                else
                {
                    return NotFound($"No hemos encontrado un paciente con el id {id}");
                }
            }
            catch (Exception ex)
            {
                _logger.LogError(ex.Message);
                return BadRequest(ex.Message);
            }
        }
    }
}
