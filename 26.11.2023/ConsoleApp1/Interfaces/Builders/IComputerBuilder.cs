using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using ConsoleApp1.Classes;

namespace ConsoleApp1.Interfaces.Builders;

// IComputerBuilder определяет методы, которые строители компьютеров должны реализовать
public interface IComputerBuilder
{
    void B_CPU();
    void B_RAM();
    void B_GraphicsCard();
    void B_Memory();
    Computer GetComputer();
}

