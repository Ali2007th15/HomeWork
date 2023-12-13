using ConsoleApp15.Clases;

namespace ConsoleApp15.Proxy;

class ProxyService
{
    private UserWebsite _userwebsite = new(new LoginByEmail());
    public ProxyService()
    {
        var websitetype = _userwebsite.Website.GetType().Name;
        Console.WriteLine($"Login in Website by {websitetype}");
        _userwebsite.Login();
    }
}