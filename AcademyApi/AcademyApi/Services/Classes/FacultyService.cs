using AcademyApi.Data;
using AcademyApi.Models;
using System.Collections.Generic;
using System.Linq;
using Microsoft.EntityFrameworkCore;

namespace AcademyApi.Services
{
    public class FacultyService : IFacultyService
    {
        private readonly AcademyContext _context;

        public FacultyService(AcademyContext context)
        {
            _context = context;
        }

        public IEnumerable<Faculty> GetAllFaculties()
        {
            return _context.Faculties.Include(f => f.Groups).ToList();
        }

        public Faculty GetFacultyById(int id)
        {
            return _context.Faculties.Include(f => f.Groups).FirstOrDefault(f => f.Id == id);
        }

        public void AddFaculty(Faculty faculty)
        {
            _context.Faculties.Add(faculty);
            _context.SaveChanges();
        }

        public void UpdateFaculty(int id, Faculty faculty)
        {
            var existingFaculty = _context.Faculties.Find(id);
            if (existingFaculty != null)
            {
                existingFaculty.Name = faculty.Name;
                _context.SaveChanges();
            }
        }

        public void DeleteFaculty(int id)
        {
            var faculty = _context.Faculties.Find(id);
            if (faculty != null)
            {
                _context.Faculties.Remove(faculty);
                _context.SaveChanges();
            }
        }

        public void AddGroupToFaculty(int facultyId, int groupId)
        {
            var faculty = _context.Faculties.Include(f => f.Groups).FirstOrDefault(f => f.Id == facultyId);
            var group = _context.Groups.Find(groupId);

            if (faculty != null && group != null)
            {
                faculty.Groups.Add(group);
                _context.SaveChanges();
            }
        }

        public void RemoveGroupFromFaculty(int facultyId, int groupId)
        {
            var faculty = _context.Faculties.Include(f => f.Groups).FirstOrDefault(f => f.Id == facultyId);
            var group = _context.Groups.Find(groupId);

            if (faculty != null && group != null)
            {
                faculty.Groups.Remove(group);
                _context.SaveChanges();
            }
        }
    }
}
