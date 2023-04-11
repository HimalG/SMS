using Dapper;
using Microsoft.Data.SqlClient;
using SMS.Context;
using SMS.Models;
using SMS.Models.Students;
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

        //Task<IEnumerable<Student>> IStudentService.GetStudents()
        //{
        //    throw new NotImplementedException();
        //}
    }

}
