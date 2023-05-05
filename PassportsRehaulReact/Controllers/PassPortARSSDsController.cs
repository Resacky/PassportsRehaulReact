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
    public class PassPortARSSDsController : ControllerBase
    {
        private readonly PassportDbContext _context;

        public PassPortARSSDsController(PassportDbContext context)
        {
            _context = context;
        }

        // GET: api/PassPortARSSDs
        [HttpGet]
        public async Task<ActionResult<IEnumerable<PassPortARSSD>>> GetPassPortARSSD()
        {
          if (_context.PassPortARSSD == null)
          {
              return NotFound();
          }
            return await _context.PassPortARSSD.ToListAsync();
        }

        // GET: api/PassPortARSSDs/5
        [HttpGet("{id}")]
        public async Task<ActionResult<PassPortARSSD>> GetPassPortARSSD(int id)
        {
          if (_context.PassPortARSSD == null)
          {
              return NotFound();
          }
            var passPortARSSD = await _context.PassPortARSSD.FindAsync(id);

            if (passPortARSSD == null)
            {
                return NotFound();
            }

            return passPortARSSD;
        }

        // PUT: api/PassPortARSSDs/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutPassPortARSSD(int id, PassPortARSSD passPortARSSD)
        {
            if (id != passPortARSSD.PPARSIDSD)
            {
                return BadRequest();
            }

            _context.Entry(passPortARSSD).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!PassPortARSSDExists(id))
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

        // POST: api/PassPortARSSDs
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<PassPortARSSD>> PostPassPortARSSD(PassPortARSSD passPortARSSD)
        {
          if (_context.PassPortARSSD == null)
          {
              return Problem("Entity set 'PassportDbContext.PassPortARSSD'  is null.");
          }
            _context.PassPortARSSD.Add(passPortARSSD);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetPassPortARSSD", new { id = passPortARSSD.PPARSIDSD }, passPortARSSD);
        }

        // DELETE: api/PassPortARSSDs/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeletePassPortARSSD(int id)
        {
            if (_context.PassPortARSSD == null)
            {
                return NotFound();
            }
            var passPortARSSD = await _context.PassPortARSSD.FindAsync(id);
            if (passPortARSSD == null)
            {
                return NotFound();
            }

            _context.PassPortARSSD.Remove(passPortARSSD);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool PassPortARSSDExists(int id)
        {
            return (_context.PassPortARSSD?.Any(e => e.PPARSIDSD == id)).GetValueOrDefault();
        }
    }
}
