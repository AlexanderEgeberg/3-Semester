using System;
using System.Collections.Generic;
using System.Text;
using Microsoft.EntityFrameworkCore;

namespace modelLib.Model
{
    public class MeasurementContext : DbContext
    {
        public MeasurementContext(DbContextOptions<MeasurementContext> options) : base(options)
        {
        }

        public DbSet<Measurement> measurements { get; set; }
    }
}
