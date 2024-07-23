using Fighters.Models.Fighters;
using System.Text;

namespace Fighters;

public class Program
{
    public static void Main( string[] args )
    {
        Dictionary<int, Fighter> currentFighters = new();
        int currentFightersAmount = 0;
        string userCommand = string.Empty;
        SetupWindowEncoding();
        PrintMenu();
        while ( true )
        {

            userCommand = ReadUserCommand();

            switch ( userCommand )
            {
                case "add-fighter":
                    {
                        currentFightersAmount++;
                        currentFighters.Add( currentFightersAmount, PreparingGame.CrateFighter() );
                        break;
                    }
                case "show-all-fighters":
                    {
                        ShowAllFighters( currentFightersAmount, currentFighters );
                        break;
                    }
                case "play":
                    {
                        if ( currentFightersAmount >= 2 )
                        {
                            Console.WriteLine( "Выберите первого бойца" );
                            Fighter fighterOne = ChooseFighter( currentFighters );
                            currentFightersAmount--;
                            Console.WriteLine( "Выберите второго бойца" );
                            Fighter fighterTwo = ChooseFighter( currentFighters );
                            currentFightersAmount--;
                            GameManager gameManager = new GameManager();
                            Fighter winner = gameManager.Play( fighterOne, fighterTwo );
                            currentFightersAmount++;
                            if ( currentFighters.Count != 0 )
                            {
                                currentFighters.Add( currentFighters.Last().Key + 1, winner );
                            }
                            else
                            {
                                currentFighters.Add( 1, winner );
                            }
                        }
                        else
                        {
                            Console.WriteLine( "Для схватки необходимы 2 бойца!" );
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

    private static void SetupWindowEncoding()
    {
        Console.OutputEncoding = Encoding.UTF8;
    }

    private static void PrintMenu()
    {
        Console.WriteLine( "Консольная игра Fighters" );
        Console.WriteLine( "Команды: " );
        Console.WriteLine( "add-fighter - добавить бойца на арену" );
        Console.WriteLine( "show-all-fighters - показать всех добавленных бойцов" );
        Console.WriteLine( "play - начать битву" );
        Console.WriteLine( "exit - выйти из игры" );
    }

    private static string ReadUserCommand()
    {
        Console.Write( "Введите команду: " );
        string action = Console.ReadLine();
        while ( action != "add-fighter" && action != "play" && action != "show-all-fighters" && action != "exit" )
        {
            Console.WriteLine( "Неизвестная команда!" );
            Console.Write( "Введите команду: " );
            action = Console.ReadLine();
        }
        return action;
    }

    public static void ShowAllFighters( int fightersAmount, Dictionary<int, Fighter> fightersList )
    {
        if ( fightersAmount > 0 )
        {
            foreach ( KeyValuePair<int, Fighter> fighter in fightersList )
            {
                fighter.Value.PrintFighterStatus();
            }
        }
        else
        {
            Console.WriteLine( "Вы ещё не добавили ни одного персонажа" );
        }
    }
    private static Fighter ChooseFighter( Dictionary<int, Fighter> fightersList )
    {
        int fighterNum;
        do
        {
            foreach ( KeyValuePair<int, Fighter> fighter in fightersList )
            {
                Console.WriteLine( $"{fighter.Key} - {fighter.Value.name}" );
            }
            Console.Write( "Укажите номер бойца: " );
            if ( !Int32.TryParse( Console.ReadLine(), out fighterNum ) )
            {
                Console.WriteLine( "Укажите просто цифру!" );
            }
        }
        while ( !fightersList.ContainsKey( fighterNum ) );
        Fighter fighterSelected = fightersList[ fighterNum ];
        fightersList.Remove( fighterNum );
        return fighterSelected;
    }

}


