using Microsoft.EntityFrameworkCore.Metadata.Internal;
using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;


namespace PassportsRehaulReact.Models
{
    public class PassPortFees
    {
        [Key]
        public int PPFEEID { get; set; }

        public int sort { get; set; }

        [Column(TypeName = "varchar(50)")]
        public string FeeDescription { get; set; }

        [DataType(DataType.Currency)]
        [Required]
        public decimal FeeAmtSD { get; set; }

        [DataType(DataType.Currency)]
        [Required]
        public decimal FeeAmtCG { get; set; }

    }
}
