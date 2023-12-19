using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using WpfApp10.Interfaces.Entities;

namespace WpfApp10.Classes.Entities;

internal class ConcreteTaskTextBox : ITaskTextBox
{
    public void Display()
    {
        Console.WriteLine("TextBox");
    }
}


