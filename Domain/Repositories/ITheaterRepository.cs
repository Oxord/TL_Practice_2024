using Domain.DTO;
using Domain.Models;

namespace Domain.Repositories;
public interface ITheaterRepository
{
    public void Add( Theater theater );
    public void CommitChanges();
    public void Delete( Theater theater );

}
