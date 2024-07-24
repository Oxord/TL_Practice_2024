using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CarFactory.Models.Engines;
public interface IEngine
{
    public string Name { get; }
    public int MaxSpeed { get; }
}
