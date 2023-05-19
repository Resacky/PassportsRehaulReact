using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;

namespace PassportsRehaulReact.Controllers
{
    [Authorize(Policy = "BasePermissions")]
    public class MyController : BaseController
    {
        public IActionResult Index()
        {
            return View();
        }

        // More actions...
    }
}
