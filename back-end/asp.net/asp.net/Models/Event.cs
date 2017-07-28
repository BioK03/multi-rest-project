using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace asp.net.Models
{
    public class Event
    {
        public int id { get; set; }

        [JsonProperty("name")]
        public string name { get; set; }

        [JsonProperty("description")]
        public string description { get; set; }

        [JsonProperty("creator")]
        public string creator { get; set; }

        [JsonProperty("email")]
        public string email { get; set; }

        [JsonProperty("latitude")]
        public double latitude { get; set; }

        [JsonProperty("longitude")]
        public double longitude { get; set; }

        [JsonProperty("place")]
        public string place { get; set; }

        [JsonProperty("theme")]
        public string theme { get; set; }

        [JsonProperty("color")]
        public string color { get; set; }

        [JsonProperty("icon")]
        public string icon { get; set; }

        [JsonProperty("date")]
        public string date { get; set; }

        [JsonProperty("hour")]
        public string hour { get; set; }
    }
}