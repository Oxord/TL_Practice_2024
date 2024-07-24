﻿using CarFactory.Models.BodyShapes;
using CarFactory.Models.Brands;
using CarFactory.Models.Colors;
using CarFactory.Models.Engines;
using CarFactory.Models.Transmissions;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CarFactory.Models.Cars;
public class Car : ICar
{
    public IBrand Brand { get; }
    public IColor Color { get; }
    public IBodyShape BodyShape { get; }
    public IEngine Engine { get; }
    public ITransmission Transmission { get; }

    public Car( IBrand brand, IColor color, IBodyShape bodyShape, IEngine engine, ITransmission transmission )
    {
        Brand = brand;
        Color = color;
        BodyShape = bodyShape;
        Engine = engine;
        Transmission = transmission;
    }

    public void PrintInfo()
    {
        Console.WriteLine( $"Brand - {Brand.Name}" );
        Console.WriteLine( $"Color - {Color.Name}" );
        Console.WriteLine( $"BodyShape - {BodyShape.Name}" );
        Console.WriteLine( $"Engine - {Engine.Name}" );
        Console.WriteLine( $"Transmission - {Transmission.Name}" );
        Console.WriteLine( $"Max speed - {Engine.MaxSpeed}" );
        Console.WriteLine( $"Number of gears - {Transmission.GearsAmount}" );
        Console.WriteLine();
    }
}
