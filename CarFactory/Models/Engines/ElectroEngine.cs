using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CarFactory.Models.Engines;
public class ElectroEngine: IEngine
{ 
    public string Name => "Electro engine";
    public int MaxSpeed => 170;
}
