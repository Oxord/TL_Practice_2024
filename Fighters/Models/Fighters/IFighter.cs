using Fighters.Models.Armors;
using Fighters.Models.Races;
using Fighters.Models.Weapons;

namespace Fighters.Models.Fighters;

public interface IFighter
{
    string name { get; }
    public IRace race { get; }
    public IWeapon weapon { get; }
    public IArmor armor { get; }
    public int currentHealth { get; }

    public int GetCurrentHealth();
    public int GetMaxHealth();
    public int CalculateDamage();
    public int CalculateArmor();

    public void SetArmor( IArmor armor );
    public void SetWeapon( IWeapon weapon );

    public void TakeDamage( int damage );

    public void PrintFighterStatus();
}