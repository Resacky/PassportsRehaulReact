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
    public class entrybackup2Controller : ControllerBase
    {
        private readonly PassportDbContext _context;

        public entrybackup2Controller(PassportDbContext context)
        {
            _context = context;
        }

        // GET: api/entrybackup2
        [HttpGet]
        public async Task<ActionResult<IEnumerable<entrybackup2>>> Getentrybackup2()
        {
          if (_context.entrybackup2 == null)
          {
              return NotFound();
          }
            return await _context.entrybackup2.ToListAsync();
        }

        // GET: api/entrybackup2/5
        [HttpGet("{id}")]
        public async Task<ActionResult<entrybackup2>> Getentrybackup2(int id)
        {
          if (_context.entrybackup2 == null)
          {
              return NotFound();
          }
            var entrybackup2 = await _context.entrybackup2.FindAsync(id);

            if (entrybackup2 == null)
            {
                return NotFound();
            }

            return entrybackup2;
        }

        // PUT: api/entrybackup2/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> Putentrybackup2(int id, entrybackup2 entrybackup2)
        {
            if (id != entrybackup2.ENTRYID)
            {
                return BadRequest();
            }

            _context.Entry(entrybackup2).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!entrybackup2Exists(id))
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

        // POST: api/entrybackup2
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<entrybackup2>> Postentrybackup2(entrybackup2 entrybackup2)
        {
          if (_context.entrybackup2 == null)
          {
              return Problem("Entity set 'PassportDbContext.entrybackup2'  is null.");
          }
            _context.entrybackup2.Add(entrybackup2);
            await _context.SaveChangesAsync();

            return CreatedAtAction("Getentrybackup2", new { id = entrybackup2.ENTRYID }, entrybackup2);
        }

        // DELETE: api/entrybackup2/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> Deleteentrybackup2(int id)
        {
            if (_context.entrybackup2 == null)
            {
                return NotFound();
            }
            var entrybackup2 = await _context.entrybackup2.FindAsync(id);
            if (entrybackup2 == null)
            {
                return NotFound();
            }

            _context.entrybackup2.Remove(entrybackup2);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool entrybackup2Exists(int id)
        {
            return (_context.entrybackup2?.Any(e => e.ENTRYID == id)).GetValueOrDefault();
        }
    }
}
