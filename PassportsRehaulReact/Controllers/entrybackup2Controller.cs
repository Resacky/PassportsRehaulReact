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

        /* this GET request gets in decending order the highest element within the primary key in decending order to 100 records */
        // GET: api/entrybackup2/recent
        //[HttpGet("recent")]
        //public async Task<ActionResult<IEnumerable<entrybackup2>>> GetRecententrybackup2()
        //{
        //    if (_context.entrybackup2 == null)
        //    {
        //        return NotFound();
        //    }
        //    return await _context.entrybackup2
        //        .OrderByDescending(e => e.ENTRYID) // Sorts by ENTRYID in descending order
        //        .Take(100)
        //        .ToListAsync();
        //}

        // GET: /api/entrybackup2/search?appFirst=John&appLast=Doe&dob=yyyy-MM-dd&phone=1234567890&createdBy=admin&page=1
        // example GET URL request: /api/entrybackup2/search?appFirst=&appLast=&dob=&phone=&createdBy=&page=1&size=20
        // insert any query test user wants after the variable = sign
        [HttpGet("search")]
        public async Task<ActionResult<IEnumerable<entrybackup2>>> Search([FromQuery] SearchParameters parameters, [FromQuery] int page = 1, [FromQuery] int size = 20)
        {
            int skip = (page - 1) * size;

            var query = _context.entrybackup2.AsQueryable();

            if (!string.IsNullOrEmpty(parameters.AppFirst))
            {
                query = query.Where(e => e.AppFirst.Contains(parameters.AppFirst));
            }

            if (!string.IsNullOrEmpty(parameters.AppLast))
            {
                query = query.Where(e => e.AppLast.Contains(parameters.AppLast));
            }

            if (parameters.DOB.HasValue)
            {
                query = query.Where(e => e.DOB == parameters.DOB);
            }

            if (!string.IsNullOrEmpty(parameters.Phone))
            {
                query = query.Where(e => e.Phone.Contains(parameters.Phone));
            }

            if (!string.IsNullOrEmpty(parameters.CreatedBy))
            {
                query = query.Where(e => e.CreatedBy.Contains(parameters.CreatedBy));
            }

            return await query
                .OrderByDescending(e => e.ENTRYID)
                .Skip(skip)
                .Take(size)
                .ToListAsync();
        }

        // GET: api/entrybackup2/recent?page=1&size=20
        /* this GET request is modified to derive the whole table but in chunks of 20 in increments of a single query at a time */
        [HttpGet("recent")]
        public async Task<ActionResult<IEnumerable<entrybackup2>>> GetRecententrybackup2([FromQuery] int page = 1, [FromQuery] int size = 20)
        {
            if (_context.entrybackup2 == null)
            {
                return NotFound();
            }

            int skip = (page - 1) * size;

            return await _context.entrybackup2
                .OrderByDescending(e => e.ENTRYID) // Sorts by ENTRYID in descending order
                .Skip(skip) // Skips the records before the current page
                .Take(size) // Takes the records for the current page
                .ToListAsync();
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
