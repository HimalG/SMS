using SMS.Models.Students;

namespace SMS.Services.IStudentsService
{
    public interface IStudentService
    {
        public Task<IEnumerable<Student>> GetStudents();
    }
}
