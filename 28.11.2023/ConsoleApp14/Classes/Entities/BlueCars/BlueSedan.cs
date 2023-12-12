using ConsoleApp14.Interfaces;
namespace ConsoleApp14.Classes;

class BlueSedan : ICar
{
    public string Color()
    {
        return "Blue";
    }

    public string Type()
    {
        return "Sedan";
    }
}
