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
    public class PassportFeesNewsController : ControllerBase
    {
        private readonly PassportDbContext _context;

        public PassportFeesNewsController(PassportDbContext context)
        {
            _context = context;
        }

        // GET: api/PassportFeesNews
        [HttpGet]
        public async Task<ActionResult<IEnumerable<PassportFeesNew>>> GetPassportFeesNew()
        {
          if (_context.PassportFeesNew == null)
          {
              return NotFound();
          }
            return await _context.PassportFeesNew.ToListAsync();
        }

        // GET: api/PassportFeesNews/5
        [HttpGet("{id}")]
        public async Task<ActionResult<PassportFeesNew>> GetPassportFeesNew(int id)
        {
          if (_context.PassportFeesNew == null)
          {
              return NotFound();
          }
            var passportFeesNew = await _context.PassportFeesNew.FindAsync(id);

            if (passportFeesNew == null)
            {
                return NotFound();
            }

            return passportFeesNew;
        }

        // PUT: api/PassportFeesNews/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutPassportFeesNew(int id, PassportFeesNew passportFeesNew)
        {
            if (id != passportFeesNew.Sort)
            {
                return BadRequest();
            }

            _context.Entry(passportFeesNew).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!PassportFeesNewExists(id))
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

        // POST: api/PassportFeesNews
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<PassportFeesNew>> PostPassportFeesNew(PassportFeesNew passportFeesNew)
        {
          if (_context.PassportFeesNew == null)
          {
              return Problem("Entity set 'PassportDbContext.PassportFeesNew'  is null.");
          }
            _context.PassportFeesNew.Add(passportFeesNew);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetPassportFeesNew", new { id = passportFeesNew.Sort }, passportFeesNew);
        }

        // DELETE: api/PassportFeesNews/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeletePassportFeesNew(int id)
        {
            if (_context.PassportFeesNew == null)
            {
                return NotFound();
            }
            var passportFeesNew = await _context.PassportFeesNew.FindAsync(id);
            if (passportFeesNew == null)
            {
                return NotFound();
            }

            _context.PassportFeesNew.Remove(passportFeesNew);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool PassportFeesNewExists(int id)
        {
            return (_context.PassportFeesNew?.Any(e => e.Sort == id)).GetValueOrDefault();
        }
    }
}
