using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;

namespace PassportsRehaulReact.Controllers
{
    [Authorize(Policy = "DeletePermissions")]
    public class DeleteController : BaseController
    {
        public IActionResult Index()
        {
            return View();
        }

        // More actions...
    }
}