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

        public string CodeNo { get; set; }

        public string AdmissionYear { get; set; }

        public string Class { get; set; }

        public string Section { get; set; }

        public string Prefix { get; set; }

        public string FirstName { get; set; }

        public string MiddleName { get; set; }

        public string LastName { get; set; }

        public string DOB { get; set; }

        public string Disability { get; set; }

        public string BloodGroup { get; set; }

        public string Gender { get; set; }

        public string Nationality { get; set; }

        public int Caste { get; set; }

        public int Religion { get; set; }

        public int? MotherTongue { get; set; }

        public string Scholarship { get; set; }

        public int Route { get; set; }

        public bool IsVeg { get; set; }

        public string ECAHouse { get; set; }

        public string CCAClub { get; set; }

        public int AddedBy { get; set; }

        public DateTime AddedOn { get; set; }

        public bool? IsModified { get; set; }

        public int? ModifiedBy { get; set; }

        public DateTime? ModifiedOn { get; set; }

        public bool IsDeleted { get; set; }

        public int? DeletedBy { get; set; }

        public DateTime? DeletedOn { get; set; }

    }
}
