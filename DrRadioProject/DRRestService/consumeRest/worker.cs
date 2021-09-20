using modelLib.models;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Net.Http;
using System.Text;
using System.Threading.Tasks;

namespace consumeRest
{
    class worker
    {
        string URI = "http://localhost:53305/api/Record";

        public void Start()
        {
            Console.WriteLine(string.Join("\n", GetAllItemsAsync().Result));

            Console.WriteLine(string.Join("\n", GetOneItemsAsync(1).Result));


        }
        public async Task<IList<Record>> GetAllItemsAsync()
        {
            using (HttpClient client = new HttpClient())
            {
                string content = await client.GetStringAsync(URI);
                IList<Record> cList =
                    JsonConvert.DeserializeObject<IList<Record>>(content);
                return cList;
            }
        }



        public async Task<Record> GetOneItemsAsync(int id)
        {
            using (HttpClient client = new HttpClient())
            {
                string content = await client.GetStringAsync($"{URI}/{id}");
                Record data = JsonConvert.DeserializeObject<Record>(content);
                return data;
            }
        }

    }
}
