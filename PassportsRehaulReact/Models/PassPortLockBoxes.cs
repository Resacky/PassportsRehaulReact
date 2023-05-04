using Microsoft.EntityFrameworkCore.Metadata.Internal;
using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace PassportsRehaulReact.Models
{
    public class PassPortLockBoxes
    {
        [Key]
        public int LOCKBOXID { get; set; }

        [Column(TypeName = "char(50)")]
        public int LBoxDescription { get; set; }
    }
}
