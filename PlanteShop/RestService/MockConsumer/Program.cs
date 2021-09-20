using System;

namespace MockConsumer
{
    class Program
    {
        static void Main(string[] args)
        { 
            worker worker = new worker(); 
            worker.Start();
        }
    }
}
