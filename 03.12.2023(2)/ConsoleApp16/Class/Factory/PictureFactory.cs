using ConsoleApp16.Class.Entity;
using ConsoleApp16.Interface;

namespace ConsoleApp16.Class.Factory;

class PictureFactory
{
    private Dictionary<string, IPicture> _pictures = new();

    public IPicture GetColor(string color)
    {
        if (!_pictures.ContainsKey(color))
        {
            _pictures[color] = new Picture(color);
        }

        return _pictures[color];
    }
}