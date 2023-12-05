using ConsoleApp1.Classes;
using ConsoleApp1.Classes.Builders;
using ConsoleApp1.Interfaces.Builders;


// Создал строителей
IComputerBuilder office_computer_builder = new OfficeComputerBuilder();
IComputerBuilder gaming_computer_builder = new GamingComputerBuilder();
IComputerBuilder design_computer_builder = new DesignerComputerBuilder();

// Создал директора
ComputerDirector computerDirector = new();

// Создал офисный компьютер
computerDirector.ConstructComputer(office_computer_builder);
Computer office_computer = office_computer_builder.GetComputer();

// Создал игровой компьютер
computerDirector.ConstructComputer(gaming_computer_builder);
Computer gaming_computer = gaming_computer_builder.GetComputer();

// Создал дизайнерский компьютер
computerDirector.ConstructComputer(design_computer_builder);
Computer designer_computer = design_computer_builder.GetComputer();

// Информация о каждом виде компьютера
Console.WriteLine("Office Computer:");
office_computer.Display();

Console.WriteLine("Gaming Computer:");
gaming_computer.Display();

Console.WriteLine("Designer Computer:");
designer_computer.Display();