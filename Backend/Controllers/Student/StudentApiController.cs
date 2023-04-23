using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using SMS.Models.Student;
using SMS.Services.IStudentsService;

namespace SMS.Controllers.Students
{
    [Route("api/[controller]")]
    [ApiController]
    public class StudentApiController : ControllerBase
    {
        private readonly IStudentService _studentService;
        private readonly ILogger _logger;
        public StudentApiController(IStudentService studentService, ILogger logger)
        {
            _studentService = studentService;
            _logger = logger;
        }

        [HttpGet]
      //  [Route("list")]
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
                //_logger.Log(LogType , ex);
                return StatusCode(500, ex.Message);
            }
        }
        [HttpPost]
        public async Task<object> Save(Student model)
        {
            try
            {
                var data = await _studentService.Save(model);
                return Ok(data);
            }
            catch (Exception ex)
            {
                //log error
                return StatusCode(500, ex.Message);
            }
        }
    }
}
