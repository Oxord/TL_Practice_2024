﻿namespace Domain.DTO;
public class CreateTheatre
{
    public string Name { get; set; }
    public string Address { get; set; }
    public DateTime OpeningDate { get; set; }
    public string BeginningWorkDay { get; set; }
    public string EndWorkDay { get; set; }
    public string Description { get; set; }
    public string PhoneNumber { get; set; }
}