using Domain.DTO;
using Domain.Models;
using Domain.Repositories;
using Infastructure;
using Microsoft.AspNetCore.Mvc;

namespace Infastructure.EntityConfiguration;

[ApiController]
[Route( "[controller]/[action]" )]
public class AuthorController : ControllerBase
{
    private readonly TheatreDbContext _context;

    private readonly IAuthorRepository _authorRepository;

    public AuthorController( TheatreDbContext context, IAuthorRepository authorRepository )
    {
        _context = context;
        _authorRepository = authorRepository;
    }

    [HttpPost]
    public IActionResult CreateAuthor( [FromBody] CreateAuthor model )
    {
        try
        {
            Author author = new( model.Name, model.Birthday );
            _authorRepository.Add( author );
            return Ok( author );
        }
        catch ( Exception ex )
        {
            return BadRequest( ex.Message );
        }

    }
}
