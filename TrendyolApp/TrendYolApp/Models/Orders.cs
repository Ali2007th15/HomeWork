﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TrendyolApp.Models
{
    public class Orders
    {
        [Key]
        public int Id { get; set; }
        [Required, ForeignKey("Users")]
        public int UserId { get; set; }
        public User Users { get; set; }
        [Required, ForeignKey("Goods")]
        public int GoodsId {  get; set; }
        public Goods Goods { get; set; }
        [Required]
        public int GoodsCount { get; set;}
        [Required]
        public string Status { get; set; }
    }
}
