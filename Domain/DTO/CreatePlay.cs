﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Domain.DTO;
public class CreatePlay
{
    public string Name { get; set; }
    public DateTime StartDate { get; set; }
    public DateTime EndDate { get; set; }
    public int TicketPrice { get; set; }
    public string Description { get; set; }
    public int TheaterId { get; set; }
    public int CompositionId { get; set; }
}