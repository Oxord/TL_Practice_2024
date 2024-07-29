namespace Domain.DTO;
public class CompositionItem
{
    public int Price { get; set; }
    public string PlayName { get; set; }
    public string PlayDescription { get; set; }
    public string HeroesInfo { get; set; }

    public CompositionItem( int price, string playName, string playDescription, string heroesInfo )
    {
        Price = price;
        PlayName = playName;
        PlayDescription = playDescription;
        HeroesInfo = heroesInfo;
    }
}
