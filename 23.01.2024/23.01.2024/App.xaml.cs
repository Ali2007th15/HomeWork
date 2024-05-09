using OMDBAPI.ViewModels;
using SimpleInjector;
using System.Configuration;
using System.Data;
using System.Windows;

namespace OMDBAPI
{

    public partial class App : Application
    {


        public static Container Container {  get;  set; } = new Container();
        public static MainWindow window = new();


        public void Register()
        {
            Container.RegisterSingleton<MainWindowViewModel>();


            Container.Verify();
        }

        protected override void OnStartup(StartupEventArgs e)
        {
            Register();

            window.DataContext = App.Container.GetInstance<MainWindowViewModel>();

            window.ShowDialog();
        }
    }

}
