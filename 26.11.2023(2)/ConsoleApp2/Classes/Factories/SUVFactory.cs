using ConsoleApp2.Interfaces;
using ConsoleApp2.Interfaces.Factories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApp2.Classes.Factories
{
    public class SUVFactory : IAutomobileFactory
    {
        public IAutomobile CreateAutomobile()
        {
            return new SUV();
        }
    }
}
