using System;
//
//
// int[] array = { 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 };
// Array calculator = new(array);
//
//         
// int less = calculator.Less(5);
// int greater = calculator.Greater(5);
//
// Console.WriteLine($"number of elements is less than 5: {less}");
// Console.WriteLine($"number of elements is more than 5: {greater}");
//
// public interface ICalc
// {
//     int Less(int num1);
//     int Greater(int num2);
// }
//
//
// public class Array : ICalc
// {
//     private int[] _num3 { get; set; }
//
//     public Array(int[] array)
//     {
//         _num3 = array;
//     }
//
//     public int Less(int num1)
//     {
//         var count = 0;
//         foreach (var num in _num3)
//         {
//             if (num < num1)
//             {
//                 count++;
//             }
//         }
//         return count;
//     }
//
//     public int Greater(int num2)
//     {
//         var count = 0;
//         foreach (var num in _num3)
//         {
//             if (num > num2)
//             {
//                 count++;
//             }
//         }
//         return count;
//     }
// }
//
//


int[] array = { 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 };
Array calculator = new(array);

int less = calculator.Less(5);
int greater = calculator.Greater(5);

Console.WriteLine($"Number of elements less than 5: {less}");
Console.WriteLine($"Number of elements greater than 5: {greater}");

calculator.ShowEven();
calculator.ShowOdd();

public interface ICalc
{
    int Less(int num1);
    int Greater(int num2);
}

public interface IOutput2
{
    void ShowEven();
    void ShowOdd();
}

public class Array : ICalc, IOutput2
{
    private int[] _num3 { get; set; }

    public Array(int[] array)
    {
        _num3 = array;
    }

    public int Less(int num1)
    {
        var count = 0;
        foreach (var num in _num3)
        {
            if (num < num1)
            {
                count++;
            }
        }
        return count;
    }

    public int Greater(int num2)
    {
        var count = 0;
        foreach (var num in _num3)
        {
            if (num > num2)
            {
                count++;
            }
        }
        return count;
    }

    public void ShowEven()
    {
        Console.WriteLine("Even numbers:");
        foreach (var num in _num3)
        {
            if (num % 2 == 0)
            {
                Console.Write($"{num} ");
            }
        }
        Console.WriteLine();
    }

    public void ShowOdd()
    {
        Console.WriteLine("Odd numbers:");
        foreach (var num in _num3)
        {
            if (num % 2 != 0)
            {
                Console.Write($"{num} ");
            }
        }
        Console.WriteLine();
    }
}