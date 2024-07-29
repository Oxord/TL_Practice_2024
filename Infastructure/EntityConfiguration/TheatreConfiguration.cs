using Domain.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Infastructure.EntityConfiguration;
internal class TheatreConfiguration: IEntityTypeConfiguration<Theater>
{
    public void Configure( EntityTypeBuilder<Theater> builder )
    {
        builder.ToTable( nameof( Theater ) )
               .HasKey( t => t.Id );

        builder.Property( t => t.Name )
               .HasMaxLength( 50 )
               .IsRequired();
        
        builder.Property( t => t.Address )
               .HasMaxLength( 80 )
               .IsRequired();

        builder.Property( t => t.OpeningDate );

        builder.Property( t => t.OperatingMode )
            .HasMaxLength( 20 );
        
        builder.Property( t => t.Description )
            .HasMaxLength( 100 );

        builder.Property( t => t.PhoneNumber )
               .HasMaxLength( 20 )
               .IsRequired();

        builder.HasMany( t => t.Plays )
               .WithOne()
               .HasForeignKey( p => p.TheaterId )
               .IsRequired();
    }
}
