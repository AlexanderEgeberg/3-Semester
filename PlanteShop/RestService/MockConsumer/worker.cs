using System;
using System.Collections.Generic;
using System.Net.Http;
using System.Text;
using System.Threading.Tasks;
using modelLib.model;
using Newtonsoft.Json;

namespace MockConsumer
{
    class worker
    {
        string URI = "http://localhost:5000/api/plante";

        public void Start()
        {
            Console.WriteLine(string.Join("\n", GetAllItemsAsync().Result));

            Console.WriteLine(string.Join("\n", GetOneItemsAsync(1).Result));


        }
        public async Task<IList<Plante>> GetAllItemsAsync()
        {
            using (HttpClient client = new HttpClient())
            {
                string content = await client.GetStringAsync(URI);
                IList<Plante> cList =
                    JsonConvert.DeserializeObject<IList<Plante>>(content);
                return cList;
            }
        }

        public async Task<Plante> GetOneItemsAsync(int id)
        {
            using (HttpClient client = new HttpClient())
            {
                string content = await client.GetStringAsync($"{URI}/{id}");
                Plante data = JsonConvert.DeserializeObject<Plante>(content);
                return data;
            }
        }
    }
}
