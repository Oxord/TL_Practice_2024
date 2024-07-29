using Domain.DTO;
using Domain.Models;
using Domain.Repositories;
using Infastructure;
using Microsoft.AspNetCore.Mvc;

namespace WebApi.Controllers;

[ApiController]
[Route( "[controller]/[action]" )]
public class CompositionController : ControllerBase
{
    private readonly TheatreDbContext _context;

    private readonly ICompositionRepository _compositionRepository;

    public CompositionController( TheatreDbContext context, ICompositionRepository compositionRepository )
    {
        _context = context;
        _compositionRepository = compositionRepository;
    }

    [HttpPost]
    public IActionResult CreateComposition( [FromBody] CreateComposition model )
    {
        try
        {
            Composition composition = new( model.Name, model.Description, model.InfoAboutActors, model.AuthorId );
            _compositionRepository.Add( composition );
            return Ok( model );
        }
        catch
        {
            return BadRequest();
        }
    }

}