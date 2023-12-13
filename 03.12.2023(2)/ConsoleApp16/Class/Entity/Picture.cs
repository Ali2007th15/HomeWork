using ConsoleApp16.Interface;

namespace ConsoleApp16.Class.Entity;

class Picture : IPicture
{
    private string color; 
    
    public Picture(string color)
    {
        this.color = color;
    }

    public void Draw(int num1, int num2, int height, int width)
    {
        Console.WriteLine($"Drawing {color} picture at coordinates ({num1}, {num2}) with height: {height} and width: {width}");

    }
}


