using AcademyApi.Models;

namespace AcademyApi.Models
{
    public class Teacher
    {
        public int Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public int DepartmentId { get; set; }
        public Department Department { get; set; }
        public ICollection<Group> Groups { get; set; }
    }
}
