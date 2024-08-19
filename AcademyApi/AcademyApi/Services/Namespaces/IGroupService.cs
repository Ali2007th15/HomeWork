using AcademyApi.Models;

namespace AcademyApi.Services
{
    public interface IGroupService
    {
        IEnumerable<Group> GetAllGroups();
        Group GetGroupById(int id);
        void AddGroup(Group group);
        void UpdateGroup(int id, Group group);
        void DeleteGroup(int id);
        void ChangeTeacher(int groupId, int teacherId);
        void AddStudentToGroup(int groupId, int studentId);
        void RemoveStudentFromGroup(int groupId, int studentId);
    }
}
