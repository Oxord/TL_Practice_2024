using System.Text;

namespace Domain.Models;

public class Play
{
    public int Id { get; private init; }
    public string Name { get; private init; }
    public DateTime StartDate { get; private init; }
    public DateTime EndDate { get; private init; }
    public int TicketPrice { get; private init; }
    public string Description { get; private init; }
    public int TheaterId { get; private set; }
    public int CompositionId { get; private set; }


    public Play(string name, DateTime startDate, DateTime endDate, int ticketPrice, string description, int theaterId, int compositionId)
    {
        Name = name;
        StartDate = startDate;
        EndDate = endDate;
        TicketPrice = ticketPrice;
        Description = description;
        TheaterId = theaterId;
        CompositionId = compositionId;
    }

    public override string ToString()
    {
        StringBuilder sb = new(300);
        sb.AppendLine("[Play]");
        sb.AppendLine($"  Id: {Id}");
        sb.AppendLine($"  Name: {Name}");
        sb.AppendLine($"  Description: {Description}");
        sb.AppendLine($"  StartDate: {StartDate}");
        sb.AppendLine($"  EndDate: {EndDate}");
        sb.AppendLine($"  TicketPrice: {TicketPrice}");
        sb.AppendLine($"  TheaterId: {TheaterId}");
        sb.AppendLine($"  CompositionId: {CompositionId}");

        return sb.ToString();
    }
}