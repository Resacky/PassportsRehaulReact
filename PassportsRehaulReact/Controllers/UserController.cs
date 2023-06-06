using System.Security.Principal;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Linq;

namespace PassportsRehaulReact.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        [HttpGet("groups")]
        public IActionResult GetUserGroups()
        {
            var windowsIdentity = User.Identity as WindowsIdentity;
            if (windowsIdentity != null)
            {
                var groups = windowsIdentity.Groups
                    .Select(g => new SecurityIdentifier(g.Value).Translate(typeof(NTAccount)).ToString());

                return Ok(new
                {
                    User = windowsIdentity.Name,
                    Groups = groups
                });
            }
            else
            {
                return BadRequest("Windows Identity not found");
            }
        }
    }
}
