using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace OMDBAPI.Models
{
    class Movie
    {
        [Key]
        public string ImdbID { get; set; }
        public string Title { get; set; }
        public string Year { get; set; }
        public string Poster { get; set; }
    }
}
