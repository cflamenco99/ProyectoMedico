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
    public class HistorialController : ControllerBase
    {
        private SistemaMedicoDBContext _db;
        private readonly ILogger<HistorialController> _logger;

        public HistorialController(ILogger<HistorialController> logger, SistemaMedicoDBContext db)
        {
            _logger = logger;
            _db = db;
        }

        // GET: api/<HistorialController>
        [HttpGet]
        public async Task<ActionResult<IEnumerable<HistorialDTO>>> ObtenerHistorial()
        {
            try
            {
                var result = from h in _db.HistorialMedico
                             select new HistorialDTO
                             {
                                 IdPaciente = h.IdPaciente,
                                 NombrePaciente = h.NombrePaciente,
                                 ApellidoPaciente = h.ApellidoPaciente,
                                 Pais = h.Pais,
                                 Ciudad = h.Ciudad,
                                 FechaCita = h.FechaCita,
                                 DoctorTurno = h.DoctorTurno,
                                 Descripcion = h.Descripcion
                             };
                return Ok(await result.ToListAsync());
            }
            catch (Exception ex)
            {
                _logger.LogError(ex.Message);
                return BadRequest(ex.Message);
            }
        }

        // GET api/<HistorialController>/
        [HttpGet("{id}")]
        public async Task<ActionResult<HistorialDTO>> ObtenerHistorialPorID(int id)
        {
            Historial HistorialEF = await _db.HistorialMedico.FindAsync(id);

            if (HistorialEF != null)
            {
                HistorialDTO HistorialDTO = new HistorialDTO
                {
                    IdPaciente = HistorialEF.IdPaciente,
                    NombrePaciente = HistorialEF.NombrePaciente,
                    ApellidoPaciente = HistorialEF.ApellidoPaciente,
                    Pais = HistorialEF.Pais,
                    Ciudad = HistorialEF.Ciudad,
                    FechaCita = HistorialEF.FechaCita,
                    DoctorTurno = HistorialEF.DoctorTurno,
                    Descripcion = HistorialEF.Descripcion
                };
                return HistorialDTO;
            }
            else
                return BadRequest("No existe Historial Medico para este Paciente");
        }

    }
}

