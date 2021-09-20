using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using modelLib.model;

namespace PlanteShopService.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PlanteController : ControllerBase
    {
        public int idCounter = 4;
        private static readonly List<Plante> planter = new List<Plante>()
        {
            new Plante(1, "Rose","Albertine",400,199),
            new Plante(2, "Busk","Aronia" ,10,55),
            new Plante(3, "Rose","Dark lady" ,5,35),

        };

        // GET: api/Plante
        [HttpGet]
        public IEnumerable<Plante> GetAllPlanter()
        {
            return planter;
        }

        // GET: api/Plante/5
        // [HttpGet("{id}", Name = "Get")]
        [HttpGet]
        [Route("{id}")]
        public Plante GetPlanteById(int id)
        {
            return planter.Find(i => i.PlanteId == id);
        }


        // GET:


        [HttpGet]
        [Route("type/{type}")]
        public IEnumerable<Plante> GetPlanterByType(string type)
        {
            return planter.FindAll(i => i.PlanteType == type);
            //spørg om den her

        }


        // POST: api/Plante
        [HttpPost]
        public int AddPlante(Plante plante)
        {
           // var rand = new Random();
            plante.PlanteId = idCounter;
            planter.Add(plante);
            idCounter++;
            // Console.WriteLine(idCounter);
            return idCounter;
            //kom tilbage til det her
        }

        // PUT: api/Plante/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE: api/ApiWithActions/5
        [HttpDelete]
        [Route("{id}")]
        public void Delete(int id)
        {
            Plante plante = GetPlanteById(id);
            planter.Remove(plante);
        }
    }
}