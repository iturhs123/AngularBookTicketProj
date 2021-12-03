using AngularApiTest.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AngularApiTest.Services
{
    public interface IRegisterService
    {
        public Registration  Register(Registration user);

    }
}
