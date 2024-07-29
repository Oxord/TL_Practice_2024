using Domain.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Infastructure.EntityConfiguration;
internal class PlayConfiguration : IEntityTypeConfiguration<Play>
{
    public void Configure( EntityTypeBuilder<Play> builder )
    {
        builder.ToTable( nameof( Play ) )
               .HasKey( p => p.Id );

        builder.Property( p => p.Name )
               .HasMaxLength( 50 )
               .IsRequired();

        builder.Property( p => p.StartDate );

        builder.Property( p => p.EndDate );

        builder.Property( p => p.TicketPrice );

        builder.Property( p => p.Description )
            .HasMaxLength( 100 )
            .IsRequired();
    }
}
