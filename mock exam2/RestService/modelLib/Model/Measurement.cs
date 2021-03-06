using System;
using System.Collections.Generic;
using System.Text;

namespace modelLib.Model
{
    public class Measurement
    {
        public int Id { get; set; }
        public int Pressure { get; set; }
        public int Humidity { get; set; }
        public int Temperature { get; set; }
        public DateTime TimeStamp { get; set; }

        public Measurement(int id, int pressure, int humidity, int temperature, DateTime timeStamp)
        {
            Id = id;
            Pressure = pressure;
            Humidity = humidity;
            Temperature = temperature;
            TimeStamp = timeStamp;  
        }

        public Measurement()
        {
            
        }
    }
}
