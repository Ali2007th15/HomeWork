using ADY.API.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using Microsoft.IdentityModel.Tokens;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;

namespace ADY.API.Controllers
{
	[Route("api/[controller]")]
	[ApiController]
	public class UsersController : ControllerBase
	{
		private readonly MyDbContext dbContext;
		private readonly ILogger<UsersController> logger;
		private readonly IConfiguration configuration;

		public UsersController(MyDbContext dbContext, ILogger<UsersController> logger, IConfiguration configuration)
		{
			this.dbContext = dbContext;
			this.logger = logger;
			this.configuration = configuration;
		}

		private string GenerateJwtToken(User user)
		{
			var claims = new[]
			{
				new Claim(JwtRegisteredClaimNames.Sub, user.Email),
				new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString()),
				new Claim("UserId", user.UserId.ToString()),
				new Claim(ClaimTypes.Name, $"{user.FirstName} {user.LastName}")
			};

			var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(configuration["Jwt:Key"]));
			var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);

			var token = new JwtSecurityToken(
				issuer: configuration["Jwt:Issuer"],
				audience: configuration["Jwt:Audience"],
				claims: claims,
				expires: DateTime.Now.AddMinutes(double.Parse(configuration["Jwt:ExpiryMinutes"])),
				signingCredentials: creds
			);

			return new JwtSecurityTokenHandler().WriteToken(token);
		}

		[HttpPost]
		[Route("Registration")]
		public IActionResult Registration(UserDTO userDTO)
		{
			if (!ModelState.IsValid)
			{
				return BadRequest(ModelState);
			}

			var objUser = dbContext.Users.SingleOrDefault(x => x.Email == userDTO.Email);
			if (objUser == null)
			{
				var newUser = new User
				{
					FirstName = userDTO.FirstName,
					LastName = userDTO.LastName,
					Email = userDTO.Email,
					Password = userDTO.Password // TODO: Hash passwords in production
				};
				dbContext.Users.Add(newUser);
				dbContext.SaveChanges();

				var token = GenerateJwtToken(newUser);
				Response.Cookies.Append("jwt", token, new CookieOptions
				{
					HttpOnly = true,
					Secure = true,
					SameSite = SameSiteMode.None,
					Expires = DateTime.Now.AddMinutes(double.Parse(configuration["Jwt:ExpiryMinutes"]))
				});

				return Ok("User registered successfully");
			}
			else
			{
				return BadRequest("User already exists with the same email address");
			}
		}

		[HttpPost]
		[Route("Login")]
		public IActionResult Login(LoginDTO loginDTO)
		{
			try
			{
				var user = dbContext.Users.FirstOrDefault(x => x.Email == loginDTO.Email && x.Password == loginDTO.Password);
				if (user != null)
				{
					var token = GenerateJwtToken(user);
					Response.Cookies.Append("jwt", token, new CookieOptions
					{
						HttpOnly = true,
						Secure = true,
						SameSite = SameSiteMode.None,
						Expires = DateTime.Now.AddMinutes(double.Parse(configuration["Jwt:ExpiryMinutes"]))
					});

					return Ok(new
					{
						FirstName = user.FirstName,
						LastName = user.LastName,
						Email = user.Email
					});
				}

				return NoContent();
			}
			catch (Exception ex)
			{
				logger.LogError(ex, "Error during login");
				return StatusCode(500, "Internal server error");
			}
		}

		[HttpPost]
		[Route("Logout")]
		public IActionResult Logout()
		{
			Response.Cookies.Delete("jwt");
			return Ok("Logged out successfully");
		}

		[HttpGet]
		[Route("VerifyToken")]
		[Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
		public IActionResult VerifyToken()
		{
			var email = User.FindFirst(JwtRegisteredClaimNames.Sub)?.Value;
			var user = dbContext.Users.FirstOrDefault(x => x.Email == email);
			if (user != null)
			{
				return Ok(new
				{
					FirstName = user.FirstName,
					LastName = user.LastName,
					Email = user.Email
				});
			}
			return Unauthorized();
		}

		[HttpGet]
		[Route("GetUserData")]
		[Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
		public IActionResult GetUserData()
		{
			try
			{
				var email = User.FindFirst(JwtRegisteredClaimNames.Sub)?.Value;
				var user = dbContext.Users.FirstOrDefault(x => x.Email == email);
				if (user != null)
				{
					return Ok(new
					{
						FirstName = user.FirstName,
						LastName = user.LastName,
						Email = user.Email
					});
				}
				return NoContent();
			}
			catch (Exception ex)
			{
				logger.LogError(ex, "Error fetching user data");
				return StatusCode(500, "Internal server error");
			}
		}

		[HttpGet]
		[Route("GetUsers")]
		[Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
		public IActionResult GetUsers()
		{
			return Ok(dbContext.Users.ToList());
		}

		[HttpGet]
		[Route("GetUser")]
		[Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
		public IActionResult GetUser(int id)
		{
			var user = dbContext.Users.FirstOrDefault(x => x.UserId == id);
			if (user != null)
				return Ok(user);
			return NoContent();
		}

		[HttpDelete]
		[Route("DeleteUser/{id}")]
		[Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
		public IActionResult DeleteUser(int id)
		{
			try
			{
				logger.LogInformation($"Attempting to delete user with ID: {id}");
				var user = dbContext.Users.FirstOrDefault(x => x.UserId == id);
				if (user != null)
				{
					dbContext.Users.Remove(user);
					dbContext.SaveChanges();
					logger.LogInformation($"User with ID {id} deleted successfully.");
					return Ok("User deleted successfully");
				}
				logger.LogWarning($"User with ID {id} not found.");
				return NotFound("User not found");
			}
			catch (Exception ex)
			{
				logger.LogError(ex, "Error deleting user");
				return StatusCode(500, "Internal server error");
			}
		}
	}
}