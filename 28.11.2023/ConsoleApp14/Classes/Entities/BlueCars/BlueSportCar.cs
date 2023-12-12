using ConsoleApp14.Interfaces;
namespace ConsoleApp14.Classes;

class BlueSportCar : ICar
{
    public string Color()
    {
        return "Blue";
    }

    public string Type()
    {
        return "SportCar";
    }
}