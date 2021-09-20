using System;
using System.Linq.Expressions;

namespace Model_class
{
    public class FanOutput
    {
        public static int _id = 0;
        private string _name;
        private int _temp;
        private int _fugt;

        public int Id { get; set; }

        public string Name
        {
            get { return _name; }
            set { CheckName(value); _name = value; }
        }

        public int Temp
        {
            get { return _temp; }
            set { CheckTemp(value); _temp = value; }
        }

        public int Fugt
        {
            get { return _fugt; }
            set { CheckFugt(value); _fugt = value; }
        }

        public FanOutput(int id, string name, int temp, int fugt)
        {
            CheckName(name);
            CheckTemp(temp);
            CheckFugt(fugt);
            _id++;
            Id = id;
            Id = _id;
            Name = name;
            Temp = temp;
            Fugt = fugt;
        }

        public FanOutput()
        {
            
        }

        private static void CheckName(string checkName)
        {
            if (checkName.Length < 2)
            {
                throw new ArgumentException("Name must contain at least 2 characters");
            }

        }
        private static void CheckTemp(int checkTemp)
        {
            if (checkTemp < 15 || checkTemp > 25)
            {
                throw new ArgumentException("Temp must be between 15 and 25");
            }

        }
        private static void CheckFugt(int checkFugt)
        {
            if (30 > checkFugt || checkFugt > 80)
            {
                throw new ArgumentException("Fugt must be between 30 and 80");
            }
        }

        public override string ToString()
        {
            return $"id: {Id}, name: {Name}, temp: {Temp}, fugt: {Fugt}";
        }
    }
}