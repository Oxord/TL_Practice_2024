using Domain.DTO;
using Domain.Models;
using Domain.Repositories;
using Infastructure;
using Microsoft.AspNetCore.Mvc;

namespace WebApi.Controllers;


[ApiController]
[Route( "[controller]/[action]" )]
public class PlayController : ControllerBase
{
    private readonly TheatreDbContext _context;

    private readonly IPlayRepository _playRepository;

    public PlayController( TheatreDbContext context, IPlayRepository playRepository )
    {
        _context = context;
        _playRepository = playRepository;
    }

    [HttpPost]
    public IActionResult CreatePlay( [FromBody] CreatePlay model )
    {
        try
        {
            Play play = new( model.Name, model.StartDate, model.EndDate, model.TicketPrice, model.Description, model.TheaterId, model.CompositionId );
            _playRepository.Add( play );
            return Ok( play );
        }
        catch
        {
            return BadRequest();
        }
    }

    [HttpGet]
    public IActionResult GetAvailablePlays( DateTime startDate, DateTime endDate )
    {
        List<AvailableComposition> compositionList = new();
        List<TheatreCompositions> theatreCompositions = new();
        List<CompositionItem> compositions = new();
        List<Play> allPlays = _playRepository.GetAvailablePlays( startDate, endDate );

        foreach ( Theater theater in _context.Set<Theater>().ToList() )
        {
            List<Play> playsInCurrentTheatre = allPlays.Where( x => x.TheaterId == theater.Id ).ToList();
            if ( playsInCurrentTheatre.Count != 0 )
            {
                foreach ( Play play in playsInCurrentTheatre )
                { 
                    Composition composition = _context.Set<Composition>().FirstOrDefault( x => x.Id == play.CompositionId );
                    compositions.Add( new CompositionItem( play.TicketPrice, play.Name, play.Description, composition.InfoAboutActors ) );
                }
                theatreCompositions.Add( new TheatreCompositions( theater.Name, compositions ) );
                compositions = new();
            }
        }

        compositionList.Add( new AvailableComposition( startDate, endDate, theatreCompositions ) );

        return Ok( compositionList );
    }

}
