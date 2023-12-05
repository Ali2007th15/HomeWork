using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using ConsoleApp1.Classes;
using ConsoleApp1.Interfaces.Builders;

namespace ConsoleApp1.Classes.Builders;

    // DesignerComputerBuilder реализует строитель для дезайнерского компьютера
    public class DesignerComputerBuilder : IComputerBuilder
    {
        private Computer computer = new();

        public void B_CPU()
        {
            computer.CPU = "Intel Core I9";
        }

        public void B_RAM()
        {
            computer.RAM = "32GB RAM";
        }

        public void B_GraphicsCard()
        {
            computer.GraphicsCard = "NVIDIA RTX 3090";
        }

        public void B_Memory()
        {
            computer.Memory = "2TB";
        }

        public Computer GetComputer()
        {
            return computer;
        }
    }


