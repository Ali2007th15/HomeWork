using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using ConsoleApp1.Classes;
using ConsoleApp1.Interfaces.Builders;

namespace ConsoleApp1.Classes.Builders;

    // OfficeComputerBuilder реализует строитель для офисного компьютера
    public class OfficeComputerBuilder : IComputerBuilder
    {
        private Computer computer = new();

        public void B_CPU()
        {
            computer.CPU = "Intel Core I5";
        }

        public void B_RAM()
        {
            computer.RAM = "8GB RAM";
        }

        public void B_GraphicsCard()
        {
            computer.GraphicsCard = "NVIDIA GT 1030";
        }

        public void B_Memory()
        {
            computer.Memory = "512GB SSD";
        }

        public Computer GetComputer()
        {
            return computer;
        }
    }

