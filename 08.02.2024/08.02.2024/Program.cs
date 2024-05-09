using _08._02._2024;

var connectionString = "Data Source=localhost;Initial Catalog=Cars;Integrated Security = True;";

var carAction = new CarAction(connectionString);
var cars = carAction.GetAllCars();

foreach (var car in cars)
{
    Console.WriteLine($"Id: {car.Id}, Name: {car.Name}, Model:{car.Model}");
}