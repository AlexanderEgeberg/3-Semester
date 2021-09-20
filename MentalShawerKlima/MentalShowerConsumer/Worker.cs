using ModelLib.Models;
using Newtonsoft.Json;
using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Text;
using System.Threading.Tasks;

namespace MentalShowerConsumer
{
    public class Worker
    {
        string URI = "https://localhost:44367/api/IndoorClimate";
        public async void Start()
        {
            Console.WriteLine(string.Join("\n", GetAllDataAsync().Result));
            while (true)
            {
                Console.WriteLine("Indtast lokale du vil hente målinger fra");
                string roomId = Console.ReadLine();
                var roomDataList = GetRoomDataAsync(roomId).Result;
                if (roomDataList.Count != 0)
                {
                    Console.WriteLine(string.Join("\n", roomDataList));
                }
                else
                {
                    Console.WriteLine("Dette rum eksisterer ikke");
                }
            }
        }

        public async Task<IList<SensorDataModel>> GetAllDataAsync()
        {
            using (HttpClient client = new HttpClient())
            {
                string content = await client.GetStringAsync(URI);
                IList<SensorDataModel> cList = JsonConvert.DeserializeObject<IList<SensorDataModel>>(content);
                return cList;
            }
        }

        //public async Task<SensorDataModel> GetDataById(int id)
        //{
        //    using (HttpClient client = new HttpClient())
        //    {
        //        string content = await client.GetStringAsync($"{URI}/{id}");
        //        SensorDataModel data = JsonConvert.DeserializeObject<SensorDataModel>(content);
        //        return data;
        //    }
        //}

        public async Task<IList<SensorDataModel>> GetRoomDataAsync(string roomId)
        {
            using (HttpClient client = new HttpClient())
            {
                string content = await client.GetStringAsync($"{URI}/RoomID/{roomId}");
                IList<SensorDataModel> data = JsonConvert.DeserializeObject<IList<SensorDataModel>>(content);
                return data;
            }
        }


    }
}
