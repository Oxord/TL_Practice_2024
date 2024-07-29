using System.Text;

namespace Domain.Models;

public class Theater
{
    public int Id { get; private init; }
    public string Name { get; set; }
    public string Address { get; private init; }
    public DateTime OpeningDate { get; private init; }
    public string OperatingMode { get; set; }
    public string Description { get; set; }
    public string PhoneNumber { get; set; }

    public List<Play> Plays { get; set; } = new List<Play>();

    public Theater(string name, string address, DateTime openingDate, string operatingMode, string description, string phoneNumber)
    {
        Name = name;
        Address = address;
        OpeningDate = openingDate;
        OperatingMode = operatingMode;
        Description = description;
        PhoneNumber = phoneNumber;
    }

    public override string ToString()
    {
        StringBuilder sb = new(300);
        sb.AppendLine("[Theater]");
        sb.AppendLine($"  Id: {Id}");
        sb.AppendLine($"  Name: {Name}");
        sb.AppendLine($"  Description: {Description}");
        sb.AppendLine($"  Address: {Address}");
        sb.AppendLine($"  Operating mode: {OperatingMode}");
        sb.AppendLine($"  OpeningDate: {OpeningDate}");
        sb.AppendLine($"  PhoneNumber: {PhoneNumber}");
        sb.AppendLine($"  [Plays]: ");
        foreach (Play play in Plays)
        {
            sb.AppendLine($"    {play}");
        }

        return sb.ToString();
    }
}