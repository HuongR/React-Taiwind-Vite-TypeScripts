using backend.Persistence.Data;
using Microsoft.AspNetCore.Mvc;

namespace backend.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class DbTestController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public DbTestController(ApplicationDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public IActionResult TestDbConnection()
        {
            try
            {
                bool canConnect = _context.Database.CanConnect();
                return Ok(new { canConnect });
            }
            catch (Exception ex)
            {
                return StatusCode(500, new { error = ex.Message });
            }
        }
    }
}
