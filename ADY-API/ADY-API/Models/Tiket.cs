namespace ADY_API.Models;

public class Ticket
{
    public int Id { get; set; }
    public string PassengerName { get; set; }
    public int TrainId { get; set; }
    public DateTime PurchaseDate { get; set; }
    public string DepartureStation { get; set; }
    public string ArrivalStation { get; set; }
    public DateTime DepartureTime { get; set; }
}
