using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using SMS.Models.Student;
using SMS.Services.IStudentsService;

namespace SMS.Controllers.Students
{
    [Route("api/student")]
    [ApiController]
    public class StudentApiController : ControllerBase
    {
        private readonly IStudentService _studentService;
       // private readonly ILogger _logger;
        public StudentApiController(IStudentService studentService
            //,ILogger logger
            )
        {
            _studentService = studentService;
          //  _logger = logger;
        }

        [HttpGet]
        [Route("list")]
        public async Task<IActionResult> GetStudents(int pageNo = 1,int pageSize = 20,string query = "")
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
        [Route("save")]
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
        [HttpGet]
        [Route("detail")]
        public async Task<object> Detail(int id)
        {
            try
            {
                if(id == 0)
                {
                    return StatusCode(500,"Student doesnot exist !!");
                }
                else
                {
                    var data = await _studentService.Detail(id);
                    return Ok(data);
                }
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message);
            }
        }
    }
}
