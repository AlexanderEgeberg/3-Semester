using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.Sockets;
using System.Reflection;
using System.Threading.Tasks;
using FanRestService.Controllers;
using Microsoft.AspNetCore.Builder;
using Model_class;
using Newtonsoft.Json;

namespace Server
{
    class Program
    {
        static void Main(string[] args)
        {
            Server.Start();
        }
    }
    class Server
    {
        static int _clientNr = 0;

        public static void Start()
        {
            int port = 4646;
            TcpListener listener = new TcpListener(IPAddress.Loopback, port);
            listener.Start();
            Console.WriteLine("Server started...");

            while (true)
            {
                TcpClient socket = listener.AcceptTcpClient();
                _clientNr++;
                Console.WriteLine("User connected");
                Console.WriteLine($"Number of users online {_clientNr}");

                Task.Run(() =>
                {
                    // TcpClient tempSocket = socket;
                    DoClient(socket);
                }
                );
            }

        }

        public static void DoClient(TcpClient socket)
        {
            NetworkStream ns = socket.GetStream();
            StreamReader reader = new StreamReader(ns);
            StreamWriter writer = new StreamWriter(ns) { AutoFlush = true };

            FanController controller = new FanController();

            var fanList = controller.Get();

            writer.WriteLine("Connected to server...");

            try
            {

                while (true) //inputLine != null && inputLine != " "
                {
                    writer.WriteLine("Please enter either: 'hentalle', 'hent', eller 'gem'");

                    string inputLine = reader.ReadLine();

                    if (inputLine == null)
                    {
                        ns.Close();
                        break;
                    }

                    switch (inputLine.ToLower())
                    {
                        case "hentalle":
                            foreach (var item in fanList)
                            {
                                var json = JsonConvert.SerializeObject(item);

                                writer.WriteLine(json);
                            }
                            break;

                        case "hent":
                            writer.WriteLine("Enter the ID of the item you'd like to fetch");
                            var idInput = Convert.ToInt32(reader.ReadLine());
                            while (true)
                            {
                                var getID = controller.Get(idInput);
                                var json = JsonConvert.SerializeObject(getID);
                                writer.WriteLine(json);
                                break;
                            }
                            break;
                        case "gem":

                            writer.WriteLine("Enter a JSON string to post");
                            var userInput = reader.ReadLine();

                            var userInputAsObj = JsonConvert.DeserializeObject<FanOutput>(userInput);
                            controller.Post(userInputAsObj);
                            break;

                        default:
                            break;
                    }
                }
            }
            catch (Exception e)
            {

                if (e.Message == "Unable to read data from the transport connection: En eksisterende forbindelse blev tvangsafbrudt af en ekstern vært..")
                {
                    ns.Close();
                }
                else
                {
                    Console.WriteLine(e);
                    throw;
                }
            }

            ns.Close();
            _clientNr--;
            Console.WriteLine($"User disconnected... current number of users: {_clientNr}");
        }

        }
}
