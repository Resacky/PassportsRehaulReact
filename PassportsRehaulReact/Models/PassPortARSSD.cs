using Microsoft.EntityFrameworkCore.Metadata.Internal;
using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;


namespace PassportsRehaulReact.Models
{
    public class PassPortARSSD
    {
        [Key]
        public int PPARSIDSD { get; set; }

        public int sort { get; set; }

        [Column(TypeName = "nchar")]
        public string ARSDescription { get; set; }

        [DataType(DataType.Currency)]
        [Required]
        public decimal ARSFee { get; set; }
    }
}
