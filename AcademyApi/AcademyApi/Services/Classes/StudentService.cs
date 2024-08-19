using AcademyApi.Data;
using AcademyApi.Models;
using Microsoft.EntityFrameworkCore;

namespace AcademyApi.Services
{
    public class StudentService : IStudentService
    {
        private readonly AcademyContext _context;

        public StudentService(AcademyContext context)
        {
            _context = context;
        }

        public IEnumerable<Student> GetAllStudents()
        {
            return _context.Students.Include(s => s.Group).ToList();
        }

        public Student GetStudentById(int id)
        {
            return _context.Students.Include(s => s.Group).FirstOrDefault(s => s.Id == id);
        }

        public void AddStudent(Student student)
        {
            _context.Students.Add(student);
            _context.SaveChanges();
        }

        public void UpdateStudent(int id, Student student)
        {
            var existingStudent = _context.Students.Find(id);
            if (existingStudent != null)
            {
                existingStudent.FirstName = student.FirstName;
                existingStudent.LastName = student.LastName;
                existingStudent.GroupId = student.GroupId;
                _context.SaveChanges();
            }
        }

        public void DeleteStudent(int id)
        {
            var student = _context.Students.Find(id);
            if (student != null)
            {
                _context.Students.Remove(student);
                _context.SaveChanges();
            }
        }
    }
}
