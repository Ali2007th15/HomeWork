using ADY_API.Models;

namespace ADY_API.Services;

public class TrainService : ITrainService
{
    private readonly AppDbContext _context;

    public TrainService(AppDbContext context)
    {
        _context = context;
    }

    public IEnumerable<Train> GetAllTrains()
    {
        return _context.Trains.ToList();
    }

    public Train GetTrainById(int id)
    {
        return _context.Trains.FirstOrDefault(t => t.Id == id);
    }
}

