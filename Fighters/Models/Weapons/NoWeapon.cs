﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Fighters.Models.Weapons;
internal class NoWeapon: IWeapon
{
    public string Name => "Без оружия";
    public int Damage => 0;
}