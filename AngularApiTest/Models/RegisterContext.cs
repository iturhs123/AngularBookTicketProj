using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AngularApiTest.Models
{
    public class RegisterContext: DbContext
    {
        internal object register;

        public RegisterContext(DbContextOptions<RegisterContext> options) : base(options) { }

        public DbSet<Registration> registration { get; set; }
    }
}
