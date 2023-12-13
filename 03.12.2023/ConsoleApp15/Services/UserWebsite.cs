using ConsoleApp15.Interfaces;

namespace ConsoleApp15.Clases;

class UserWebsite
{
    public IWebsite Website { get; set; }

    public UserWebsite(IWebsite website)
    {
        Website = website;
    }

    public void Login()
    {
        Website.Login();
    }
}
