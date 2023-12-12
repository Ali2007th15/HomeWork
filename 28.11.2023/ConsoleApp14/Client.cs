using ConsoleApp14.Classes.Factories;
using ConsoleApp14.Interfaces.Factories;
namespace ConsoleApp14;

class Client
{
    public void Display()
    {
        Console.WriteLine("Cars:");
        ClientMethod(new RedCarFactory());
        ClientMethod(new BlueCarFactory());
    }

    public void ClientMethod(ICarFactory factory)
    {
        var sportcar = factory.CreateSportCar();
        var suv = factory.CreateSUV();
        var sedan = factory.CreateSedan();

        
        Console.WriteLine($"Color: {sportcar.Color()}, Type: {sportcar.Type()}");
        Console.WriteLine($"Color: {suv.Color()}, Type: {suv.Type()}");
        Console.WriteLine($"Color: {sedan.Color()}, Type: {sedan.Type()}");
    }
}