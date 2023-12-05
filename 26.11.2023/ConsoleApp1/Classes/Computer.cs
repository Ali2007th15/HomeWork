using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApp1.Classes;

// Computer представляет собой конечный продукт
public class Computer
{
    public string CPU { get; set; }
    public string RAM { get; set; }
    public string GraphicsCard { get; set; }
    public string Memory { get; set; }

    public void Display()
    {
        Console.WriteLine($"CPU: {CPU}");
        Console.WriteLine($"RAM: {RAM}");
        Console.WriteLine($"Graphics Card: {GraphicsCard}");
        Console.WriteLine($"Memory: {Memory}");
        Console.WriteLine();
    }
}

