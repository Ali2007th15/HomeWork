namespace ConsoleApp14.Interfaces.Factories;

public interface ICarFactory
{
    ICar CreateSportCar();
    ICar CreateSUV();
    ICar CreateSedan();
}