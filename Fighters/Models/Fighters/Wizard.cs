using Fighters.Models.Armors;
using Fighters.Models.Races;
using Fighters.Models.Weapons;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Fighters.Models.Fighters;
public class Wizard: Fighter
{
    public Wizard( string name, IRace race, IWeapon weapon, IArmor armor ) : base( name, race, weapon, armor )
    {
        fighterHealth = 10;
        fighterDamage = 25;
        currentHealth = GetMaxHealth();
        fighterClass = "Волшебник";
    }
}
