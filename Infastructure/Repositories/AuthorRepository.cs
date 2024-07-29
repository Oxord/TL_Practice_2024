using Domain.Models;
using Domain.Repositories;

namespace Infastructure.Repositories;
public class AuthorRepository : IAuthorRepository
{
    private readonly TheatreDbContext _dbContext;
    public AuthorRepository( TheatreDbContext context)
    {
        _dbContext = context;
    }
    public void Add( Author author )
    {
        _dbContext.Set<Author>().Add( author );
        _dbContext.SaveChanges();
    }
}
