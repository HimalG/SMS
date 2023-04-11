using Microsoft.Identity.Client;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace SMS.Models.Students
{
    [Table("Student")]
    public class Student
    {
        [Key]
        public int Id { get; set; }
        [Required]
        public string Name { get; set; }
        public string? Address { get; set; }
    }
}
