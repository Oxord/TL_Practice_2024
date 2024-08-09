using Fighters.Models.Armors;
using Fighters.Models.Fighters;
using Fighters.Models.Weapons;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Fighters.Models.Races;
public class Elf : IRace
{
    public string Name => "Эльф";
    public int Damage => 15;

    public int Health => 15;

    public int Armor => 10;
}
