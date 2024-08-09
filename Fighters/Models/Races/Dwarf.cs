using Fighters.Models.Armors;
using Fighters.Models.Fighters;
using Fighters.Models.Weapons;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Fighters.Models.Races;
public class Dwarf : IRace
{
    public string Name => "Дварф";
    public int Damage => 8;

    public int Health => 33;

    public int Armor => 20;
}
