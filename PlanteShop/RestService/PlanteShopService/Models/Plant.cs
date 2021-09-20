using System;
using System.Collections.Generic;

#nullable disable

namespace MockConsumer.Models
{
    public partial class Plant
    {
        public int Id { get; set; }
        public string PlanteType { get; set; }
        public string PlanteNavn { get; set; }
        public int? MaxHoejde { get; set; }
        public int? Price { get; set; }
    }
}
