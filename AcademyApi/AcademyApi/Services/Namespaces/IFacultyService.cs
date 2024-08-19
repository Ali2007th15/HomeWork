using AcademyApi.Models;
using System.Collections.Generic;

namespace AcademyApi.Services
{
    public interface IFacultyService
    {
        IEnumerable<Faculty> GetAllFaculties();
        Faculty GetFacultyById(int id);
        void AddFaculty(Faculty faculty);
        void UpdateFaculty(int id, Faculty faculty);
        void DeleteFaculty(int id);
        void AddGroupToFaculty(int facultyId, int groupId);
        void RemoveGroupFromFaculty(int facultyId, int groupId);
    }
}
