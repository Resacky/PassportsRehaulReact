using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations;

namespace PassportsRehaulReact.Models
{
    public class Employees
    {
        public string name { get; set; }

        public string email { get; set; }

        public string cityphone { get; set; }

        public string cityCell { get; set; }

        public string radio { get; set; }

        public int idnum { get; set; }

    }
}
