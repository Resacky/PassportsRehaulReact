using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Internal;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace PassportsRehaulReact.Models
{
    public class PassPortFees
    {
        [Key]
        public int PPFEEID { get; set; }

        public int? Sort { get; set; }

        [Column(TypeName = "varchar")]
        public string FeeDescription { get; set; }

        [Column(TypeName = "money")]
        public decimal? FeeAmtSD { get; set; }

        [Column(TypeName = "money")]
        public decimal? FeeAmtCG { get; set; }

    }
}
