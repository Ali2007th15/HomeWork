using System.Windows;

namespace _12._10._2023
{
    /// <summary>
    /// Interaction logic for Login.xaml
    /// </summary>
    public partial class Login : Window
    {
        public Login()
        {
            InitializeComponent();
        }

        private void Button_SignUp_Click(object sender, RoutedEventArgs e)
        {
            MainWindow mainWindow = new MainWindow();
            mainWindow.Show();
            Hide();
        }

        private void button_L_Click(object sender, RoutedEventArgs e)
        {
            string username = textBoxUsername.Text.Trim();
            string password = textBoxPassword.Password.Trim();

            if (username.Length < 3)
            {
                MessageBox.Show("minimum 3 characters in username");
            }
            else if (password.Length < 8)
            {
                MessageBox.Show("minimum 8 characters in password");
            }
            else
            {
                MessageBox.Show("You are logged in account");
            }
        }
    }
}
