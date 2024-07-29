namespace Domain.DTO;
public class AvailableComposition
{
    public DateTime StartDate { get; set; }
    public DateTime EndDate { get; set; }
    public List<TheatreCompositions> TheatreCompositions { get; set; } 

    public AvailableComposition(DateTime start, DateTime end, List<TheatreCompositions> theatreCompositions )
    {
        StartDate = start;
        EndDate = end;
        TheatreCompositions = theatreCompositions;
    }

}
