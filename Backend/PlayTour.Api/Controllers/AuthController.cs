using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;

namespace PlayTour.Api.Controllers
{
    [ApiController]
    [Route("auth")]
    public class AuthController : Controller
    {


        public AuthController(
            UserManager<AppUser> userManager,
            SignInManager<AppUser> signInManager,
            IJwtTokenService tokenService)
        {
            _userManager = userManager;
            _signInManager = signInManager;
            _tokenService = tokenService;
        }


        public IActionResult Index()
        {
            return View();
        }
    }
}
