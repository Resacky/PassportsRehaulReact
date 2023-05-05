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
    public class PassPortFeesController : ControllerBase
    {
        private readonly PassportDbContext _context;

        public PassPortFeesController(PassportDbContext context)
        {
            _context = context;
        }

        // GET: api/PassPortFees
        [HttpGet]
        public async Task<ActionResult<IEnumerable<PassPortFees>>> GetPassPortFees()
        {
          if (_context.PassPortFees == null)
          {
              return NotFound();
          }
            return await _context.PassPortFees.ToListAsync();
        }

        // GET: api/PassPortFees/5
        [HttpGet("{id}")]
        public async Task<ActionResult<PassPortFees>> GetPassPortFees(int id)
        {
          if (_context.PassPortFees == null)
          {
              return NotFound();
          }
            var passPortFees = await _context.PassPortFees.FindAsync(id);

            if (passPortFees == null)
            {
                return NotFound();
            }

            return passPortFees;
        }

        // PUT: api/PassPortFees/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutPassPortFees(int id, PassPortFees passPortFees)
        {
            if (id != passPortFees.PPFEEID)
            {
                return BadRequest();
            }

            _context.Entry(passPortFees).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!PassPortFeesExists(id))
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

        // POST: api/PassPortFees
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<PassPortFees>> PostPassPortFees(PassPortFees passPortFees)
        {
          if (_context.PassPortFees == null)
          {
              return Problem("Entity set 'PassportDbContext.PassPortFees'  is null.");
          }
            _context.PassPortFees.Add(passPortFees);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetPassPortFees", new { id = passPortFees.PPFEEID }, passPortFees);
        }

        // DELETE: api/PassPortFees/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeletePassPortFees(int id)
        {
            if (_context.PassPortFees == null)
            {
                return NotFound();
            }
            var passPortFees = await _context.PassPortFees.FindAsync(id);
            if (passPortFees == null)
            {
                return NotFound();
            }

            _context.PassPortFees.Remove(passPortFees);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool PassPortFeesExists(int id)
        {
            return (_context.PassPortFees?.Any(e => e.PPFEEID == id)).GetValueOrDefault();
        }
    }
}
