using Domain.Models;
using Domain.Repositories;

namespace Infastructure.Repositories;
public class CompositionRepository : ICompositionRepository
{
    private readonly TheatreDbContext _dbContext;

    public CompositionRepository( TheatreDbContext context )
    {
        _dbContext = context;
    }
    public void Add( Composition composition )
    {
        _dbContext.Set<Composition>().Add( composition );
        _dbContext.SaveChanges();
    }

}
