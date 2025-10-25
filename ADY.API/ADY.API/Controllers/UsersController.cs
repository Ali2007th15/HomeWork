using ADY.API.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
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

        [HttpPost("Registration")]
        public IActionResult Registration(UserDTO userDTO)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            var objUser = dbContext.Users.SingleOrDefault(x => x.Email == userDTO.Email);
            if (objUser != null)
                return BadRequest("User already exists with the same email address");

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

        [HttpPost("Login")]
        public IActionResult Login(LoginDTO loginDTO)
        {
            var user = dbContext.Users.FirstOrDefault(x => x.Email == loginDTO.Email && x.Password == loginDTO.Password);
            if (user == null) return NoContent();

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

        [HttpPost("Logout")]
        public IActionResult Logout()
        {
            Response.Cookies.Delete("jwt", new CookieOptions
            {
                HttpOnly = true,
                Secure = true,
                SameSite = SameSiteMode.None,
                Expires = DateTime.UtcNow.AddDays(-1) // удаляем cookie
            });

            return Ok("Logged out successfully");
        }

        // Новый endpoint для восстановления сессии
        [HttpGet("RefreshToken")]
        public IActionResult RefreshToken()
        {
            if (!Request.Cookies.TryGetValue("jwt", out var token))
                return Unauthorized();

            var handler = new JwtSecurityTokenHandler();
            JwtSecurityToken jwtToken;
            try
            {
                jwtToken = handler.ReadJwtToken(token);
            }
            catch
            {
                return Unauthorized();
            }

            var emailClaim = jwtToken.Claims.FirstOrDefault(c => c.Type == JwtRegisteredClaimNames.Sub)?.Value;
            var user = dbContext.Users.FirstOrDefault(x => x.Email == emailClaim);
            if (user == null)
                return Unauthorized();

            var newToken = GenerateJwtToken(user);
            Response.Cookies.Append("jwt", newToken, new CookieOptions
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
    }
}
