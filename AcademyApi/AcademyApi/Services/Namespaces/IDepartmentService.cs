using AcademyApi.Models;
using System.Collections.Generic;

namespace AcademyApi.Services
{
    public interface IDepartmentService
    {
        IEnumerable<Department> GetAllDepartments();
        Department GetDepartmentById(int id);
        void AddDepartment(Department department);
        void UpdateDepartment(int id, Department department);
        void DeleteDepartment(int id);
        void AddTeacherToDepartment(int departmentId, int teacherId);
        void RemoveTeacherFromDepartment(int departmentId, int teacherId);
    }
}
