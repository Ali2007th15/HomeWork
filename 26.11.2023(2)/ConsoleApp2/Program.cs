using ConsoleApp2.Classes.Factories;
using ConsoleApp2.Interfaces;
using ConsoleApp2.Interfaces.Factories;

IAutomobileFactory sedanFactory = new SedanFactory();
IAutomobileFactory suvFactory = new SUVFactory();
IAutomobileFactory truckFactory = new TruckFactory();

IAutomobile sedan = sedanFactory.CreateAutomobile();
IAutomobile suv = suvFactory.CreateAutomobile();
IAutomobile truck = truckFactory.CreateAutomobile();


sedan.Information();
Console.WriteLine("");
suv.Information();
Console.WriteLine("");
truck.Information();

