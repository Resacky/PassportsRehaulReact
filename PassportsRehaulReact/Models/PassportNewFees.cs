using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Internal;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace PassportsRehaulReact.Models
{
    public class PassportNewFees
    {
        [Key]
        public int? Sort { get; set; }

        [Column(TypeName = "varchar")]
        public string FeeDescription { get; set; }

        [Column(TypeName = "money")]
        public decimal? minor { get; set; }

        [Column(TypeName = "money")]
        public decimal? adult { get; set; }

    }
}
