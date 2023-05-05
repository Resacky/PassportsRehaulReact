using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Internal;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace PassportsRehaulReact.Models
{
    public class PassPortLockBoxes
    {
        [Key]
        public int LOCKBOXID { get; set; }

        [Column(TypeName = "char")]
        public string LBoxDescription { get; set; }
    }
}
