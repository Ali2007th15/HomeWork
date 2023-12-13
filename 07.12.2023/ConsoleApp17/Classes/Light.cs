using ConsoleApp17.Interfaces;

namespace ConsoleApp17.Classes;

public class Light
{
    private IState current;

    public Light()
    {
        current = new OffState();
    }

    public void TurnOn()
    {
        current.TurnOn();
        current = new OnState();
    }

    public void TurnOff()
    {
        current.TurnOff();
        current = new OffState();
    }
}