using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using WpfApp10.Interfaces.Entities;

namespace WpfApp10.Interfaces.Factories;

internal interface ITaskManagerFactory
{
    ITaskButton CreateButton();
    ITaskTextBox CreateTextBox();
    ITaskListBox CreateListBox();
}
