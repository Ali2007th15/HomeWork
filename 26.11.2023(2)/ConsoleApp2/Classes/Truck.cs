using ConsoleApp2.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApp2.Classes
{
    public class Truck : IAutomobile
    {
        public void Information()
        {
            Console.WriteLine("Truck:");
            Console.WriteLine("Make: Volvo");
            Console.WriteLine("Model: FH16");
        }
    }
}
