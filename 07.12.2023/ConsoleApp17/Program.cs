using System;

Light light = new();

light.TurnOn();
light.TurnOn();
light.TurnOff();
light.TurnOff();

public interface IState
{
    void TurnOn();
    void TurnOff();
}

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