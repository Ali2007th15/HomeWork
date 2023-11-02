using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Data;
using System.Windows.Documents;
using System.Windows.Input;
using System.Windows.Media;
using System.Windows.Media.Imaging;
using System.Windows.Navigation;
using System.Windows.Shapes;

namespace _12._10._2023
{
    /// <summary>
    /// Interaction logic for MainWindow.xaml
    /// </summary>
    public partial class MainWindow : Window
    {
        public MainWindow() => InitializeComponent();

        private void Button_Log_Click(object sender, RoutedEventArgs e)
        {
            Login login = new Login();
            login.Show();
            Hide();
        }

        private void Button_S_Click(object sender, RoutedEventArgs e)
        {
            string username = textBoxUsername.Text.Trim();
            string password = textBoxPassword.Password.Trim();
            string email = textBoxUsername.Text.Trim().ToLower();

            if (username.Length < 3)
            {
                MessageBox.Show("minimum 3 characters in username");
            }
            else if (password.Length < 8)
            {  
               MessageBox.Show("minimum 8 characters in password");
            }
            else if (email.Length < 5 || !email.Contains('@') || !email.Contains('.'))
            {
               MessageBox.Show("Email is written incorrectly");
            }
            else
            {
                MessageBox.Show("You create account");
            }
        }
    }
}
