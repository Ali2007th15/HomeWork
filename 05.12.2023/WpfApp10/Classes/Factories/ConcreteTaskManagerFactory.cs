using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using WpfApp10.Classes.Entities;
using WpfApp10.Interfaces.Entities;
using WpfApp10.Interfaces.Factories;

namespace WpfApp10.Classes.Factories;

internal class ConcreteTaskManagerFactory : ITaskManagerFactory
{
    public ITaskButton CreateButton()
    {
        return new ConcreteTaskButton();
    }

    public ITaskTextBox CreateTextBox()
    {
        return new ConcreteTaskTextBox();
    }

    public ITaskListBox CreateListBox()
    {
        return new ConcreteTaskListBox();
    }
}

