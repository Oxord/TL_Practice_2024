using Fighters.Models.Armors;
using Fighters.Models.Races;
using Fighters.Models.Weapons;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Fighters.Models.Fighters;
public class Fighter : IFighter
{
    public string name { get; private set; }
    public IRace race { get; private set; }
    public IWeapon weapon { get; private set; }
    public IArmor armor { get; private set; }
    public int currentHealth { get; protected set; }
    public string fighterClass { get; protected set; }

    protected int fighterHealth = 0;
    protected int fighterDamage = 0;

    public Fighter( string name, IRace race, IWeapon weapon, IArmor armor )
    {
        this.name = name;
        this.race = race;
        this.weapon = weapon;
        this.armor = armor;
    }

    public int GetCurrentHealth()
    {
        return currentHealth;
    }

    public int GetMaxHealth()
    {
        return race.Health + fighterHealth;
    }

    public int CalculateDamage()
    {
        int damageDefault = race.Damage + weapon.Damage;
        Random random = new Random();
        int damageResultant;
        if ( random.Next( 11 ) != 10 )
        {
            int damageLowest = Convert.ToInt16( damageDefault * 0.8 );
            int damageHighest = Convert.ToInt16( damageDefault * 1.1 );
            damageResultant = random.Next( damageLowest, damageHighest );
        }
        else
        {
            int criticalDamage = damageDefault * 2;
            return criticalDamage;
        }
        return damageResultant;
    }

    public int CalculateArmor()
    {
        return race.Armor + armor.Armor;
    }

    public void SetArmor( IArmor Armor )
    {
        armor = Armor;
    }
    public void SetWeapon( IWeapon Weapon )
    {
        weapon = Weapon;
    }

    public void TakeDamage( int damage )
    {
        int newHealth = currentHealth - Math.Max( damage - CalculateArmor(), 0 );
        if ( newHealth < 0 )
        {
            newHealth = 0;
        }

        currentHealth = newHealth;
    }

    public bool isAlive()
    {
        return currentHealth > 0;
    }

    public void PrintFighterStatus()
    {
        Console.WriteLine( $"{name}" );
        Console.WriteLine( $"Раса - {race.Name}" );
        Console.WriteLine( $"Класс - {fighterClass}" );
        Console.WriteLine( $"Оружие - {weapon.Name}" );
        Console.WriteLine( $"Броня - {armor.Name}" );
        Console.WriteLine( $"Базовый урон - {race.Damage + weapon.Damage}" );
        Console.WriteLine( $"Защита - {CalculateArmor()}" );
        Console.WriteLine( $"Максимальное здоровье - {GetMaxHealth()}" );
        Console.WriteLine();
    }

}
