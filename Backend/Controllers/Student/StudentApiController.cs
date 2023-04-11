using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using SMS.Services.IStudentsService;

namespace SMS.Controllers.Students
{
    [Route("api/[controller]")]
    [ApiController]
    public class StudentApiController : ControllerBase
    {
        private readonly IStudentService _studentService;
        public StudentApiController(IStudentService studentService)
        {
            _studentService = studentService;
        }

        [HttpGet]
        public async Task<IActionResult> GetStudentAA()
        {
            try
            {
                var studentList = await _studentService.GetStudents();
                return Ok(studentList);
            }
            catch (Exception ex)
            {
                //log error
                return StatusCode(500, ex.Message);
            }
        }
    }
}
