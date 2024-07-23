using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Fighters.Models.Races;
internal class Goblin: IRace
{
    public string Name => "Гоблин";
    public int Damage => 8;

    public int Health => 28;

    public int Armor => 7;
}
