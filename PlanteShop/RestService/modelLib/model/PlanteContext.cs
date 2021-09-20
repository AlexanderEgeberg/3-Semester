using System;
using System.Collections.Generic;
using System.Text;
using Microsoft.EntityFrameworkCore;

namespace modelLib.model
{
    public class PlanteContext : DbContext
    {
        public PlanteContext(DbContextOptions<PlanteContext> options) : base(options)
        {
        }

        public DbSet<Plante> Planter { get; set; }
    }
}
