using Dapper;
using Microsoft.Data.SqlClient;
using OpenQA.Selenium;
using SMS.Context;
using SMS.Models;
using SMS.Models.Student;
using SMS.Services.IStudentsService;
using System.Data;

namespace SMS.Services.StudentsService
{

    public class StudentService : IStudentService
    {
        private readonly DapperContext _context;
        public StudentService(DapperContext context)
        {
            _context = context;
        }
        public async Task<IEnumerable<Student>> GetStudents()
        {
            var query = "SELECT * FROM Student";

            using (var connection = _context.CreateConnection())
            {
                var companies = await connection.QueryAsync<Student>(query);
                return companies.ToList();
            }
        }
        public async Task<dynamic> Save(Student model)
        {
            var query = @"INSERT INTO Student(CodeNo,AdmissionYear,Class,Section,Prefix,FirstName,MiddleName,LastName,DOB,Disability,BloodGroup,Gender,Nationality,Caste,Religion,MotherTongue
                        ,Scholarship,Route,IsVeg,ECAHouse,CCAClub,PState,PDistrict,PLocalLevel,PWard,PLocality,TState,TDistrict,TLocalLevel,TWard,TLocality,MobileNo,MobileNo2,SMSMobileNo,
                        TelephoneNo,Email,PhotoPath,BirthCertificatePath,PreviousLevelReportCardPath,AddedBy,AddedOn,IsModified,ModifiedBy,ModifiedOn,IsDeleted,DeletedBy,DeletedOn)
                        VALUES
                        ('80004','2080','5','B','Mr','Nabin','Bahadur','BK','2068-01-05','','O-','M','1','1','1','1','','1','0','1','1','1','1','1','1','Baneshwor','1','1','1','1'
                        ,'Baneshwor','','','9843250147','','dar@gmail.com','','','','1','2023-04-23','','','',0,'','')";
            var parameters = new DynamicParameters();
            parameters.Add("CodeNo", model.CodeNo, DbType.String, ParameterDirection.Input);
            parameters.Add("AdmissionYear", model.AdmissionYear, DbType.String, ParameterDirection.Input);
            parameters.Add("Class", model.Class, DbType.String, ParameterDirection.Input);
            parameters.Add("Section", model.Section, DbType.String, ParameterDirection.Input);
            parameters.Add("Prefix", model.Prefix, DbType.String, ParameterDirection.Input);
            parameters.Add("FirstName", model.FirstName, DbType.String, ParameterDirection.Input);
            parameters.Add("MiddleName", model.MiddleName, DbType.String, ParameterDirection.Input);
            parameters.Add("LastName", model.LastName, DbType.String, ParameterDirection.Input);
            parameters.Add("DOB", model.DOB, DbType.DateTime, ParameterDirection.Input);
            parameters.Add("Disability", model.Disability, DbType.String, ParameterDirection.Input);
            parameters.Add("BloodGroup", model.BloodGroup, DbType.String, ParameterDirection.Input);
            parameters.Add("Gender", model.Gender, DbType.String, ParameterDirection.Input);
            parameters.Add("Nationality", model.Nationality, DbType.String, ParameterDirection.Input);
            parameters.Add("Caste", model.Caste, DbType.Int32, ParameterDirection.Input);
            parameters.Add("Religion", model.Religion, DbType.Int32, ParameterDirection.Input);
            parameters.Add("MotherTongue", model.MotherTongue, DbType.Int32, ParameterDirection.Input);
            parameters.Add("Scholarship", model.Scholarship, DbType.String, ParameterDirection.Input);
            parameters.Add("Route", model.Route, DbType.Int32, ParameterDirection.Input);
            parameters.Add("IsVeg", model.IsVeg, DbType.Boolean, ParameterDirection.Input);
            parameters.Add("ECAHouse", model.ECAHouse, DbType.String, ParameterDirection.Input);
            parameters.Add("CCAClub", model.CCAClub, DbType.String, ParameterDirection.Input);
            parameters.Add("PState", model.PState, DbType.Int32, ParameterDirection.Input);
            parameters.Add("PDistrict", model.PDistrict, DbType.Int32, ParameterDirection.Input);
            parameters.Add("PLocalLevel", model.PLocalLevel, DbType.Int32, ParameterDirection.Input);
            parameters.Add("PWard", model.PWard, DbType.Int32, ParameterDirection.Input);
            parameters.Add("PLocality", model.PLocality, DbType.String, ParameterDirection.Input);
            parameters.Add("TState", model.TState, DbType.Int32, ParameterDirection.Input);
            parameters.Add("TDistrict", model.TDistrict, DbType.Int32, ParameterDirection.Input);
            parameters.Add("TLocalLevel", model.TLocalLevel, DbType.Int32, ParameterDirection.Input);
            parameters.Add("TWard", model.TWard, DbType.Int32, ParameterDirection.Input);
            parameters.Add("TLocality", model.TLocality, DbType.String, ParameterDirection.Input);
            parameters.Add("MobileNo", model.MobileNo, DbType.String, ParameterDirection.Input);
            parameters.Add("MobileNo2", model.MobileNo2, DbType.String, ParameterDirection.Input);
            parameters.Add("SMSMobileNo", model.SMSMobileNo, DbType.String, ParameterDirection.Input);
            parameters.Add("TelephoneNo", model.TelephoneNo, DbType.String, ParameterDirection.Input);
            parameters.Add("Email", model.Email, DbType.String, ParameterDirection.Input);
            parameters.Add("PhotoPath", model.PhotoPath, DbType.String, ParameterDirection.Input);
            parameters.Add("BirthCertificatePath", model.BirthCertificatePath, DbType.String, ParameterDirection.Input);
            parameters.Add("PreviousLevelReportCardPath", model.PreviousLevelReportCardPath, DbType.String, ParameterDirection.Input);
            parameters.Add("AddedBy", model.AddedBy, DbType.Int32, ParameterDirection.Input);
            parameters.Add("AddedOn", DateTime.Now, DbType.DateTime, ParameterDirection.Input);
            parameters.Add("IsModified", model.IsModified, DbType.Boolean, ParameterDirection.Input);
            parameters.Add("ModifiedBy", model.ModifiedBy, DbType.Int32, ParameterDirection.Input);
            parameters.Add("ModifiedOn", model.ModifiedOn, DbType.DateTime, ParameterDirection.Input);
            parameters.Add("IsDeleted", model.IsDeleted, DbType.Boolean, ParameterDirection.Input);
            parameters.Add("DeletedBy", model.DeletedBy, DbType.Int32, ParameterDirection.Input);
            parameters.Add("DeletedOn", model.DeletedOn, DbType.DateTime, ParameterDirection.Input);
            try
            {
                using (var connection = _context.CreateConnection())
                {
                    using (var transaction = connection.BeginTransaction())
                    {
                        try {
                            //if (model.Id == 0)
                            //{
                            var id = await connection.QuerySingleAsync<int>(query, parameters);
                            transaction.Commit();
                        return id;
                   // }
                        }
                        catch (Exception ex)
                        {
                            transaction.Rollback();
                            return ex;
                        }
                    }
                }
            }
            catch (Exception ex)

            {
                return ex;
            }
        }
        public async Task<Student> Detail(int id)
        {
            var query = "SELECT * FROM Student where Id = @id";
            using (var connection = _context.CreateConnection())
            {
                var data = await connection.QueryFirstOrDefaultAsync<Student>(query, new {@id = id});
                return data;
            }
        }
        //Task<IEnumerable<Student>> IStudentService.GetStudents()
        //{
        //    throw new NotImplementedException();
        //}
    }

}
