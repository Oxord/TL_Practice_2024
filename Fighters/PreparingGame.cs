using Fighters.Models.Armors;
using Fighters.Models.Fighters;
using Fighters.Models.Races;
using Fighters.Models.Weapons;
using System.Runtime.InteropServices;

namespace Fighters;
public class PreparingGame
{
    static private readonly Dictionary<int, IRace> fighterRaces = new() { { 1, new Dwarf() }, { 2, new Elf() }, { 3, new Human() }, { 4, new Goblin() } };
    static private readonly Dictionary<int, IWeapon> weapons = new() { { 0, new NoWeapon() }, { 1, new Dagger() }, { 2, new Mace() }, { 3, new Rapier() }, { 4, new Spear() }, { 5, new Sword() } };
    static private readonly Dictionary<int, IArmor> armors = new() { { 0, new NoArmor() }, { 1, new ChainArmour() }, { 2, new Corselet() }, { 3, new Cuirass() } };


    static public Fighter CrateFighter()
    {
        Console.Write( "Укажите имя персонажа: " );
        string name = Console.ReadLine();

        int raceNum;
        do
        {
            Console.WriteLine( "Укажите расу персонажа\n1 - дварф\n2 - эльф\n3 - человек\n4 - гоблин" );
            if ( !Int32.TryParse( Console.ReadLine(), out raceNum ) )
            {
                Console.WriteLine( "Укажите цифру!" );
            }
        }
        while ( !fighterRaces.ContainsKey( raceNum ) );

        int weaponNum;
        do
        {
            Console.WriteLine( "Выберите оружие\n0 - без оружия\n1 - клинок\n2 - булава\n3 - рапира\n4 - копье\n5 - меч" );
            if ( !Int32.TryParse( Console.ReadLine(), out weaponNum ) )
            {
                weaponNum = -1;
                Console.WriteLine( "Укажите цифру!" );
            }
        }
        while ( !weapons.ContainsKey( weaponNum ) );

        int armourNum;
        do
        {
            Console.WriteLine( "Выберите броню\n0 - без брони\n1 - кольчуга\n2 - латы\n3 - кираса" );
            if ( !Int32.TryParse( Console.ReadLine(), out armourNum ) )
            {
                armourNum = -1;
                Console.WriteLine( "Укажите цифру!" );
            }
        }
        while ( !armors.ContainsKey( armourNum ) );

        while ( true )
        {
            Console.WriteLine( "Выберите класс бойца\n1 - варвар\n2 - рыцарь\n3 - паладин\n4 - волшебник" );
            int fighterClassNum;//пофксить эьу шнягу
            if ( !Int32.TryParse( Console.ReadLine(), out fighterClassNum ) )
            {
                Console.WriteLine( "Введите только цифру!" );
            }
            switch ( fighterClassNum )
            {
                case 1:
                    return new Barbarian( name, fighterRaces[ raceNum ], weapons[ weaponNum ], armors[ armourNum ] );
                case 2:
                    return new Knight( name, fighterRaces[ raceNum ], weapons[ weaponNum ], armors[ armourNum ] );
                case 3:
                    return new Paladin( name, fighterRaces[ raceNum ], weapons[ weaponNum ], armors[ armourNum ] );
                case 4:
                    return new Wizard( name, fighterRaces[ raceNum ], weapons[ weaponNum ], armors[ armourNum ] );
            }
        }
    }
}
