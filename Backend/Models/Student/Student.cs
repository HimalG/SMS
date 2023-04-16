using Microsoft.Identity.Client;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace SMS.Models.Student
{
    [Table("Student")]
    public class Student
    {
        [Key]
        public int Id { get; set; }
        [Required]
        public string CodeNo { get; set; }
        [Required]
        public string AdmissionYear { get; set; }
        [Required]
        public string Class { get; set; }

        public string Section { get; set; }
        [Required]
        public string Prefix { get; set; }
        [Required]
        public string FirstName { get; set; }

        public string MiddleName { get; set; }
        [Required]
        public string LastName { get; set; }
        [Required]
        public string DOB { get; set; }

        public string Disability { get; set; }

        public string BloodGroup { get; set; }
        [Required]
        public string Gender { get; set; }
        [Required]
        public string Nationality { get; set; }
        [Required]
        public int Caste { get; set; }
        [Required]
        public int Religion { get; set; }

        public int? MotherTongue { get; set; }

        public string Scholarship { get; set; }
        [Required]
        public int Route { get; set; }
        [Required]
        public bool IsVeg { get; set; }

        public string ECAHouse { get; set; }

        public string CCAClub { get; set; }
        [Required]
        public int PState { get; set; }
        [Required]
        public int PDistrict { get; set; }
        [Required]
        public int PLocalLevel { get; set; }
        [Required]
        public int PWard { get; set; }
        [Required]
        public string PLocality { get; set; }
        [Required]
        public int TState { get; set; }
        [Required]
        public int TDistrict { get; set; }
        [Required]
        public int TLocalLevel { get; set; }
        [Required]
        public int TWard { get; set; }
        [Required]
        public string TLocality { get; set; }

        public string MobileNo { get; set; }

        public string MobileNo2 { get; set; }
        [Required]
        public string SMSMobileNo { get; set; }

        public string TelephoneNo { get; set; }

        public string Email { get; set; }

        public string PhotoPath { get; set; }

        public string BirthCertificatePath { get; set; }

        public string PreviousLevelReportCardPath { get; set; }
        [Required]
        public int AddedBy { get; set; }
        [Required]
        public DateTime AddedOn { get; set; }

        public bool? IsModified { get; set; }

        public int? ModifiedBy { get; set; }

        public DateTime? ModifiedOn { get; set; }
        [Required]
        public bool IsDeleted { get; set; }

        public int? DeletedBy { get; set; }

        public DateTime? DeletedOn { get; set; }

    }
}
