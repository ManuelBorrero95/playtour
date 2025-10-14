using Microsoft.AspNetCore.Mvc;

namespace Backend.Controllers
{
    public class LoginController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
