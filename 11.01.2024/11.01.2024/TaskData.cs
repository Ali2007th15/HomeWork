using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _11._01._2024;

public class TaskData
{
    public DataTable CreateTaskTable()
    {
        DataTable dataTable = new DataTable("Tasks");

        dataTable.Columns.Add("Id", typeof(int));
        dataTable.Columns.Add("Name", typeof(string));

        return dataTable;
    }
}
