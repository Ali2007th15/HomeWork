using ADY_API.Models;

namespace ADY_API.Services;
public interface ITrainService
{
    IEnumerable<Train> GetAllTrains();
    Train GetTrainById(int id);
}
