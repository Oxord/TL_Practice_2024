using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CarFactory.Models.Transmissions;
public class Automatic: ITransmission
{
    public string Name => "Automatic";
    public int GearsAmount => 5;
}
