using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using ConsoleApp1.Interfaces.Builders;

namespace ConsoleApp1.Classes;

// ComputerDirector отвечает за пошаговое руководство процессом сборки компьютера
public class ComputerDirector
{
    // ConstructComputer принимает экземпляр строителя и вызывает его методы для пошаговой сборки компьютера
    public void ConstructComputer(IComputerBuilder builder)
    {
        builder.B_CPU();
        builder.B_RAM();
        builder.B_GraphicsCard();
        builder.B_Memory();
    }
}

