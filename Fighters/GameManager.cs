using Fighters.Extensions;
using Fighters.Models.Fighters;
using Fighters.Models.Races;
using Fighters.Models.Weapons;

namespace Fighters;

public class GameManager
{
    public Fighter Play( Fighter fighterA, Fighter fighterB )
    {
        Fighter fighterFirst, fighterSecond;
        Fighter[] fightersQueue = GetFightersQueue( fighterA, fighterB );

        fighterFirst = fightersQueue[0];
        fighterSecond = fightersQueue[1];

        int rounds = 1;
        while ( true )
        {
            PrintRoundNumber( rounds );
            var firstFighterDamage = fighterFirst.CalculateDamage();
            fighterSecond.TakeDamage( firstFighterDamage );
            if ( !fighterSecond.IsAlive() )
            {
                PrintFightResult( fighterFirst, fighterSecond, firstFighterDamage );
                return fighterFirst;
            }

            var secondFighterDamage = fighterSecond.CalculateDamage();
            fighterFirst.TakeDamage( secondFighterDamage );
            if ( !fighterFirst.IsAlive() )
            {
                PrintFightResult( fighterSecond, fighterFirst, secondFighterDamage );
                return fighterSecond;
            }
            Console.WriteLine( $"{fighterFirst.name} наносит {firstFighterDamage} урона, получает {secondFighterDamage}" );
            Console.WriteLine( $"{fighterSecond.name} наносит {secondFighterDamage} урона, получает {firstFighterDamage}" );
            rounds++;
        }
    }

    private Fighter[] GetFightersQueue( Fighter fighterA, Fighter fighterB )
    {
        Random random = new Random();
        if ( random.Next( 2 ) == 0 )
        {
            return [ fighterA, fighterB ];
        }
        else
        {
            return [fighterB, fighterA];
        }
    }

    private static void PrintRoundNumber( int roundNumber )
    {
        Console.WriteLine( $"Раунд {roundNumber}" );
    }

    private static void PrintFightResult( IFighter fighterWinner, IFighter fighterLooser, int damage )
    {
        Console.WriteLine( $"{fighterWinner.name} наносит {damage} урона, получает 0" );
        Console.WriteLine( $"{fighterLooser.name} наносит 0 урона, получает {damage}" );
        Console.WriteLine( $"{fighterLooser.name} погибает" );
    }

}