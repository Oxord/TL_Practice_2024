using System.Numerics;
using System.Text;

namespace Domain.Models;
public class Author
{
    public int Id { get; private init; }
    public string Name { get; private init; }
    public DateTime Birthday { get; private init; }
    public List<Composition> Compositions { get; private set; } = new List<Composition>();

    public Author(string name, DateTime birthday)
    {
        Name = name;
        Birthday = birthday;
    }
    public override string ToString()
    {
        StringBuilder sb = new(300);
        sb.AppendLine("[Author]");
        sb.AppendLine($"  Id: {Id}");
        sb.AppendLine($"  Name: {Name}");
        sb.AppendLine($"  Birthday: {Birthday}");
        sb.AppendLine($"  [Compositions]: ");
        foreach (Composition composition in Compositions)
        {
            sb.AppendLine($"    {composition}");
        }

        return sb.ToString();
    }
}
