using System;
using System.Buffers;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.Data.SqlClient;
using modelLib.Model;

namespace examRestService.Persistency
{
    public static class PersistencyService
    {
        private const string ConnectionString =
            @"Data Source=(localdb)\MSSQLLocalDB;Initial Catalog=MeasurementsDB;Integrated Security=True;Connect Timeout=30;Encrypt=False;TrustServerCertificate=False;ApplicationIntent=ReadWrite;MultiSubnetFailover=False";

        public static IEnumerable<Measurement> Get()
        {
            List<Measurement> measurements = new List<Measurement>();

            using (SqlConnection conn = new SqlConnection(ConnectionString))
            {
                conn.Open();
                if (conn.State == ConnectionState.Open)
                {
                    using (SqlCommand cmd = conn.CreateCommand())
                    {
                        cmd.CommandText = "select * From Measurements";
                        using (SqlDataReader reader = cmd.ExecuteReader())
                        {
                            while (reader.Read())
                            {
                                Measurement measurement = new Measurement();
                                measurement.Id = reader.GetInt32(0);
                                measurement.Pressure = reader.GetInt32(1);
                                measurement.Humidity = reader.GetInt32(2);
                                measurement.Temperature = reader.GetInt32(3);
                                measurement.TimeStamp = reader.GetDateTime(4);
                                measurements.Add(measurement);
                            }
                        }
                    }
                }
            }

            return measurements;
        }


    }
}