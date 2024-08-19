using AcademyApi.Data;
using AcademyApi.Models;
using System.Collections.Generic;
using System.Linq;
using Microsoft.EntityFrameworkCore;

namespace AcademyApi.Services
{
    public class DepartmentService : IDepartmentService
    {
        private readonly AcademyContext _context;

        public DepartmentService(AcademyContext context)
        {
            _context = context;
        }

        public IEnumerable<Department> GetAllDepartments()
        {
            return _context.Departments.Include(d => d.Teachers).ToList();
        }

        public Department GetDepartmentById(int id)
        {
            return _context.Departments.Include(d => d.Teachers).FirstOrDefault(d => d.Id == id);
        }

        public void AddDepartment(Department department)
        {
            _context.Departments.Add(department);
            _context.SaveChanges();
        }

        public void UpdateDepartment(int id, Department department)
        {
            var existingDepartment = _context.Departments.Find(id);
            if (existingDepartment != null)
            {
                existingDepartment.Name = department.Name;
                _context.SaveChanges();
            }
        }

        public void DeleteDepartment(int id)
        {
            var department = _context.Departments.Find(id);
            if (department != null)
            {
                _context.Departments.Remove(department);
                _context.SaveChanges();
            }
        }

        public void AddTeacherToDepartment(int departmentId, int teacherId)
        {
            var department = _context.Departments.Include(d => d.Teachers).FirstOrDefault(d => d.Id == departmentId);
            var teacher = _context.Teachers.Find(teacherId);

            if (department != null && teacher != null)
            {
                department.Teachers.Add(teacher);
                _context.SaveChanges();
            }
        }

        public void RemoveTeacherFromDepartment(int departmentId, int teacherId)
        {
            var department = _context.Departments.Include(d => d.Teachers).FirstOrDefault(d => d.Id == departmentId);
            var teacher = _context.Teachers.Find(teacherId);

            if (department != null && teacher != null)
            {
                department.Teachers.Remove(teacher);
                _context.SaveChanges();
            }
        }
    }
}
