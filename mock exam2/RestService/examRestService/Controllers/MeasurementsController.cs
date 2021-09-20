using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using modelLib.Model;

namespace examRestService.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MeasurementsController : ControllerBase
    {
        // GET: api/Plants
        [HttpGet]
        public IEnumerable<Measurement> GetAllMeasurements()
        {
            return Persistency.PersistencyService.Get();
        }

        [HttpGet]
        [Route("{id}")]
        public Measurement GeMeasurementById(int id)
        {
            List<Measurement> measurements = new List<Measurement>();

            var temp = GetAllMeasurements();
            foreach (var measurement in temp)
            {
             measurements.Add((measurement));   
            }
            return measurements.Find(i => i.Id == id);
        }

        // POST: api/Plants
        [HttpPost]
        public void Post(Measurement value)
        {
            
        }

        // PUT: api/Plants/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE: api/ApiWithActions/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
    