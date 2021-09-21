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
    public class CitasController : ControllerBase
    {
        private SistemaMedicoDBContext _db;
        private readonly ILogger<CitasController> _logger;

        public CitasController(ILogger<CitasController> logger, SistemaMedicoDBContext db)
        {
            _logger = logger;
            _db = db;
        }

        // GET: api/<CitasController>
        [HttpGet]
        public async Task<ActionResult<IEnumerable<CitasDTO>>> ObtenerCita()
        {
            try
            {
                var result = from c in _db.Citas
                             select new CitasDTO
                             {
                                 IdCita = c.IdCita,
                                 IdPaciente = c.IdPaciente,
                                 FechaCita = c.FechaCita
                             };
                return Ok(await result.ToListAsync());
            }
            catch (Exception ex)
            {
                _logger.LogError(ex.Message);
                return BadRequest(ex.Message);
            }
        }

        // GET api/<CitasController>/5
        [HttpGet("{id}")]
        public async Task<ActionResult<CitasDTO>> ObtenerCitaId(int id)
        {
            Citas CitasEF = await _db.Citas.FindAsync(id);

            if (CitasEF != null)
            {
                CitasDTO CitasDTO = new CitasDTO
                {
                    IdCita = CitasEF.IdCita,
                    IdPaciente = CitasEF.IdPaciente,
                    FechaCita = CitasEF.FechaCita
                };
                return CitasDTO;
            }
            else
                return NotFound();
        }

        // POST api/<CitasController>
        [HttpPost]
        public async Task<ActionResult<CitasDTO>> AgregarCita(CitasDTO cita)
        {
            try
            {
                Citas Cita = new Citas
                {
                    IdCita = cita.IdCita,
                    IdPaciente = cita.IdPaciente,
                    FechaCita = cita.FechaCita
                };

                _db.Citas.Add(Cita);
                int result = await _db.SaveChangesAsync();
                if (result > 0)
                {
                    return CreatedAtAction("AgregarCita", new { status = "Agregado exitosamente" });
                }
                else
                {
                    return BadRequest("Ocurrio un problema al agregar la cita");
                }
            }
            catch (Exception ex)
            {
                _logger.LogError(ex.Message);
                return BadRequest(ex.Message);
            }
        }

        // PUT api/<CitasController>/5
        [HttpPut("{id}")]
        public async Task<ActionResult<CitasDTO>> EditarCita(CitasDTO cita)
        {
            try
            {
                Citas citaEF = _db.Citas.Find(cita.IdCita);
                if (citaEF != null)
                {
                    citaEF.IdCita = cita.IdCita;
                    citaEF.IdPaciente = cita.IdPaciente;
                    citaEF.FechaCita = cita.FechaCita;
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
                    return NotFound($"No hemos encontrado una cita con el id {cita.IdCita}");
                }
            }
            catch (Exception ex)
            {
                _logger.LogError(ex.Message);
                return BadRequest(ex.Message);
            }
        }

        // DELETE api/<CitasController>/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<CitasDTO>> EliminarCita(int id)
        {
            try
            {
                Citas CitaEF = _db.Citas.Find(id);
                if (CitaEF != null)
                {
                    _db.Citas.Remove(CitaEF);
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
                    return NotFound($"No hemos encontrado una cita con el id {id}");
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
