using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _11._01._2024;
public class TaskAction : ITaskAction
{
    private DataTable _tasks;

    public TaskAction(DataTable dataTable)
    {
        _tasks = dataTable;
    }

    public List<Task> GetAllTask()
    {
        List<Task> tasks = new List<Task>();

        foreach (DataRow row in _tasks.Rows)
        {
            Task task = new Task
            {
                Id = (int)row["Id"],
                Name = row["Name"].ToString(),
            };

            tasks.Add(task);
        }

        return tasks;
    }

    public Task CreateTask(Task task)
    {
        DataRow row = _tasks.NewRow();
        row["Id"] = task.Id;
        row["Name"] = task.Name;

        _tasks.Rows.Add(row);
        return task;
    }

    public Task UpdateTask(Task task)
    {
        DataRow row = _tasks.Rows.Find(task.Id);

        if (row != null)
        {
            row["Name"] = task.Name;
            return task;
        }

        throw new Exception("Task not found");
    }

    public bool DeleteTask(int taskId)
    {
        DataRow row = _tasks.Rows.Find(taskId);

        if (row != null)
        {
            _tasks.Rows.Remove(row);
            return true;
        }

        throw new Exception("Task not found");
    }
}

