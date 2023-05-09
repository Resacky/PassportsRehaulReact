using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Internal;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace PassportsRehaulReact.Models
{
    public class PassportFeesNew
    {
        public int? PPFEEID { get; set; }

        [Key]
        public int Sort { get; set; }

        [Column(TypeName = "nvarchar")]
        public string FeeDescription { get; set; }

        [Column(TypeName = "money")]
        public decimal? Minor { get; set; }

        [Column(TypeName = "money")]
        public decimal? Adult { get; set; }
    }
}
