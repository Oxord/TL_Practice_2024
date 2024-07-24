using CarFactory.Models.BodyShapes;
using CarFactory.Models.Brands;
using CarFactory.Models.Cars;
using CarFactory.Models.Colors;
using CarFactory.Models.Engines;
using CarFactory.Models.Transmissions;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http.Headers;
using System.Text;
using System.Threading.Tasks;

namespace CarFactory;
public class CreateCar
{
    static public readonly Dictionary<int, IBrand> brands = new() { { 1, new BMW() }, { 2, new Lada() }, { 3, new Lexus() } };
    static public readonly Dictionary<int, IBodyShape> bodyShapes = new() { { 1, new Cabriolet() }, { 2, new Micro() }, { 3, new Sedan() } };
    static public readonly Dictionary<int, IColor> colors = new() { { 1, new Red() }, { 2, new White() } };
    static public readonly Dictionary<int, IEngine> engines = new() { { 1, new DieselEngine() }, { 2, new ElectroEngine() } };
    static public readonly Dictionary<int, ITransmission> transmissions = new() { { 1, new Automatic() }, { 2, new Mechanical() } };


    static public Car Create()
    {
        int brandNum;
        do
        {
            Console.WriteLine( "Specify the brand of the car:\n1 - BMW\n2 - Lada\n3 - Lexus" );
            if ( !Int32.TryParse( Console.ReadLine(), out brandNum ) )
            {
                Console.WriteLine( "Please, indicate the number" );
            }
        }
        while ( !brands.ContainsKey( brandNum ) );

        int bodyShapeNum;
        do
        {
            Console.WriteLine( "Specify the shape of the car body:\n1 - Cabriolet\n2 - Micro\n3 - Sedan" );
            if ( !Int32.TryParse( Console.ReadLine(), out bodyShapeNum ) )
            {
                Console.WriteLine( "Please, indicate the number" );
            }
        }
        while ( !bodyShapes.ContainsKey( bodyShapeNum ) );

        int colorNum;
        do
        {
            Console.WriteLine( "Specify the color of the car:\n1 - Red\n2 - White" );
            if ( !Int32.TryParse( Console.ReadLine(), out colorNum ) )
            {
                Console.WriteLine( "Please, indicate the number" );
            }
        }
        while ( !colors.ContainsKey( colorNum ) );

        int engineNum;
        do
        {
            Console.WriteLine( "Select the car engine:\n1 - DieselEngine\n2 - ElectroEngine" );
            if ( !Int32.TryParse( Console.ReadLine(), out engineNum ) )
            {
                Console.WriteLine( "Please, indicate the number" );
            }
        }
        while ( !engines.ContainsKey( engineNum ) );

        int transmissionNum;
        do
        {
            Console.WriteLine( "Specify the transmission of the car:\n1 - Automatic\n2 - Mechanical" );
            if ( !Int32.TryParse( Console.ReadLine(), out transmissionNum ) )
            {
                Console.WriteLine( "Please, indicate the number" );
            }
        }
        while ( !transmissions.ContainsKey( transmissionNum ) );

        return new Car( brands[ brandNum ], colors[ colorNum ], bodyShapes[ bodyShapeNum ], engines[ engineNum ], transmissions[ transmissionNum ] );

    }

}
