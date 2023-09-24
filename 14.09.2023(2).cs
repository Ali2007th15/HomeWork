using System;

Calculator calculator = new ();

Calculator.MathOperation addition = calculator.Add;
Calculator.MathOperation subtraction = calculator.Subtract;
Calculator.MathOperation multiplication = calculator.Multiply;
Calculator.MathOperation division = calculator.Divide;

double num1 = 10;
double num2 = 5;

Console.WriteLine($"Addition: {num1} + {num2} = {calculator.Calculate(addition, num1, num2)}");
Console.WriteLine($"Subtraction: {num1} - {num2} = {calculator.Calculate(subtraction, num1, num2)}");
Console.WriteLine($"Multiplication: {num1} * {num2} = {calculator.Calculate(multiplication, num1, num2)}");
Console.WriteLine($"Division: {num1} / {num2} = {calculator.Calculate(division, num1, num2)}");

public class Calculator
{
    public delegate double MathOperation(double num3, double num4);

    public double Add(double num3, double num4)
    {
        return num3 + num4;
    }

    public double Subtract(double num3, double num4)
    {
        return num3 - num4;
    }

    public double Multiply(double num3, double num4)
    {
        return num3 * num4;
    }

    public double Divide(double num3, double num4)
    {
        if (num4 == 0)
        {
            Console.WriteLine("Error");
        }
        return num3 / num4;
    }

    public double Calculate(MathOperation operation, double num3, double num4)
    {
        return operation(num3, num4);
    }
}