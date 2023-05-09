using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using PassportsRehaulReact.Data;
using PassportsRehaulReact.Models;

namespace PassportsRehaulReact.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PassportNewFeesController : ControllerBase
    {
        private readonly PassportDbContext _context;

        public PassportNewFeesController(PassportDbContext context)
        {
            _context = context;
        }

        // GET: api/PassportNewFees
        [HttpGet]
        public async Task<ActionResult<IEnumerable<PassportNewFees>>> GetPassportNewFees()
        {
          if (_context.PassportNewFees == null)
          {
              return NotFound();
          }
            return await _context.PassportNewFees.ToListAsync();
        }

        // GET: api/PassportNewFees/5
        [HttpGet("{id}")]
        public async Task<ActionResult<PassportNewFees>> GetPassportNewFees(int? id)
        {
          if (_context.PassportNewFees == null)
          {
              return NotFound();
          }
            var passportNewFees = await _context.PassportNewFees.FindAsync(id);

            if (passportNewFees == null)
            {
                return NotFound();
            }

            return passportNewFees;
        }

        // PUT: api/PassportNewFees/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutPassportNewFees(int? id, PassportNewFees passportNewFees)
        {
            if (id != passportNewFees.Sort)
            {
                return BadRequest();
            }

            _context.Entry(passportNewFees).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!PassportNewFeesExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/PassportNewFees
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<PassportNewFees>> PostPassportNewFees(PassportNewFees passportNewFees)
        {
          if (_context.PassportNewFees == null)
          {
              return Problem("Entity set 'PassportDbContext.PassportNewFees'  is null.");
          }
            _context.PassportNewFees.Add(passportNewFees);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetPassportNewFees", new { id = passportNewFees.Sort }, passportNewFees);
        }

        // DELETE: api/PassportNewFees/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeletePassportNewFees(int? id)
        {
            if (_context.PassportNewFees == null)
            {
                return NotFound();
            }
            var passportNewFees = await _context.PassportNewFees.FindAsync(id);
            if (passportNewFees == null)
            {
                return NotFound();
            }

            _context.PassportNewFees.Remove(passportNewFees);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool PassportNewFeesExists(int? id)
        {
            return (_context.PassportNewFees?.Any(e => e.Sort == id)).GetValueOrDefault();
        }
    }
}
