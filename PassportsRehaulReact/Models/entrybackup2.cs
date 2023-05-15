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

        [Column(TypeName = "nchar")]
        public string? ZipCode { get; set; }

        [Column(TypeName = "char")]
        public string? Phone { get; set; }

        [Column(TypeName = "bit")]
        public bool? RegularPass { get; set; }

        [Column(TypeName = "bit")]
        public bool? NoFeePass { get; set; }

        [Column(TypeName = "bit")]
        public bool? AmendedPass { get; set; }

        [Column(TypeName = "char")]
        public string? LBoxDescription { get; set; }

        [Column(TypeName = "float")]
        public float? ARSSD { get; set; }

        [Column(TypeName = "money")]
        public decimal? PassPortFee { get; set; }

        [Column(TypeName = "money")]
        public decimal? PassPortFeeCG { get; set; }

        [Column(TypeName = "money")]
        public decimal? ARSCG { get; set; }

        [Column(TypeName = "float")]
        public float? PhotosFee { get; set; }

        [Column(TypeName = "float")]
        public float? CheckSD { get; set; }

        [Column(TypeName = "datetime")]
        public DateTime? Departure { get; set; }

        [Column(TypeName = "datetime")]
        public DateTime? Created { get; set; }

        [Column(TypeName = "nchar")]
        public string? CreatedBy { get; set; }

        [Column(TypeName = "float")]
        public float? cash { get; set; }

        [Column(TypeName = "float")]
        public float? total { get; set; }

        [Column(TypeName = "char")]
        public char? regular { get; set; }

        [Column(TypeName = "char")]
        public char? nofee { get; set; }

        [Column(TypeName = "char")]
        public char? amended { get; set; }
    }
}
