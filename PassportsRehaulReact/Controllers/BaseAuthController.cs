using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;

namespace PassportsRehaulReact.Controllers
{
    [Authorize(Policy = "BasePermissions")]
    public class BaseController : Controller
    {
    }
}