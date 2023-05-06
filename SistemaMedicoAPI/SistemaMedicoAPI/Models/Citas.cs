using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace SistemaMedicoAPI.Models
{
    public class Citas
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [Key]
        public int IdCita { get; set; }

        [ForeignKey("Pacientes")]
        public int IdPaciente { get; set; }

        [Column(TypeName = "Date")]
        public DateTime FechaCita { get; set; }

        public virtual Pacientes Pacientes { get; set; }


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
