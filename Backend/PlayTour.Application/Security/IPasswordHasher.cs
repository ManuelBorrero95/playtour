using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PlayTour.Application.Security
{
    public interface IPasswordHasher
    {
        void CreatePasswordHash(string password, out string hash, out string salt);
        bool VerifyPassword(string password, string storedHash, string storedSalt);
    }
}
