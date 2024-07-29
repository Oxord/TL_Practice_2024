using Domain.Models;
using Domain.Repositories;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Infastructure.Repositories;
public class PlayRepository : IPlayRepository
{
    private readonly TheatreDbContext _dbContext;

    public PlayRepository( TheatreDbContext context )
    {
        _dbContext = context;
    }

    public void Add( Play play )
    {
        _dbContext.Set<Play>().Add( play );
        _dbContext.SaveChanges();
    }
    public List<Play> GetAvailablePlays( DateTime start, DateTime end )
    {
        return _dbContext.Set<Play>().Where( p => p.StartDate >= start && p.EndDate <= end ).ToList();
    }
}
