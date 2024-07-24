using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CarFactory.Models.Engines;
public class DieselEngine: IEngine
{
    public string Name => "Diesel engine";
    public int MaxSpeed => 150;
}
