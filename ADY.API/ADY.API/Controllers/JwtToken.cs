using System.IdentityModel.Tokens.Jwt;

namespace ADY.API.Controllers
{
	internal class JwtToken
	{
		public JwtSecurityToken Token { get; set; }
	}
}