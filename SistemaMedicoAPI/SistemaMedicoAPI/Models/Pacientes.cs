using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace SistemaMedicoAPI.Models
{
    public class Pacientes
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [Key]
        public int IdPaciente { get; set; }
        public string Nombres { get; set; }
        public string Apellidos { get; set; }
        public virtual Ciudades Ciudades { get; set; }

        [ForeignKey("Ciudades")]
        public int IdCiudad { get; set; }
        public int CodigoPostal { get; set; }
        public string Direccion { get; set; }
        [Column(TypeName = "Date")]
        public DateTime FechaNacimiento { get; set; }
        [ForeignKey("Usuarios")]
        public int UsuarioAgrega { get; set; }

        [Column(TypeName = "Date")]
        public DateTime FechaAgrega { get; set; }
        [ForeignKey("Usuarios")]
        public int UsuarioModifica { get; set; }

        [Column(TypeName = "Date")]
        public DateTime FechaModifica { get; set; }
        public virtual Usuarios Usuarios { get; set; }
    }
} 
