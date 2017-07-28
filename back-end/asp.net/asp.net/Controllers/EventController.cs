using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

using asp.net.Models;
using MySql.Data.MySqlClient;
using System.Web.Http.Cors;

namespace asp.net.Controllers
{
    public class EventController : ApiController
    {
        private string connectionString = "Database=evento;Data Source=localhost;User Id=root;Password=";

        [HttpGet]
        [EnableCors(origins: "*", headers: "*", methods: "GET")]
        public EventList GetAllEvents()
        {
            MySqlConnection connection = new MySqlConnection(connectionString);
            connection.Open();

            MySqlCommand command = connection.CreateCommand();
            command.CommandText = "SELECT * FROM events";
            MySqlDataReader reader = command.ExecuteReader();

            List<Event> events = new List<Event>();

            while (reader.Read())
            {
                Event oneEvent = new Event();

                oneEvent.id = Int16.Parse(reader["id"].ToString());
                oneEvent.name = reader["name"].ToString();
                oneEvent.description = reader["description"].ToString();
                oneEvent.creator = reader["creator"].ToString();
                oneEvent.email = reader["email"].ToString();
                oneEvent.latitude = Double.Parse(reader["latitude"].ToString());
                oneEvent.longitude = Double.Parse(reader["longitude"].ToString());
                oneEvent.place = reader["place"].ToString();
                oneEvent.theme = reader["theme"].ToString();
                oneEvent.color = reader["color"].ToString();
                oneEvent.icon = reader["icon"].ToString();
                oneEvent.date = reader["date"].ToString();
                oneEvent.hour = reader["hour"].ToString();

                events.Add(oneEvent);
            }
            reader.Close();

            EventList eventList = new EventList();
            eventList.events = events;

            return eventList;
        }

        [HttpPost]
        [EnableCors(origins: "*", headers: "*", methods: "POST")]
        public EventList CreateEvent([FromBody] Event oneEvent)
        {
            MySqlConnection connection = new MySqlConnection(connectionString);
            connection.Open();

            MySqlCommand command = connection.CreateCommand();
            command.CommandText = "INSERT INTO events ( name, description, creator, email, latitude, longitude, place, theme, color, icon, date, hour ) " +
                "VALUES (?paramName, ?paramDescription, ?paramCreator, ?paramEmail, ?paramLatitude, ?paramLongitude, ?paramPlace, ?paramTheme, ?paramColor, ?paramIcon, ?paramDate, ?paramHour);";

            command.Parameters.Add(new MySqlParameter("paramName", oneEvent.name));
            command.Parameters.Add(new MySqlParameter("paramDescription", oneEvent.description));
            command.Parameters.Add(new MySqlParameter("paramCreator", oneEvent.creator));
            command.Parameters.Add(new MySqlParameter("paramEmail", oneEvent.email));
            command.Parameters.Add(new MySqlParameter("paramLatitude", oneEvent.latitude));
            command.Parameters.Add(new MySqlParameter("paramLongitude", oneEvent.longitude));
            command.Parameters.Add(new MySqlParameter("paramPlace", oneEvent.place));
            command.Parameters.Add(new MySqlParameter("paramTheme", oneEvent.theme));
            command.Parameters.Add(new MySqlParameter("paramColor", oneEvent.color));
            command.Parameters.Add(new MySqlParameter("paramIcon", oneEvent.icon));
            command.Parameters.Add(new MySqlParameter("paramDate", oneEvent.date));
            command.Parameters.Add(new MySqlParameter("paramHour", oneEvent.hour));
            command.ExecuteNonQuery();

            command = connection.CreateCommand();
            command.CommandText = "SELECT * FROM events";
            MySqlDataReader reader = command.ExecuteReader();

            List<Event> events = new List<Event>();

            while (reader.Read())
            {
                Event oneEventFetch = new Event();

                oneEventFetch.id = Int16.Parse(reader["id"].ToString());
                oneEventFetch.name = reader["name"].ToString();
                oneEventFetch.description = reader["description"].ToString();
                oneEventFetch.creator = reader["creator"].ToString();
                oneEventFetch.email = reader["email"].ToString();
                oneEventFetch.latitude = Double.Parse(reader["latitude"].ToString());
                oneEventFetch.longitude = Double.Parse(reader["longitude"].ToString());
                oneEventFetch.place = reader["place"].ToString();
                oneEventFetch.theme = reader["theme"].ToString();
                oneEventFetch.color = reader["color"].ToString();
                oneEventFetch.icon = reader["icon"].ToString();
                oneEventFetch.date = reader["date"].ToString();
                oneEventFetch.hour = reader["hour"].ToString();

                events.Add(oneEventFetch);
            }
            reader.Close();

            EventList eventList = new EventList();
            eventList.events = events;

            return eventList;
        }


    }
}
