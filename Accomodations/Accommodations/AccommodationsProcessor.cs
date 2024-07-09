using System.Globalization;
using Accommodations.Commands;
using Accommodations.Dto;

namespace Accommodations;

public static class AccommodationsProcessor
{
    private static BookingService _bookingService = new();
    private static Dictionary<int, ICommand> _executedCommands = new();
    private static int s_commandIndex = 0;

    public static void Run()
    {
        Console.WriteLine("Booking Command Line Interface");
        Console.WriteLine("Commands:");
        Console.WriteLine("'book <UserId> <Category> <StartDate> <EndDate> <Currency>' - to book a room");
        Console.WriteLine("'cancel <BookingId>' - to cancel a booking");
        Console.WriteLine("'undo' - to undo the last command");
        Console.WriteLine("'find <BookingId>' - to find a booking by ID");
        Console.WriteLine("'search <StartDate> <EndDate> <CategoryName>' - to search bookings");
        Console.WriteLine("'exit' - to exit the application");

        string input;
        while ((input = Console.ReadLine()) != "exit")
        {
            try
            {
                ProcessCommand(input);
            }
            catch (ArgumentException ex)
            {
                Console.WriteLine($"Error: {ex.Message}");
            }
        }
    }

    private static void ProcessCommand(string input)
    {
        string[] parts = input.Split(' ');
        string commandName = parts[0];

        switch (commandName)
        {
            case "book":
                if (parts.Length != 6)
                {
                    Console.WriteLine("Invalid number of arguments for booking.");
                    return;
                }
                //месяц, день, число
                //здесь было изменено
                try
                {
                    if (DateTime.TryParse(parts[3], out DateTime beginDate) && DateTime.TryParse(parts[4], out DateTime finshDate) && Enum.TryParse(parts[5], true, out CurrencyDto currency)  && int.TryParse(parts[1], out int userId))
                    {
                        BookingDto bookingDto = new()
                        {
                            UserId = userId,
                            Category = parts[2],
                            StartDate = beginDate,
                            EndDate = finshDate,
                            Currency = currency,
                        };

                        BookCommand bookCommand = new(_bookingService, bookingDto);
                        bookCommand.Execute();
                        _executedCommands.Add(++s_commandIndex, bookCommand);
                        Console.WriteLine("Booking command run is successful.");
                    }
                    else
                    {
                        throw new Exception( "Invalid input" );
                    }
                }
                catch(Exception ex)
                {
                    Console.WriteLine(ex.Message);
                }
                break;
                

            case "cancel":
                if (parts.Length != 2)
                {
                    Console.WriteLine("Invalid number of arguments for canceling.");
                    return;
                }
                try
                {
                    Guid bookingId = Guid.Parse(parts[1]);
                    CancelBookingCommand cancelCommand = new(_bookingService, bookingId);
                    cancelCommand.Execute();
                    _executedCommands.Add(++s_commandIndex, cancelCommand);
                    Console.WriteLine("Cancellation command run is successful.");
                }
                catch
                { 
                    Console.WriteLine("Invalid bookingId");
                }
                break;

            case "undo":
                try //было изменено
                {
                    _executedCommands[s_commandIndex].Undo();
                    _executedCommands.Remove(s_commandIndex);
                    s_commandIndex--;
                    Console.WriteLine("Last command undone.");
                }
                catch (KeyNotFoundException ex)
                {
                    Console.WriteLine("Command history is empty.");    
                }
                catch (Exception ex)
                {
                    Console.WriteLine($"{ex.Message}");
                }
                break;
            case "find":
                if (parts.Length != 2)
                {
                    Console.WriteLine("Invalid arguments for 'find'. Expected format: 'find <BookingId>'");
                    return;
                }
                try
                {
                    Guid id = Guid.Parse(parts[1]); //слишком самоуверенный парс. нужен кетч как и повыше
                    FindBookingByIdCommand findCommand = new(_bookingService, id);
                    findCommand.Execute();
                    _executedCommands.Add(++s_commandIndex, findCommand);
                }
                catch
                {
                    Console.WriteLine("Invalid input");
                }
                break;

            case "search":
                if (parts.Length != 4)
                {
                    Console.WriteLine("Invalid arguments for 'search'. Expected format: 'search <StartDate> <EndDate> <CategoryName>'");
                    return;
                }
                try
                {
                    DateTime startDate = DateTime.Parse(parts[1]); 
                    DateTime endDate = DateTime.Parse(parts[2]); 
                    string categoryName = parts[3]; 
                    SearchBookingsCommand searchCommand = new(_bookingService, startDate, endDate, categoryName);
                    searchCommand.Execute();
                    _executedCommands.Add(++s_commandIndex, searchCommand);
                }
                catch (Exception e)
                {
                    Console.WriteLine("Invalid input");
                }
                break;

            default:
                Console.WriteLine("Unknown command.");
                break;
        }
    }
}
