using AcademyApi.Data;
using AcademyApi.Models;
using Microsoft.EntityFrameworkCore;

namespace AcademyApi.Services
{
    public class GroupService : IGroupService
    {
        private readonly AcademyContext _context;

        public GroupService(AcademyContext context)
        {
            _context = context;
        }

        public IEnumerable<Group> GetAllGroups()
        {
            return _context.Groups.Include(g => g.Teacher).Include(g => g.Faculty).ToList();
        }

        public Group GetGroupById(int id)
        {
            return _context.Groups.Include(g => g.Teacher).Include(g => g.Faculty).FirstOrDefault(g => g.Id == id);
        }

        public void AddGroup(Group group)
        {
            _context.Groups.Add(group);
            _context.SaveChanges();
        }

        public void UpdateGroup(int id, Group group)
        {
            var existingGroup = _context.Groups.Find(id);
            if (existingGroup != null)
            {
                existingGroup.Name = group.Name;
                existingGroup.TeacherId = group.TeacherId;
                existingGroup.FacultyId = group.FacultyId;
                _context.SaveChanges();
            }
        }

        public void DeleteGroup(int id)
        {
            var group = _context.Groups.Find(id);
            if (group != null)
            {
                _context.Groups.Remove(group);
                _context.SaveChanges();
            }
        }

        public void ChangeTeacher(int groupId, int teacherId)
        {
            var group = _context.Groups.Find(groupId);
            if (group != null)
            {
                group.TeacherId = teacherId;
                _context.SaveChanges();
            }
        }

        public void AddStudentToGroup(int groupId, int studentId)
        {
            var group = _context.Groups.Include(g => g.Students).FirstOrDefault(g => g.Id == groupId);
            var student = _context.Students.Find(studentId);

            if (group != null && student != null)
            {
                group.Students.Add(student);
                _context.SaveChanges();
            }
        }

        public void RemoveStudentFromGroup(int groupId, int studentId)
        {
            var group = _context.Groups.Include(g => g.Students).FirstOrDefault(g => g.Id == groupId);
            var student = _context.Students.Find(studentId);

            if (group != null && student != null)
            {
                group.Students.Remove(student);
                _context.SaveChanges();
            }
        }
    }
}
