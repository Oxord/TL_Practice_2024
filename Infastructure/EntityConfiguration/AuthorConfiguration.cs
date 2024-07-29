using Domain.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Infastructure.EntityConfiguration;
internal class AuthorConfiguration : IEntityTypeConfiguration<Author>
{
    public void Configure( EntityTypeBuilder<Author> builder )
    {
        builder.ToTable( nameof( Author ) )
               .HasKey( a => a.Id );

        builder.Property( a => a.Name )
               .HasMaxLength( 50 )
               .IsRequired();

        builder.Property( a => a.Birthday )
               .IsRequired();

        builder.HasMany( a => a.Compositions )
               .WithOne()
               .HasForeignKey( c => c.AuthorId )
               .IsRequired();
    }
}
