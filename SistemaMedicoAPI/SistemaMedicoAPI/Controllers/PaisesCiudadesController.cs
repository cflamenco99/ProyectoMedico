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

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace SistemaMedicoAPI.Controllers
{
    [EnableCors(Startup.PolicyCORS)]
    [Route("api/[controller]")]
    [ApiController]
    public class PaisesCiudadesController : ControllerBase
    {
        private SistemaMedicoDBContext _db;
        private readonly ILogger<PaisesCiudadesController> _logger;

        public PaisesCiudadesController(ILogger<PaisesCiudadesController> logger, SistemaMedicoDBContext db)
        {
            _logger = logger;
            _db = db;
        }

        // GET: api/<PaisesCiudadesController>
        [HttpGet]
        public async Task<ActionResult<IEnumerable<PaisesDTO>>> ObtenerPaises()
        {
            try
            {
                var result = from p in _db.Paises
                             select new PaisesDTO
                             {
                                 IdPais = p.IdPais,
                                 Descripcion = p.Descripcion
                             };
                return Ok(await result.ToListAsync());
            }
            catch (Exception ex)
            {
                _logger.LogError(ex.Message);
                return BadRequest(ex.Message);
            }
        }

        // GET api/<PaisesCiudadesController>/5
        [HttpGet("{id}")]
        public async Task<ActionResult<IEnumerable<CiudadesDTO>>> ObtenerCiudadesPorPais(int id)
        {
            try
            {
                var result = from c in _db.Ciudades
                             where c.IdPais == id
                             select new CiudadesDTO
                             {
                                 IdCiudad = c.IdCiudad,
                                 Descripcion = c.Descripcion                                 
                             };
                return Ok(await result.ToListAsync());
            }
            catch (Exception ex)
            {
                _logger.LogError(ex.Message);
                return BadRequest(ex.Message);
            }
        }

    }
}
