namespace Domain.DTO;
public class TheatreCompositions
{
    public string TheatreName { get; set; }
    public List<CompositionItem> CompositionItems { get; set; }
    public TheatreCompositions( string theatreName, List<CompositionItem> compositionItems ) 
    { 
        TheatreName = theatreName;
        CompositionItems = compositionItems;
    }
}
