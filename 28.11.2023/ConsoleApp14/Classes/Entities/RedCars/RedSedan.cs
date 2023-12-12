using ConsoleApp14.Interfaces;
namespace ConsoleApp14.Classes;

class RedSedan : ICar
{
    public string Color()
    {
        return "Red";
    }

    public string Type()
    {
        return "Sedan";
    }
}