using ADY_API.Models;

namespace ADY_API.Services;
public interface ITicketService
{
    bool PurchaseTicket(Ticket ticket);
}
