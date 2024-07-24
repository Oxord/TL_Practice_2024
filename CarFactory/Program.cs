using CarFactory.Models.Cars;

namespace CarFactory;

internal class Program
{
    static void Main( string[] args )
    {
        List<Car> cars = new();

        PrintMenu();

        while ( true )
        {
            string userCommand = ReadUserCommand();
            switch ( userCommand )
            {
                case "add-car":
                    {
                        Car createdCar = CreateCar.Create();
                        cars.Add( createdCar );
                        Console.WriteLine( "Your car has the following properties: " );
                        createdCar.PrintInfo();
                        break;
                    }
                case "show-all-cars":
                    {
                        if ( cars.Count > 0 )
                        {
                            ShowAllCarsInfo( cars );
                        }
                        else
                        {
                            Console.WriteLine( "Cars not found" );
                        }
                        break;
                    }
                case "exit":
                    {
                        Environment.Exit( 0 );
                        break;
                    }
            }
        }


    }

    private static void ShowAllCarsInfo( List<Car> carList )
    {
        foreach ( Car car in carList )
        {
            car.PrintInfo();
        }
    }

    private static void PrintMenu()
    {
        Console.WriteLine( "        The Car Factory" );
        Console.WriteLine( "List of commands: " );
        Console.WriteLine( "add-car - add new car" );
        Console.WriteLine( "show-all-cars - show information about all cars, which were added" );
        Console.WriteLine( "exit - quit from app" );
    }
    static private string ReadUserCommand()
    {
        Console.Write( "Enter your command: " );
        string action = Console.ReadLine();
        while ( action != "add-car" && action != "show-all-cars" && action != "exit" )
        {
            Console.WriteLine( "Unknow command!" );
            Console.Write( "Enter your command: " );
            action = Console.ReadLine();
        }
        return action;
    }
}
