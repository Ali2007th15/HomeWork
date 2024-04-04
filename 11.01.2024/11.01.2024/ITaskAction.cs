using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _11._01._2024;

    public interface ITaskAction
{
        public List<Task> GetAllTask();
        public Task CreateTask(Task task);
        public Task UpdateTask(Task task);
        public bool DeleteTask(int taskId);
    }

