using ADY_API.Services;
using Microsoft.AspNetCore.Mvc;

namespace ADY_API.Controllers;

[ApiController]
[Route("api/[controller]")]
public class TrainController : ControllerBase
{
    private readonly ITrainService _trainService;

    public TrainController(ITrainService trainService)
    {
        _trainService = trainService;
    }

    [HttpGet]
    public IActionResult GetTrains()
    {
        var trains = _trainService.GetAllTrains();
        return Ok(trains);
    }

    [HttpGet("{id}")]
    public IActionResult GetTrain(int id)
    {
        var train = _trainService.GetTrainById(id);
        if (train == null) return NotFound();
        return Ok(train);
    }
}
