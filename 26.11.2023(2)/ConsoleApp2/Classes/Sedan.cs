using ConsoleApp2.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApp2.Classes
{
    public class Sedan : IAutomobile  
    {
        public void Information()
        {
            Console.WriteLine("Sedan:");
            Console.WriteLine("Make: Mercedes");
            Console.WriteLine("Model: S Class");
        }
    }
}
