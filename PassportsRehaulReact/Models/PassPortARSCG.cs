using Microsoft.EntityFrameworkCore.Metadata.Internal;
using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;


namespace PassportsRehaulReact.Models
{
    public class PassPortARSCG
    {
        [Key]
        public int PPARSIDCG { get; set; }

        public int sort { get; set; }

        [Column(TypeName = "nchar")]
        public string ARSDescription { get; set; }

        [DataType(DataType.Currency)]
        [Required]
        public decimal ARSFee { get; set; }
    }
}
