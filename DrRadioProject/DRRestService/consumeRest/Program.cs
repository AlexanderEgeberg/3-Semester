using System;

namespace consumeRest
{
    class Program
    {
        static void Main(string[] args)
        {
            worker work = new worker();
            work.Start();
            Console.ReadKey();
        }
    }
}
