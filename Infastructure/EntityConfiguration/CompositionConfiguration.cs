using Domain.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Infastructure.EntityConfiguration;
internal class CompositionConfiguration: IEntityTypeConfiguration<Composition>
{
    public void Configure( EntityTypeBuilder<Composition> builder )
    {
        builder.ToTable( nameof( Composition ) )
               .HasKey( c => c.Id );

        builder.Property( c => c.Name )
               .HasMaxLength( 50 )
               .IsRequired();

        builder.Property( c => c.Description )
            .HasMaxLength( 100 )
            .IsRequired();

        builder.Property( c => c.InfoAboutActors )
            .HasMaxLength(100);

        builder.HasMany( c => c.Plays )
               .WithOne()
               .HasForeignKey( p => p.CompositionId );
    }
}
