using ADY_API.Models;
using ADY_API.Services;
using Microsoft.AspNetCore.Mvc;

namespace ADY_API.Controllers;

[ApiController]
[Route("api/[controller]")]
public class TicketController : ControllerBase
{
    private readonly ITicketService _ticketService;

    public TicketController(ITicketService ticketService)
    {
        _ticketService = ticketService;
    }

    [HttpPost]
    public IActionResult BuyTicket([FromBody] Ticket ticket)
    {
        if (ticket == null || string.IsNullOrWhiteSpace(ticket.PassengerName))
            return BadRequest("Invalid ticket information.");

        if (ticket.TrainId <= 0)
            return BadRequest("Please provide a valid train ID.");

        var result = _ticketService.PurchaseTicket(ticket);
        if (!result) return BadRequest("Unable to purchase ticket.");

        return Ok("Ticket purchased successfully.");
    }
}
