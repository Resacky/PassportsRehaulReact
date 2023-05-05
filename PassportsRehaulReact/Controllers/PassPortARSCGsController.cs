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
    public class PassPortARSCGsController : ControllerBase
    {
        private readonly PassportDbContext _context;

        public PassPortARSCGsController(PassportDbContext context)
        {
            _context = context;
        }

        // GET: api/PassPortARSCGs
        [HttpGet]
        public async Task<ActionResult<IEnumerable<PassPortARSCG>>> GetPassPortARSCG()
        {
          if (_context.PassPortARSCG == null)
          {
              return NotFound();
          }
            return await _context.PassPortARSCG.ToListAsync();
        }

        // GET: api/PassPortARSCGs/5
        [HttpGet("{id}")]
        public async Task<ActionResult<PassPortARSCG>> GetPassPortARSCG(int id)
        {
          if (_context.PassPortARSCG == null)
          {
              return NotFound();
          }
            var passPortARSCG = await _context.PassPortARSCG.FindAsync(id);

            if (passPortARSCG == null)
            {
                return NotFound();
            }

            return passPortARSCG;
        }

        // PUT: api/PassPortARSCGs/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutPassPortARSCG(int id, PassPortARSCG passPortARSCG)
        {
            if (id != passPortARSCG.PPARSIDCG)
            {
                return BadRequest();
            }

            _context.Entry(passPortARSCG).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!PassPortARSCGExists(id))
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

        // POST: api/PassPortARSCGs
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<PassPortARSCG>> PostPassPortARSCG(PassPortARSCG passPortARSCG)
        {
          if (_context.PassPortARSCG == null)
          {
              return Problem("Entity set 'PassportDbContext.PassPortARSCG'  is null.");
          }
            _context.PassPortARSCG.Add(passPortARSCG);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetPassPortARSCG", new { id = passPortARSCG.PPARSIDCG }, passPortARSCG);
        }

        // DELETE: api/PassPortARSCGs/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeletePassPortARSCG(int id)
        {
            if (_context.PassPortARSCG == null)
            {
                return NotFound();
            }
            var passPortARSCG = await _context.PassPortARSCG.FindAsync(id);
            if (passPortARSCG == null)
            {
                return NotFound();
            }

            _context.PassPortARSCG.Remove(passPortARSCG);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool PassPortARSCGExists(int id)
        {
            return (_context.PassPortARSCG?.Any(e => e.PPARSIDCG == id)).GetValueOrDefault();
        }
    }
}
