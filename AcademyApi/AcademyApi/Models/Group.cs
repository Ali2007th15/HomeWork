using AcademyApi.Models;

namespace AcademyApi.Models
{
    public class Group
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public int TeacherId { get; set; }
        public Teacher Teacher { get; set; }
        public int FacultyId { get; set; }
        public Faculty Faculty { get; set; }
        public ICollection<Student> Students { get; set; }
    }
}
