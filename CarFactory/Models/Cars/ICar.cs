using CarFactory.Models.BodyShapes;
using CarFactory.Models.Brands;
using CarFactory.Models.Colors;
using CarFactory.Models.Engines;
using CarFactory.Models.Transmissions;

namespace CarFactory.Models.Cars;
public interface ICar
{
    public IBrand Brand { get; }
    public IColor Color { get; }
    public IBodyShape BodyShape { get; }
    public IEngine Engine { get; }
    public ITransmission Transmission { get; }
    public void PrintInfo();
}
