using Domain.Models;

namespace Domain.Repositories;
public interface IPlayRepository
{
    public void Add( Play play );
    List<Play> GetAvailablePlays( DateTime start, DateTime end );
}
