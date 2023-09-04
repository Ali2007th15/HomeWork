using System;
//
// Console.WriteLine("Enter a number from 1 to 100:");
// int number = Int32.Parse(Console.ReadLine());
//
// if (number < 1 || number > 100)
// {
//     Console.WriteLine("Error");
// }
// else if (number % 3 == 0 && number % 5 == 0)
// {
//     Console.WriteLine("Fizz Buzz");
// }
// else if (number % 3 == 0)
// {
//     Console.WriteLine("Fizz");
// }
// else if (number % 5 == 0)
// {
//     Console.WriteLine("Buzz");
// }
// else
// {
//     Console.WriteLine(number);
// }


// Console.WriteLine("Enter the 1st number:");
// int num1 = Int32.Parse(Console.ReadLine());
// Console.WriteLine("Enter the 2nd number:");
// int num2 = Int32.Parse(Console.ReadLine());
// Console.WriteLine("Enter the 3rd number:");
// int num3 = Int32.Parse(Console.ReadLine());
// Console.WriteLine("Enter the 4th number:");
// int num4 = Int32.Parse(Console.ReadLine());
//
// int number = num1 * 1000 + num2 * 100 + num3 * 10 + num4;
// Console.WriteLine("Result: ");
// Console.WriteLine(number);


//
// Console.WriteLine("Enter a six-digit number:");
// int num = Int32.Parse(Console.ReadLine());
//
// if (num < 100000 || num > 999999)
// {
//     Console.WriteLine("Error: Number must be six digits.");
// }
// else
// {
//     Console.WriteLine("Enter positions of digits to swap:");
//     int num1 = Int32.Parse(Console.ReadLine());
//     int num2 = Int32.Parse(Console.ReadLine());
//
//     int[] nums = new int[6];
//     
//     for (int i = 5; i >= 0; i--)
//     {
//         nums[i] = num % 10;
//         num /= 10;
//     }
//
//     int temp = nums[num1 - 1];
//     
//     nums[num1 - 1] = nums[num2 - 1];
//     
//     nums[num2 - 1] = temp;
//
//     int result = 0;
//     
//     for (int i = 0; i < 6; i++)
//     {
//         result = result * 10 + nums[i];
//     }
//
//     Console.WriteLine("Result: ");
//     Console.WriteLine(result);
// }
//


//
// int temperature = 0;
// while (temperature == 0)
// {
//     Console.WriteLine("Choose an action:");
//     Console.WriteLine("1. Convert from Fahrenheit to Celsius");
//     Console.WriteLine("2. Convert from Celsius to Fahrenheit");
//
//     var choice = char.Parse(Console.ReadLine());
//     
//     if (choice == '1')
//     {
//         Console.Write("Enter temperature in Fahrenheit: ");
//         int fahrenheit = int.Parse(Console.ReadLine());
//         int celsius = (fahrenheit - 32) * 5 / 9;
//         Console.WriteLine($"Temperature in Celsius: {celsius}");
//         temperature = 1;
//     }
//     else if (choice == '2')
//     {
//         Console.Write("Enter temperature in Celsius: ");
//         int celsius = int.Parse(Console.ReadLine());
//         int fahrenheit = celsius * 9 / 5 + 32;
//         Console.WriteLine($"Temperature in Fahrenheit: {fahrenheit}");
//         temperature = 1;
//     }
// }


Console.Write("Enter the first number: ");
int firstNumber = Int32.Parse(Console.ReadLine());

Console.Write("Enter the second number: ");
int secondNumber = Int32.Parse(Console.ReadLine());

if (firstNumber > secondNumber)
{
    int temp = firstNumber;
    firstNumber = secondNumber;
    secondNumber = temp;
}

Console.WriteLine($"Even numbers in the range from {firstNumber} to {secondNumber}:");
for (int i = firstNumber; i <= secondNumber; i++)
{
    if (i % 2 == 0)
    {
        Console.WriteLine(i);
    }
}
