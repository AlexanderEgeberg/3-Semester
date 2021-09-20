using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Model_class;

namespace FanRestService.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class FanController : ControllerBase
    {
        public static List<FanOutput> items = new List<FanOutput>()
        {
            new FanOutput(0,"MasterFan",20,40),
            new FanOutput(0,"MasterFan1",20,40),
            new FanOutput(0,"MasterFan2",20,40),
            new FanOutput(0,"MasterFan3",20,40),
            new FanOutput(0,"MasterFan4",20,40),
            new FanOutput(0,"MasterFan5",20,40)

        };

        // GET: api/Fan
        [HttpGet]
        public IEnumerable<FanOutput> Get()
        {
            return items;
        }

        // GET: api/Fan/5
        [HttpGet("{id}", Name = "Get")]
        public FanOutput Get(int id)
        {
            return items.Find(i => i.Id == id);
        }

        // POST: api/Fan
        [HttpPost]
        public void Post([FromBody] FanOutput value)
        {
            items.Add(value);
        }

        // PUT: api/Fan/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] FanOutput value)
        {
            FanOutput item = Get(id);
            if (item != null)
            {
                item.Id = value.Id;
                item.Name = value.Name;
                item.Fugt = value.Fugt;
                item.Temp = value.Temp;
            }

        }

        // DELETE: api/ApiWithActions/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
            FanOutput item = Get(id);
            items.Remove(item);
        }
    }
}
