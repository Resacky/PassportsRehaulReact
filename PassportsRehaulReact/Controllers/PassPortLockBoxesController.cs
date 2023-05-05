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
    public class PassPortLockBoxesController : ControllerBase
    {
        private readonly PassportDbContext _context;

        public PassPortLockBoxesController(PassportDbContext context)
        {
            _context = context;
        }

        // GET: api/PassPortLockBoxes
        [HttpGet]
        public async Task<ActionResult<IEnumerable<PassPortLockBoxes>>> GetPassPortLockBoxes()
        {
          if (_context.PassPortLockBoxes == null)
          {
              return NotFound();
          }
            return await _context.PassPortLockBoxes.ToListAsync();
        }

        // GET: api/PassPortLockBoxes/5
        [HttpGet("{id}")]
        public async Task<ActionResult<PassPortLockBoxes>> GetPassPortLockBoxes(int id)
        {
          if (_context.PassPortLockBoxes == null)
          {
              return NotFound();
          }
            var passPortLockBoxes = await _context.PassPortLockBoxes.FindAsync(id);

            if (passPortLockBoxes == null)
            {
                return NotFound();
            }

            return passPortLockBoxes;
        }

        // PUT: api/PassPortLockBoxes/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutPassPortLockBoxes(int id, PassPortLockBoxes passPortLockBoxes)
        {
            if (id != passPortLockBoxes.LOCKBOXID)
            {
                return BadRequest();
            }

            _context.Entry(passPortLockBoxes).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!PassPortLockBoxesExists(id))
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

        // POST: api/PassPortLockBoxes
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<PassPortLockBoxes>> PostPassPortLockBoxes(PassPortLockBoxes passPortLockBoxes)
        {
          if (_context.PassPortLockBoxes == null)
          {
              return Problem("Entity set 'PassportDbContext.PassPortLockBoxes'  is null.");
          }
            _context.PassPortLockBoxes.Add(passPortLockBoxes);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetPassPortLockBoxes", new { id = passPortLockBoxes.LOCKBOXID }, passPortLockBoxes);
        }

        // DELETE: api/PassPortLockBoxes/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeletePassPortLockBoxes(int id)
        {
            if (_context.PassPortLockBoxes == null)
            {
                return NotFound();
            }
            var passPortLockBoxes = await _context.PassPortLockBoxes.FindAsync(id);
            if (passPortLockBoxes == null)
            {
                return NotFound();
            }

            _context.PassPortLockBoxes.Remove(passPortLockBoxes);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool PassPortLockBoxesExists(int id)
        {
            return (_context.PassPortLockBoxes?.Any(e => e.LOCKBOXID == id)).GetValueOrDefault();
        }
    }
}
