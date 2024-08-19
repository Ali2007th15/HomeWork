using AcademyApi.Models;

namespace AcademyApi.Services
{
    public interface ITeacherService
    {
        IEnumerable<Teacher> GetAllTeachers();
        Teacher GetTeacherById(int id);
        void AddTeacher(Teacher teacher);
        void UpdateTeacher(int id, Teacher teacher);
        void DeleteTeacher(int id);
    }
}
