using SMS.Models.Student;

namespace SMS.Services.IStudentsService
{
    public interface IStudentService
    {
        public Task<IEnumerable<Student>> GetStudents();
        Task<dynamic> Save(Student model);
        Task<Student> Detail(int id);
    }
}
