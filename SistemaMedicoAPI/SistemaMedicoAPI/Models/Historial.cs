using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace SistemaMedicoAPI.Models
{
    public class Historial
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [Key]
        public int IdHistorialMedico { get; set; }
        [ForeignKey("Pacientes")]
        public int IdPaciente { get; set; }
        public virtual Pacientes Pacientes { get; set; }
        public string Observaciones { get; set; }
        
        [Column(TypeName = "Date")]
        public  DateTime Fecha { get; set; }

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
