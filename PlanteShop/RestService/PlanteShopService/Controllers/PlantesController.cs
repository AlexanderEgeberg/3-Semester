using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using modelLib.model;

namespace PlanteShopService.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PlantesController : ControllerBase
    {
        private readonly PlanteContext _context;

        public PlantesController(PlanteContext context)
        {
            _context = context;
        }

        // GET: api/Plantes
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Plante>>> GetPlanter()
        {
            return await _context.Planter.ToListAsync();
        }

        // GET: api/Plantes/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Plante>> GetPlante(int id)
        {
            var plante = await _context.Planter.FindAsync(id);

            if (plante == null)
            {
                return NotFound();
            }

            return plante;
        }

        // PUT: api/Plantes/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutPlante(int id, Plante plante)
        {
            if (id != plante.PlanteId)
            {
                return BadRequest();
            }

            _context.Entry(plante).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!PlanteExists(id))
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

        // POST: api/Plantes
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<Plante>> PostPlante(Plante plante)
        {
            _context.Planter.Add(plante);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetPlante", new { id = plante.PlanteId }, plante);
        }

        // DELETE: api/Plantes/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<Plante>> DeletePlante(int id)
        {
            var plante = await _context.Planter.FindAsync(id);
            if (plante == null)
            {
                return NotFound();
            }

            _context.Planter.Remove(plante);
            await _context.SaveChangesAsync();

            return plante;
        }

        private bool PlanteExists(int id)
        {
            return _context.Planter.Any(e => e.PlanteId == id);
        }
    }
}
