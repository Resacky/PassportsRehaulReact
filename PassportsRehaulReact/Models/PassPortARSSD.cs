using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Internal;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace PassportsRehaulReact.Models
{
    public class PassPortARSSD
    {
        [Key]
        public int PPARSIDSD { get; set; }

        public int? Sort { get; set; }

        [Column(TypeName = "nchar")]
        public string ARSDescription { get; set; }

        [Column(TypeName = "money")]
        public decimal ARSFee { get; set; }
    }
}
