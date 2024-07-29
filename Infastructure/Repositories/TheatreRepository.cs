using Domain.Models;
using Domain.Repositories;

namespace Infastructure.Repositories;
public class TheatreRepository : ITheaterRepository
{
    private readonly TheatreDbContext _dbContext;
    public TheatreRepository( TheatreDbContext context )
    {
        _dbContext = context;
    }

    public void Add( Theater theater )
    {
        _dbContext.Set<Theater>().Add( theater );
        _dbContext.SaveChanges();
    }
    public void CommitChanges()
    {
        _dbContext.SaveChanges();
    }

    public void Delete( Theater theater )
    {
        _dbContext.Set<Theater>().Remove( theater );
        _dbContext.SaveChanges();
    }
}
