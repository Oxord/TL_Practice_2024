using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Fighters.Models.Weapons;
internal class Spear: IWeapon
{
    public string Name => "Копье";
    public int Damage => 6;
}
