using System;
using System.Globalization;
using System.Text.Json;
using System.Text.Json.Serialization;

namespace API.Converters
{
    public class DateTimeConverter : JsonConverter<DateTime>
    {
        private const string DateFormat = "YYYY-MM-ddThh:mm:ss";

        public override DateTime Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options) => 
        DateTime.ParseExact(reader.GetString(), DateFormat , CultureInfo.InvariantCulture);
        public override void Write(Utf8JsonWriter writer, DateTime value, JsonSerializerOptions options) => 
        writer.WriteStringValue(value.ToString(DateFormat , CultureInfo.InvariantCulture));
    }
}