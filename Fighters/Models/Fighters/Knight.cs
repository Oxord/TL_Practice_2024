using Fighters.Models.Armors;
using Fighters.Models.Races;
using Fighters.Models.Weapons;

namespace Fighters.Models.Fighters;

public class Knight : Fighter
{
    public Knight( string name, IRace race, IWeapon weapon, IArmor armor ) : base( name, race, weapon, armor )
    {
        fighterHealth = 20;
        fighterDamage = 10;
        currentHealth = GetMaxHealth();
        fighterClass = "Рыцарь";
    }
}