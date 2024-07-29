using Infastructure.EntityConfiguration;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;

namespace Infastructure;
public class TheatreDbContext : DbContext
{
    public TheatreDbContext( DbContextOptions<TheatreDbContext> options )
    : base( options )
    {
    }

    protected override void OnConfiguring( DbContextOptionsBuilder optionsBuilder )
    {
        base.OnConfiguring( optionsBuilder );
    }

    protected override void OnModelCreating( ModelBuilder modelBuilder )
    {
        base.OnModelCreating( modelBuilder );

        modelBuilder.ApplyConfiguration( new TheatreConfiguration() );
        modelBuilder.ApplyConfiguration( new AuthorConfiguration() );
        modelBuilder.ApplyConfiguration( new CompositionConfiguration() );
        modelBuilder.ApplyConfiguration( new PlayConfiguration() );
    }
}
