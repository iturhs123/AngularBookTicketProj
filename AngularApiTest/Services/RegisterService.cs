using AngularApiTest.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AngularApiTest.Services
{
    public class RegisterService : IRegisterService
    {
        private RegisterContext _context;

        public RegisterService(RegisterContext context)
        {
            _context = context;
        }
        public Registration Register(Registration user)
        {
            _context.registration.Add(user);
            _context.SaveChanges();
            return null;
        }
    }
}
