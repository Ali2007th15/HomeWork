namespace ADY_API.Models;


public class Train
{
    public int Id { get; set; }
    public string TrainNumber { get; set; } = "T123";
    public string DepartureStation { get; set; } = "Station A";
    public string ArrivalStation { get; set; } = "Station B";
    public DateTime DepartureTime { get; set; }
    public DateTime ArrivalTime { get; set; }
    public int AvailableSeats { get; set; } = 30;
    public ICollection<Ticket> Tickets { get; set; } = new List<Ticket>();
}