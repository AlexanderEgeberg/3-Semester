using System;
using System.Collections.Generic;
using System.Text;

namespace modelLib.models
{
    public class Record
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string Artist { get; set; }
        public int Duration { get; set; }
        public int YearOfPublication { get; set; }

        public Record()
        {

        }

        public Record(int id, string title, string artist, int duration, int yearOfPublication)
        {
            Id = id;
            Title = title;
            Artist = artist;
            Duration = duration;
            YearOfPublication = yearOfPublication;
        }

        public override string ToString()
        {
            return $"id: {Id} - title: {Title} - artist: {Artist} - Duration: {Duration} - YearOfPublication: {YearOfPublication}";
        }

        protected bool Equals(Record other)
        {
            return Id == other.Id && Title == other.Title && Artist == other.Artist && Duration == other.Duration && YearOfPublication == other.YearOfPublication;
        }

        public override bool Equals(object obj)
        {
            if (ReferenceEquals(null, obj)) return false;
            if (ReferenceEquals(this, obj)) return true;
            if (obj.GetType() != this.GetType()) return false;
            return Equals((Record) obj);
        }

        public override int GetHashCode()
        {
            unchecked
            {
                var hashCode = Id;
                hashCode = (hashCode * 397) ^ (Title != null ? Title.GetHashCode() : 0);
                hashCode = (hashCode * 397) ^ (Artist != null ? Artist.GetHashCode() : 0);
                hashCode = (hashCode * 397) ^ Duration;
                hashCode = (hashCode * 397) ^ YearOfPublication;
                return hashCode;
            }
        }
    }
}
