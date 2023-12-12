using ConsoleApp14.Interfaces;
using ConsoleApp14.Interfaces.Factories;

namespace ConsoleApp14.Classes.Factories;

class RedCarFactory : ICarFactory
{
    public ICar CreateSportCar()
    {
        return new RedSportCar();
    }

    public ICar CreateSUV()
    {
        return new RedSUV();
    }

    public ICar CreateSedan()
    {
        return new RedSedan();
    }
}