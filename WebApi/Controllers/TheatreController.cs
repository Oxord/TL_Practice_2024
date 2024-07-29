using Domain.DTO;
using Domain.Models;
using Domain.Repositories;
using Infastructure;
using Microsoft.AspNetCore.Mvc;

namespace WebApi.Controllers;

[ApiController]
[Route( "[controller]/[action]" )]
public class TheatreController : ControllerBase
{
    private readonly TheatreDbContext _context;

    private readonly ITheaterRepository _theaterRepository;

    public TheatreController( TheatreDbContext context, ITheaterRepository theaterRepository )
    {
        _context = context;
        _theaterRepository = theaterRepository;
    }

    [HttpPost]
    public IActionResult CreateTheatre( [FromBody] CreateTheatre model )
    {
        try
        {
            string operatingMode = "from " + model.BeginningWorkDay + " to " + model.EndWorkDay;
            Theater theater = new( model.Name, model.Address, model.OpeningDate, operatingMode, model.Description, model.PhoneNumber );
            _theaterRepository.Add( theater );
            return Ok( theater );
        }
        catch ( Exception ex )
        {
            return BadRequest();
        }
    }

    [HttpPut]
    public IActionResult EditTheatre( int theatreId, [FromBody] EditTheatre model )
    {
        Theater theater = _context.Set<Theater>().FirstOrDefault( x => x.Id == theatreId );
        if ( theater == null )
        {
            return NotFound( "Театра с таким id не найдено" );
        }
        else
        {
            string operatingMode = "from " + model.BeginningWorkDay + " to " + model.EndWorkDay;
            theater.Name = model.Name;
            theater.Description = model.Description;
            theater.OperatingMode = operatingMode;
            theater.PhoneNumber = model.PhoneNumber;
            _theaterRepository.CommitChanges();
            return Ok( theater );
        }
    }

    [HttpDelete]
    public IActionResult DeleteTheatre( int theatreId )
    {
        try
        {
            Theater theatre = _context.Set<Theater>().FirstOrDefault( t => t.Id == theatreId );
            _theaterRepository.Delete( theatre );
            return Ok( $"Театр с id = {theatreId} успешно удалён" );
        }
        catch ( Exception ex )
        {
            return BadRequest();
        }
    }
}
