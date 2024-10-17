using ADY_API.Models;

namespace ADY_API.Services;
public class TicketService : ITicketService
{
    private readonly AppDbContext _context;

    public TicketService(AppDbContext context)
    {
        _context = context;
    }

    public bool PurchaseTicket(Ticket ticket)
    {
        var train = _context.Trains.FirstOrDefault(t => t.Id == ticket.TrainId);
        if (train == null || train.AvailableSeats <= 0) return false;

        train.AvailableSeats--;
        ticket.PurchaseDate = DateTime.Now;

        _context.Tickets.Add(ticket);
        _context.SaveChanges();

        return true;
    }
}