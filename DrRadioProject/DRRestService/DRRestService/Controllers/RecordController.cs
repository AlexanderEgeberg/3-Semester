using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using modelLib.models;


namespace DRRestService.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RecordController : ControllerBase
    {

        public static readonly List<Record> records = new List<Record>
        {
            new Record(0,"Baby","Justin Beaver",300,2003),
            new Record(1,"Wonder","Shawn Mendes",250,2020)
        };

        // GET: api/Record
        [HttpGet]
        public IEnumerable<Record> Get()
        {
            return records;
        }

        // GET: api/Record/5
        [HttpGet]
        [Route("{id}")]
        public Record Get(int id)
        {
            return records.Find(i => i.Id == id);
        }

        // POST: api/Record
        [HttpPost]
        public void Post([FromBody] Record value)
        {
            records.Add(value);
        }

        // PUT: api/Record/5
        [HttpPut]
        [Route("{id}")]
        public void Put(int id, [FromBody] Record value)
        {
            Record record = Get(id);
            if (record != null)
            {
                record.Id = value.Id;
                record.Artist = value.Artist;
                record.Title = value.Title;
                record.Duration = value.Duration;
                record.YearOfPublication = value.YearOfPublication;
            }
        }

        // DELETE: api/ApiWithActions/5
        [HttpDelete]
        [Route("{id}")]
        public void Delete(int id)
        {
            Record item = Get(id);
            records.Remove(item);
        }
    }
}
