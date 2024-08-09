namespace Fighters.Models.Races;

public class Human : IRace
{
    public string Name => "Человек";
    public int Damage => 1;

    public int Health => 25;

    public int Armor => 0;
}
