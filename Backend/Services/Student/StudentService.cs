using Dapper;
using Microsoft.Data.SqlClient;
using SMS.Context;
using SMS.Models;
using SMS.Models.Student;
using SMS.Services.IStudentsService;
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
        //public async Task<dynamic> Save(Student model)
        //{
        //    try
        //    {
        //        using (var connection = _context.CreateConnection())
        //        {
        //            if (model.Id == 0)
        //            {
        //                await connection
        //                return null;
        //            }
        //        }
        //    }
        //    catch(Exception ex)
        //    {
        //        return ex;
        //    }
        //}

        //Task<IEnumerable<Student>> IStudentService.GetStudents()
        //{
        //    throw new NotImplementedException();
        //}
    }

}
