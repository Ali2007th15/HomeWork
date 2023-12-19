using System;
using System.Collections.ObjectModel;
using System.Windows;
using System.Windows.Controls;

namespace WpfApp10;

public partial class MainWindow : Window
{
    private ObservableCollection<string> tasks;

    public MainWindow()
    {
        InitializeComponent();
        tasks = new ObservableCollection<string>();
        taskListBox.ItemsSource = tasks;
    }

    private void AddClick(object sender, RoutedEventArgs e)
    {
        string nextTask = taskTextBox.Text;

        if (!string.IsNullOrEmpty(nextTask))
        {
            string task = $"{nextTask} [{DateTime.Now}]";
            tasks.Add(task);
            taskTextBox.Text = string.Empty;
        }
    }

    private void RemoveClick(object sender, RoutedEventArgs e)
    {
        if (taskListBox.SelectedItem != null)
        {
            tasks.Remove(taskListBox.SelectedItem.ToString());
        }
    }

    private void MarkClick(object sender, RoutedEventArgs e)
    {
        if (taskListBox.SelectedItem != null)
        {
            int selectedIndex = taskListBox.SelectedIndex;
            string selectedTask = taskListBox.SelectedItem.ToString();
            tasks[selectedIndex] = $"{selectedTask} - Completed";
            taskListBox.SelectedItem = null;
        }
    }
}
