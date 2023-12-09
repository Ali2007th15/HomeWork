using ConsoleApp2.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApp2.Classes
{
    public class SUV : IAutomobile
    {
        public void Information()
        {
            Console.WriteLine("SUV:");
            Console.WriteLine("Make: Audi");
            Console.WriteLine("Model: Q8");
        }
    }
}
