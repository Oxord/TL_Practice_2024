using System.Text;

namespace Domain.Models;
public class Composition
{
    public int Id { get; private init; }
    public string Name { get; private init; }
    public string Description { get; private init; }
    public string InfoAboutActors { get; private init; }
    public int AuthorId { get; private set; }
    public List<Play> Plays { get; private set; }

    public Composition( string name, string description, string infoAboutActors, int authorId )
    {
        Name = name;
        Description = description;
        InfoAboutActors = infoAboutActors;
        AuthorId = authorId;
    }

    public override string ToString()
    {
        StringBuilder sb = new( 300 );
        sb.AppendLine( "[Composition]" );
        sb.AppendLine( $"  Id: {Id}" );
        sb.AppendLine( $"  Name: {Name}" );
        sb.AppendLine( $"  Description: {Description}" );
        sb.AppendLine( $"  InfoAboutActors: {InfoAboutActors}" );
        sb.AppendLine( $"  AuthorId: {AuthorId}" );
        sb.AppendLine( "[Plays]" );
        foreach ( Play play in Plays )
        {
            sb.AppendLine( $"  {play}" );
        }


        return sb.ToString();
    }
}
