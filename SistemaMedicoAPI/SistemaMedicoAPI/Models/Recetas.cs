using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace SistemaMedicoAPI.Models
{
    public class Recetas
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [Key]

        public int IdRecetas { get; set; }

        [ForeignKey("IdPaciente")]
        public int IdPaciente { get; set; }

        public string Medicinas { get; set; }

        public string Diagnostico { get; set; }

        public virtual Pacientes Pacientes { get; set; }
        [ForeignKey("IdUsuario")]
        public int UsuarioAgrega { get; set; }

        [Column(TypeName = "Date")]
        public DateTime FechaAgrega { get; set; }
        [ForeignKey("IdUsuario")]
        public int UsuarioModifica { get; set; }

        [Column(TypeName = "Date")]
        public DateTime FechaModifica { get; set; }
        public virtual Usuarios Usuarios { get; set; }
    }
}
