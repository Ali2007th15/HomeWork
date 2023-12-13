using ConsoleApp17.Interfaces;

namespace ConsoleApp17.Classes;

public class OffState : IState
{
    public void TurnOn()
    {
        Console.WriteLine("Turning on light");
    }

    public void TurnOff()
    {
        Console.WriteLine("Light is already off");
    }
}