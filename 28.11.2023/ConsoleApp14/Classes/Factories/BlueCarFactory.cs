using ConsoleApp14.Interfaces;
using ConsoleApp14.Interfaces.Factories;

namespace ConsoleApp14.Classes.Factories;

class BlueCarFactory : ICarFactory
{
    public ICar CreateSportCar()
    {
        return new BlueSportCar();
    }

    public ICar CreateSUV()
    {
        return new BlueSUV();
    }

    public ICar CreateSedan()
    {
        return new BlueSedan();
    }
}
