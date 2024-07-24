
namespace CarFactory;

internal class Program
{
    static void Main( string[] args )
    {
        PrintMenu();

    }

    private static void PrintMenu()
    {
        Console.WriteLine( "        The Car Factory" );
        Console.WriteLine( "List of commands: " );
        Console.WriteLine( "add-car - add new car" );
        Console.WriteLine( "show-all-cars - show information about all cars, which were added" );
        Console.WriteLine( "exit - quit from app" );
    }
}
