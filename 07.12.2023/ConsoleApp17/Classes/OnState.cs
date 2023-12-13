using ConsoleApp17.Interfaces;

namespace ConsoleApp17.Classes;

public class OnState : IState
{
    public void TurnOn()
    {
        Console.WriteLine("Light is already on");
    }

    public void TurnOff()
    {
        Console.WriteLine("Turning off light");
    }
}
