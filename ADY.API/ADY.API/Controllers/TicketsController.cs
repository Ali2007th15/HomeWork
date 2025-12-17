using ADY.API.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace ADY.API.Controllers
{
	[Route("api/[controller]")]
	[ApiController]
	public class TicketsController : ControllerBase
	{
		private readonly MyDbContext _dbContext;

		public TicketsController(MyDbContext dbContext)
		{
			_dbContext = dbContext;
		}


		[HttpPost("Create")]
		public async Task<IActionResult> CreateTicket([FromBody] Ticket ticket)
		{
			if (ticket == null)
			{
				return BadRequest(new { Message = "Ticket data is required." });
			}

			try
			{
				ticket.CreatedOn = DateTime.UtcNow;

				_dbContext.Tickets.Add(ticket);
				await _dbContext.SaveChangesAsync();

				return Ok(new
				{
					Message = "Ticket created successfully",
					Ticket = ticket
				});
			}
			catch (DbUpdateException dbEx)
			{
				return StatusCode(500, new { Message = "Database update error", Error = dbEx.Message });
			}
			catch (Exception ex)
			{
				return StatusCode(500, new { Message = "An unexpected error occurred", Error = ex.Message });
			}
		}


		[HttpGet("{ticketId}")]
		public async Task<IActionResult> GetTicketById(int ticketId)
		{
			var ticket = await _dbContext.Tickets.FindAsync(ticketId);

			if (ticket == null)
				return NotFound(new { Message = "Ticket not found" });

			return Ok(ticket);
		}

		[HttpGet("User/{userId}")]
		public async Task<IActionResult> GetTicketsByUserId(int userId)
		{
			var tickets = await _dbContext.Tickets
				.Where(t => t.UserId == userId)
				.ToListAsync();

			if (!tickets.Any())
				return NotFound(new { Message = "No tickets found for this user" });

			return Ok(tickets);
		}

		[HttpGet("All")]
		public async Task<IActionResult> GetAllTickets()
		{
			var tickets = await _dbContext.Tickets.ToListAsync();

			if (!tickets.Any())
				return NotFound(new { Message = "No tickets found" });

			return Ok(tickets);
		}

		
		[HttpPut("Update/{ticketId}")]
		public async Task<IActionResult> UpdateTicket(int ticketId, [FromBody] Ticket updatedTicket)
		{
			if (updatedTicket == null)
				return BadRequest(new { Message = "Updated ticket data is required." });

			var existingTicket = await _dbContext.Tickets.FindAsync(ticketId);

			if (existingTicket == null)
				return NotFound(new { Message = "Ticket not found" });

			try
			{
				existingTicket.FullName = updatedTicket.FullName;
				existingTicket.Email = updatedTicket.Email;
				existingTicket.From = updatedTicket.From;
				existingTicket.To = updatedTicket.To;
				existingTicket.Date = updatedTicket.Date;
				existingTicket.Time = updatedTicket.Time;
				existingTicket.Seats = updatedTicket.Seats;
				existingTicket.TotalPrice = updatedTicket.TotalPrice;

				await _dbContext.SaveChangesAsync();

				return Ok(new
				{
					Message = "Ticket updated successfully",
					Ticket = existingTicket
				});
			}
			catch (DbUpdateException dbEx)
			{
				return StatusCode(500, new { Message = "Database update error", Error = dbEx.Message });
			}
			catch (Exception ex)
			{
				return StatusCode(500, new { Message = "An unexpected error occurred", Error = ex.Message });
			}
		}
		[HttpGet]
		[Route("BookedSeats")]
		public async Task<IActionResult> GetBookedSeats([FromQuery] string from, [FromQuery] string to, [FromQuery] string date, [FromQuery] string time)
		{
			var tickets = await _dbContext.Tickets
				.Where(t => t.From == from && t.Date == date && t.Time == time)
				.ToListAsync();

			var bookedSeats = tickets
				.SelectMany(t => t.Seats.Split(",").Select(s => int.Parse(s.Trim())))
				.ToList();

			return Ok(bookedSeats);
		}

		
		[HttpDelete("Delete/{ticketId}")]
		public async Task<IActionResult> DeleteTicket(int ticketId)
		{
			var ticket = await _dbContext.Tickets.FindAsync(ticketId);

			if (ticket == null)
				return NotFound(new { Message = "Ticket not found" });

			try
			{
				_dbContext.Tickets.Remove(ticket);
				await _dbContext.SaveChangesAsync();

				return Ok(new { Message = "Ticket deleted successfully" });
			}
			catch (DbUpdateException dbEx)
			{
				return StatusCode(500, new { Message = "Database update error", Error = dbEx.Message });
			}
			catch (Exception ex)
			{
				return StatusCode(500, new { Message = "An unexpected error occurred", Error = ex.Message });
			}
		}
	}
}
