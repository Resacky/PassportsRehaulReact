using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Linq;

namespace YourNamespace.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        [HttpGet("roles")]
        public IActionResult GetUserRoles()
        {
            var roles = User.Claims
                            .Where(c => c.Type == System.Security.Claims.ClaimTypes.Role)
                            .Select(c => c.Value);

            return Ok(roles);
        }
    }
}