using AngularApiTest.Models;
using AngularApiTest.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AngularApiTest.Controllers
{
    [EnableCors]
    [Route("api/[controller]")]
    [ApiController]
    public class RegisterController : ControllerBase
    {
        //private IRegisterService _registerService;

        //public RegisterController(IRegisterService userService)
        //{
        //    _registerService = userService;


        //}

        private readonly RegisterContext _context;

        public RegisterController(RegisterContext context)
        {
            _context = context;
        }


        //[HttpPost]
        //[Route("Register")]
        //public IActionResult Register(Registration register)
        //{
        //    try
        //    {
        //        var model = _registerService.Register(register);
        //        return Ok(model);
        //    }
        //    catch (Exception)
        //    {
        //        return BadRequest();
        //    }
        //    // return Ok(new Response { Status = "Successs", Message = "User created Successfully" });

        //}

        [HttpPost]
        public async Task<ActionResult<Registration>> PostRegistration(Registration register)
        {
            _context.registration.Add(register);
            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateException)
            {
                if (RegisterExists(register.Id))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }
            //await _context.SaveChangesAsync();

            //return CreatedAtAction("GetPaymentDetails", new { id = register.Id }, register);
            return Ok();

        }

        private bool RegisterExists(int id)
        {
            return _context.registration.Any(e => e.Id == id);
        }
    }
}
