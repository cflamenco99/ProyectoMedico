using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using SistemaMedicoAPI.Models;
using SistemaMedicoAPI.Models.DTOs;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;


namespace SistemaMedicoAPI.Controllers
{
    [EnableCors(Startup.PolicyCORS)]
    [Route("api/[controller]")]
    [ApiController]
    public class PacientesController : ControllerBase
    {
        private SistemaMedicoDBContext _db;
        private readonly ILogger<PacientesController> _logger;

        public PacientesController(ILogger<PacientesController> logger, SistemaMedicoDBContext db) 
        {
            _logger = logger;
            _db = db;
        }

        // GET: api/Pacientes
        [HttpGet]
        public async Task<ActionResult<IEnumerable<PacienteDTO>>> ObtenerPacientes()
        {
            try
            {
                var result = from p in _db.Pacientes
                             select new PacienteDTO
                             {
                                 IdPaciente = p.IdPaciente,
                                 Nombres = p.Nombres,
                                 Apellidos = p.Apellidos,
                                 IdCiudad = p.IdCiudad,
                                 CodigoPostal = p.CodigoPostal,
                                 Direccion = p.Direccion,
                                 FechaNacimiento = p.FechaNacimiento
                             };               
                return Ok(await result.ToListAsync());
            }
            catch (Exception ex)
            {
                _logger.LogError(ex.Message);
                return BadRequest(ex.Message);
            }
        }

        // GET api/Pacientes/5
        [HttpGet("{id}")]
        public async Task<ActionResult<PacienteDTO>> ObtenerPacientePorId(int id)
        {
            Pacientes PacienteEF = await _db.Pacientes.FindAsync(id);

            if (PacienteEF != null)
            {
                PacienteDTO PacienteDTO = new PacienteDTO
                {
                    IdPaciente = PacienteEF.IdPaciente,
                    Nombres = PacienteEF.Nombres,
                    Apellidos = PacienteEF.Apellidos,
                    IdCiudad = PacienteEF.IdCiudad,
                    CodigoPostal = PacienteEF.CodigoPostal,
                    Direccion = PacienteEF.Direccion,
                    FechaNacimiento = PacienteEF.FechaNacimiento
                };
                return PacienteDTO;
            }
            else
                return NotFound();
        }

        // POST api/Pacientes
        [HttpPost]
        public async Task<ActionResult<PacienteDTO>> AgregarPaciente(PacienteDTO paciente)
        {
            try
            {
                Pacientes Paciente = new Pacientes
                {
                    Nombres = paciente.Nombres,
                    Apellidos = paciente.Apellidos,
                    IdCiudad = paciente.IdCiudad,
                    CodigoPostal = paciente.CodigoPostal,
                    Direccion = paciente.Direccion,
                    FechaNacimiento = paciente.FechaNacimiento
                };

                _db.Pacientes.Add(Paciente);
                int result = await _db.SaveChangesAsync();
                if (result > 0)
                {
                    return CreatedAtAction("AgregarPaciente", new { status = "Agregado exitosamente" });
                }
                else
                {
                    return BadRequest("Ocurrio un problema al agregar el paciente");
                }
            }
            catch (Exception ex)
            {
                _logger.LogError(ex.Message);
                return BadRequest(ex.Message);
            }
        }

        // PUT api/Pacientes/5
        [HttpPut("{id}")]
        public async Task<ActionResult<PacienteDTO>> EditarPaciente(PacienteDTO paciente)
        {
            try
            {
                Pacientes pacienteEF = _db.Pacientes.Find(paciente.IdPaciente);
                if (pacienteEF != null)
                {
                    pacienteEF.Nombres = paciente.Nombres;
                    pacienteEF.Apellidos = paciente.Apellidos;
                    pacienteEF.IdCiudad = paciente.IdCiudad;
                    pacienteEF.CodigoPostal = paciente.CodigoPostal;
                    pacienteEF.Direccion = paciente.Direccion;
                    pacienteEF.FechaNacimiento = pacienteEF.FechaNacimiento;
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
                    return NotFound($"No hemos encontrado un paciente con el id {paciente.IdPaciente}");
                }
            }
            catch (Exception ex)
            {
                _logger.LogError(ex.Message);
                return BadRequest(ex.Message);
            }
        }

        // DELETE api/Pacientes/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<PacienteDTO>> EliminarPaciente(int id)
        {
            try
            {
                Pacientes pacienteEF = _db.Pacientes.Find(id);
                if (pacienteEF != null)
                {
                    _db.Pacientes.Remove(pacienteEF);
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
