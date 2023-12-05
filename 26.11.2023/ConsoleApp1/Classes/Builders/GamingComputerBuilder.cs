using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using ConsoleApp1.Classes;
using ConsoleApp1.Interfaces.Builders;

namespace ConsoleApp1.Classes.Builders;
    // GamingComputerBuilder реализует строитель для игрового компьютера
    public class GamingComputerBuilder : IComputerBuilder
    {
        private Computer computer = new();

        public void B_CPU()
        {
            computer.CPU = "Intel I7";
        }

        public void B_RAM()
        {
            computer.RAM = "16GB RAM";
        }

        public void B_GraphicsCard()
        {
            computer.GraphicsCard = "NVIDIA GeForce RTX 4090";
        }

        public void B_Memory()
        {
            computer.Memory = "1TB SSD";
        }

        public Computer GetComputer()
        {
            return computer;
        }
    }
