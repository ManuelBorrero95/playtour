using System.Security.Cryptography;

namespace PlayTour.Api.Services
{
    public class PasswordHasher : IPasswordHasher
    {
        private const int SaltSize = 16; 
        private const int KeySize = 32;  
        private const int Iterations = 10000;


        public void CreatePasswordHash(string password, out string hash, out string salt)
        {
            using var rng = RandomNumberGenerator.Create();
            var saltBytes = new byte[SaltSize];
            rng.GetBytes(saltBytes);
            salt = Convert.ToBase64String(saltBytes);

            using var pbkdf2 = new Rfc2898DeriveBytes(
                password,
                saltBytes,
                Iterations,
                HashAlgorithmName.SHA256);

            var key = pbkdf2.GetBytes(KeySize);
            hash = Convert.ToBase64String(key);
        }

        public bool VerifyPassword(string password, string storedHash, string storedSalt)
        {
            var saltBytes = Convert.FromBase64String(storedSalt);

            using var pbkdf2 = new Rfc2898DeriveBytes(
                password,
                saltBytes,
                Iterations,
                HashAlgorithmName.SHA256);

            var key = pbkdf2.GetBytes(KeySize);
            var computedHash = Convert.ToBase64String(key);

            return computedHash == storedHash;
        }
    }
}
}
