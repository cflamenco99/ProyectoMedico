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

        // GET api/Pacientes/5
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
        public async Task<ActionResult<HistorialDTO>> ObtenerCitasPorID(int id)
        {
            Citas HistorialEF = await _db.Citas.FindAsync(id);

            if (HistorialEF != null)
            {
                HistorialDTO HistorialDTO = new HistorialDTO
                {
                    //IdPaciente = HistorialEF.IdPaciente,
                    IdCita = HistorialEF.IdCita,
                    FechaCita = HistorialEF.FechaCita,
                };

                return HistorialDTO;
            }
            else
                return NotFound();
        }
        public async Task<ActionResult<HistorialDTO>> ObtenerRecetasPorId(int id)
        {
            Recetas HistorialEF = await _db.Recetas.FindAsync(id);

            if (HistorialEF != null)
            {
                HistorialDTO HistorialDTO = new HistorialDTO
                {
                    //IdPaciente = HistorialEF.IdPaciente,
                    IdRecetas = HistorialEF.IdRecetas,
                    Medicinas = HistorialEF.Medicinas,
                    Diagnostico = HistorialEF.Diagnostico,
                };

                return HistorialDTO;
            }
            else
                return NotFound();
        }

        // GET api/<HistorialController>/
        // [HttpGet("{id}")]
        //public async Task<ActionResult<HistorialDTO>> ObtenerHistorialPorID(int id)
        //{
        //Historial HistorialEF = await _db.HistorialMedico.FindAsync(id);

        //  if (HistorialEF != null)
        //{
        //HistorialDTO HistorialDTO = new HistorialDTO
        //      {
        //IdPaciente = HistorialEF.IdPaciente,
        //NombrePaciente = HistorialEF.NombrePaciente,
        //ApellidoPaciente = HistorialEF.ApellidoPaciente,
        //Pais = HistorialEF.Pais,
        //Ciudad = HistorialEF.Ciudad,
        //FechaCita = HistorialEF.FechaCita,
        //DoctorTurno = HistorialEF.DoctorTurno,
        //Descripcion = HistorialEF.Descripcion
        //};
        //          return HistorialDTO;
        //}
        //      else
        //        return BadRequest("No existe Historial Medico para este Paciente");
        //}

    }
}

