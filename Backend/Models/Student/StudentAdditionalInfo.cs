using Microsoft.Identity.Client;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace SMS.Models.Student
{
    [Table("StudentAdditionalInfo")]
    public class StudentAdditionalInfo
    {
        [Key]
        public int Id { get; set; }
        [Required]
        public int StudentId { get; set; }

        public string SiblingPrefix { get; set; }

        public string SiblingFName { get; set; }

        public string SiblingMName { get; set; }

        public string SiblingLName { get; set; }

        public string SiblingClass { get; set; }

        public string SiblingSection { get; set; }

        public string SiblingMobileNo { get; set; }

        public string SiblingAddress { get; set; }

        public string SiblingEmail { get; set; }

        public string FatherFName { get; set; }

        public string FatherMName { get; set; }

        public string FatherLName { get; set; }

        public string FatherProfession { get; set; }

        public string FatherSector { get; set; }

        public string FatherQualification { get; set; }

        public string FatherMobileNo { get; set; }

        public string FatherAddress { get; set; }

        public string FatherEmail { get; set; }

        public string FatherCurrentOfficeAndDesignation { get; set; }

        public string MotherFName { get; set; }

        public string MotherMName { get; set; }

        public string MotherLName { get; set; }

        public string MotherProfession { get; set; }

        public string MotherSector { get; set; }

        public string MotherQualification { get; set; }

        public string MotherMobileNo { get; set; }

        public string MotherAddress { get; set; }

        public string MotherEmail { get; set; }

        public string MotherCurrentOfficeAndDesignation { get; set; }

        public string GuardianPrefix { get; set; }

        public string GuardianFName { get; set; }

        public string GuardianMName { get; set; }

        public string GuardianLName { get; set; }

        public string GuardianProfession { get; set; }

        public string GuardianSector { get; set; }

        public string GuardianQualification { get; set; }

        public string GuardianMobileNo { get; set; }

        public string GuardianAddress { get; set; }

        public string GuardianEmail { get; set; }
        [Required]
        public string CommunicationEmail { get; set; }
        [Required]
        public string CommunicationMobileNo { get; set; }

    }
}
