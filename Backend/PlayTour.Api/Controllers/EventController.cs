using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using PlayTour.Domain.Entities;
using PlayTour.Infrastructure.Persistence;

namespace PlayTour.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EventController : ControllerBase
    {

        private readonly PlayTourDbContext _context;

        EventController(PlayTourDbContext context)
        {
            _context=context;
        }


        [HttpGet("GetEventTypes")]
        public async Task<IActionResult> GetEventTypes()
        {
            
            return Ok();
        }


    }
}
