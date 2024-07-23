using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Fighters.Models.Weapons;
internal class Dagger: IWeapon
{
    public string Name => "Кинжал";
    public int Damage => 3;
}
