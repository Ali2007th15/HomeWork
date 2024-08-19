using AcademyApi.Data;
using AcademyApi.Models;
using Microsoft.EntityFrameworkCore;

namespace AcademyApi.Services
{
    public class TeacherService : ITeacherService
    {
        private readonly AcademyContext _context;

        public TeacherService(AcademyContext context)
        {
            _context = context;
        }

        public IEnumerable<Teacher> GetAllTeachers()
        {
            return _context.Teachers.Include(t => t.Department).ToList();
        }

        public Teacher GetTeacherById(int id)
        {
            return _context.Teachers.Include(t => t.Department).FirstOrDefault(t => t.Id == id);
        }

        public void AddTeacher(Teacher teacher)
        {
            _context.Teachers.Add(teacher);
            _context.SaveChanges();
        }

        public void UpdateTeacher(int id, Teacher teacher)
        {
            var existingTeacher = _context.Teachers.Find(id);
            if (existingTeacher != null)
            {
                existingTeacher.FirstName = teacher.FirstName;
                existingTeacher.LastName = teacher.LastName;
                existingTeacher.DepartmentId = teacher.DepartmentId;
                _context.SaveChanges();
            }
        }

        public void DeleteTeacher(int id)
        {
            var teacher = _context.Teachers.Find(id);
            if (teacher != null)
            {
                _context.Teachers.Remove(teacher);
                _context.SaveChanges();
            }
        }
    }
}
