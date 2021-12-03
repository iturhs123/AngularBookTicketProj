using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace AngularApiTest.Models
{
    public class Registration
    {
        [Key]
        public int Id { get; set; }

        [Required]
        [Column(TypeName = "varchar(16)")]
        public string UserName { get; set; }

        
        [Required]
        public long PhoneNo { get; set; }
        [Required]
        [Column(TypeName = "nvarchar(100)")]
        public string EmailId { get; set; }

        [Required]
        [Column(TypeName = "varchar(5)")]
        public int Age { get; set; }

       
    }
}
