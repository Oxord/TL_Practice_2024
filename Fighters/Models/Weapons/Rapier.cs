﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Fighters.Models.Weapons;
internal class Rapier: IWeapon
{
    public string Name => "Рапира";
    public int Damage => 15;
}