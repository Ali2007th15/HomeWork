using System;

//
// Kettle kettle = new ("Hofman Kettle", "One of the best kettles");
// Microwave microwave = new ("Samsung Microwave", "Microwave with grill");
// Car car = new ("Mersedes GT63 4doors", "Sedan with a gasoline engine");
//
// kettle.Show();
// kettle.Sound();
// kettle.Desc();
//
// Console.WriteLine();
//
// microwave.Show();
// microwave.Sound();
// microwave.Desc();
//
// Console.WriteLine();
//
// car.Show();
// car.Sound();
// car.Desc();
//
// class Device
// {
//     public string Name { get; init; }
//     public string Description { get; init; }
//
//     public Device(string name, string description)
//     {
//         Name = name;
//         Description = description;
//     }
//
//     public virtual void Sound()
//     {
//         Console.WriteLine("Device has no sound");
//     }
//
//     public void Show()
//     {
//         Console.WriteLine($"Device: {Name}");
//     }
//
//     public void Desc()
//     {
//         Console.WriteLine($"Description: {Description}");
//     }
// }
//
// class Kettle : Device
// {
//     public Kettle(string name, string description) : base(name, description) { }
//
//     public override void Sound()
//     {
//         Console.WriteLine("Kettle sound: sound of boiling water");
//     }
// }
//
// class Microwave : Device
// {
//     public Microwave(string name, string description) : base(name, description) { }
//
//     public override void Sound()
//     {
//         Console.WriteLine("Microwave sound: buzzes when it's running");
//     }
// }
//
// class Car : Device
// {
//     public Car(string name, string description) : base(name, description) { }
//
//     public override void Sound()
//     {
//         Console.WriteLine("Car sound: exhaust sound");
//     }
// }
//



//
// Violin violin = new ("Violin", "It's a instrument", "The violin was created in 1709");
// Trombone trombone = new ("Trombone", "It's a instrument", "The trombone was created in the 15th century");
// Ukulele ukulele = new ("Ukulele", "It's a  instrument", "The ukulele was created in 1880");
// Cello cello = new ("Cello", "It's a  instrument", "The cello was created in 1550");
//
// violin.Show();
// violin.Sound();
// violin.Desc();
// violin.History2();
//
// Console.WriteLine();
//
// trombone.Show();
// trombone.Sound();
// trombone.Desc();
// trombone.History2();
//
// Console.WriteLine();
//
// ukulele.Show();
// ukulele.Sound();
// ukulele.Desc();
// ukulele.History2();
//
// Console.WriteLine();
//
// cello.Show();
// cello.Sound();
// cello.Desc();
// cello.History2();
//
// class MusicalInstrument
// {
//     protected string Name { get; set; }
//     protected string Description { get; set; }
//     protected string History { get; set; }
//
//     public MusicalInstrument(string name, string description, string history)
//     {
//         Name = name;
//         Description = description;
//         History = history;
//     }
//
//     public void Sound()
//     {
//         Console.WriteLine($"Sound: Sound of {Name}.");
//     }
//
//     public void Show()
//     {
//         Console.WriteLine($"Instrument Name: {Name}");
//     }
//
//     public void Desc()
//     {
//         Console.WriteLine($"Instrument Description: {Description}");
//     }
//
//     public void History2()
//     {
//         Console.WriteLine($"History of the instrument: {History}");
//     }
// }
//
// class Violin : MusicalInstrument
// {
//     public Violin(string name, string description, string history)
//         : base(name, description, history)
//     {
//     }
// }
//
// class Trombone : MusicalInstrument
// {
//     public Trombone(string name, string description, string history)
//         : base(name, description, history)
//     {
//     }
// }
//
// class Ukulele : MusicalInstrument
// {
//     public Ukulele(string name, string description, string history)
//         : base(name, description, history)
//     {
//     }
// }
//
// class Cello : MusicalInstrument
// {
//     public Cello(string name, string description, string history)
//         : base(name, description, history)
//     {
//     }
// }
//


President president = new President { Name = "Ali", Id = 1 };
Security security = new Security { Name = "Rustam", Id = 2 };
Manager manager = new Manager { Name = "Rufat", Id = 3 };
Engineer engineer = new Engineer { Name = "Elnur", Id = 4 };

president.Print();
security.Print();
manager.Print();
engineer.Print();

abstract class Worker
{
    public string Name { get; set; }
    public int Id { get; set; }

    public abstract void Print();
}


class President : Worker
{
    public override void Print()
    {
        Console.WriteLine($"President: {Name}, ID: {Id}");
    }
}


class Security : Worker
{
    public override void Print()
    {
        Console.WriteLine($"Security: {Name}, ID: {Id}");
    }
}


class Manager : Worker
{
    public override void Print()
    {
        Console.WriteLine($"Manager: {Name},  ID: {Id}");
    }
}


class Engineer : Worker
{
    public override void Print()
    {
        Console.WriteLine($"Engineer: {Name}, ID: {Id}");
    }
}