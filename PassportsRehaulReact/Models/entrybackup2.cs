using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Internal;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace PassportsRehaulReact.Models
{
    public class entrybackup2
    {
        [Key]
        public int ENTRYID { get; set; }

        [Column(TypeName = "char")]
        public string? AppFirst { get; set; }

        [Column(TypeName = "char")]
        public string? AppMiddle { get; set; }

        [Column(TypeName = "char")]
        public string? AppLast { get; set; }

        [Column(TypeName = "datetime")]
        public DateTime? DOB { get; set; }

        [Column(TypeName = "char")]
        public string? Phone { get; set; }

        [Column(TypeName = "char")]
        public string? LBoxDescription { get; set; }

        [Column(TypeName = "money")]
        public decimal? PassPortFee { get; set; }

        [Column(TypeName = "datetime")]
        public DateTime? Created { get; set; }

        [Column(TypeName = "nchar")]
        public string? CreatedBy { get; set; }

        [Column(TypeName = "decimal")]
        public decimal? total { get; set; }

        [Column(TypeName = "decimal")]
        public decimal? ARSSD { get; set; }

        [Column(TypeName = "decimal")]
        public decimal? CheckSD { get; set; }
    }
    public class SearchParameters
    {
        public string? AppFirst { get; set; }
        public string? AppLast { get; set; }
        public DateTime? DOB { get; set; }
        public string? Phone { get; set; }
        public string? CreatedBy { get; set; }
    }
}
