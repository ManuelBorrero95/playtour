namespace PlayTour.Api.Dtos.Auth
{
    public class AuthResponse
    {
        public string Username { get; set; } = null!;
        public string AccessToken { get; set; } = null!;
        public DateTime ExpiresAt { get; set; }

    }
}
