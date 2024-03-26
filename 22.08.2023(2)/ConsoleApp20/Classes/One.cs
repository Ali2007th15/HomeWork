namespace ConsoleApp20.Classes;

public class One
{
    public static void FillAndDisplayArray()
    {
        var a = new int[5];
        var b = new double[3, 4];
        var random = new Random();

        
        Console.WriteLine("Enter 5 numbers for array A:");
        for (int i = 0; i < a.Length; i++)
        {
            a[i] = Convert.ToInt32(Console.ReadLine());
        }

        
        for (int row = 0; row < 3; row++)
        {
            for (int col = 0; col < 4; col++)
            {
                b[row, col] = random.Next(0, 10);
            }
        }

       
        Console.Write("Array A: ");
        foreach (int num in a)
        {
            Console.Write(num + " ");
        }
        Console.WriteLine();

      
        Console.WriteLine("Array B:");
        for (int row = 0; row < 3; row++)
        {
            for (int col = 0; col < 4; col++)
            {
                Console.Write(b[row, col] + " ");
            }
            Console.WriteLine();
        }
    }
}