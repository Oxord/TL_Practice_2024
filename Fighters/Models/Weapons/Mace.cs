﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Fighters.Models.Weapons;
internal class Mace: IWeapon
{
    public string Name => "Булава";
    public int Damage => 10;
}