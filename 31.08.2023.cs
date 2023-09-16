using System;
//
//
// Console.Write("Enter word from 0 to 9: ");
// string word = Console.ReadLine().ToLower(); 
//         
// int result = -1; 
//         
//
// switch (word)
// {
//     case "zero":
//         result = 0;
//         break;
//     case "one":
//         result = 1;
//         break;
//     case "two":
//         result = 2;
//         break;
//     case "three":
//         result = 3;
//         break;
//     case "four":
//         result = 4;
//         break;
//     case "five":
//         result = 5;
//         break;
//     case "six":
//         result = 6;
//         break;
//     case "seven":
//         result = 7;
//         break;
//     case "eight":
//         result = 8;
//         break;
//     case "nine":
//         result = 9;
//         break;
//         }
//
// if (result != -1)
// {
//     Console.WriteLine(result);
// }
// else
// {
//     Console.WriteLine("Error");
// }


try
{
    Passport passport = new Passport("C52LM52", "Ali Ismayil Arif", new(2015, 12, 27));
            
    Console.WriteLine($"Passport Number: {passport.Number}");
    Console.WriteLine($"Full Name: {passport.FullName}");
    Console.WriteLine($"Issue Date: {passport.Date}");
}
catch (ArgumentException ex)
{
    Console.WriteLine($"Error: {ex.Message}");
}

class Passport
{
    public string Number { get; }
    public string FullName { get; }
    public DateTime Date { get; }

    public Passport(string number, string fullName, DateTime date)
    {
        if (string.IsNullOrEmpty(number))
            throw new ArgumentException("Passport number cannot be empty");

        if (string.IsNullOrEmpty(fullName))
            throw new ArgumentException("Full name cannot be empty");

        if (date > DateTime.Today)
            throw new ArgumentException("Issue date cannot be in the future");

        Number = number;
        FullName = fullName;
        Date = date;
    }
}
