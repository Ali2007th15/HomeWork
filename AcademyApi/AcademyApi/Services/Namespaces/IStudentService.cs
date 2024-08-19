using AcademyApi.Models;

namespace AcademyApi.Services
{
    public interface IStudentService
    {
        IEnumerable<Student> GetAllStudents();
        Student GetStudentById(int id);
        void AddStudent(Student student);
        void UpdateStudent(int id, Student student);
        void DeleteStudent(int id);
    }
}
