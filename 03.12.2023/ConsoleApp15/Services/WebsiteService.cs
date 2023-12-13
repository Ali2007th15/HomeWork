using ConsoleApp15.Proxy;

namespace ConsoleApp15.Clases;

class WebsiteService
{
    private ProxyService _proxyService;

    public void Login()
    {
        _proxyService = new();
    }
}