using System;

// Console.Write("Enter length of square: ");
// int length = int.Parse(Console.ReadLine());
//
// Console.Write("Enter symbol: ");
// char symbol = char.Parse(Console.ReadLine());
//
//
//
// DisplaySquare(length, symbol);
//
// static void DisplaySquare(int length, char symbol)
// {
//     if (length <= 0)
//     {
//         Console.WriteLine("Error");
//         return;
//     }
//
//     for (int i = 0; i < length; i++)
//     {
//         for (int j = 0; j < length; j++)
//         {
//             Console.Write(symbol);
//         }
//         Console.WriteLine();
//     }
// }

// Website Website1 = new("WebSite1", "https://www.Website1.com", "Hello", "126.225.1.1");
// Website1.Display();
//
//
// Website1.Description = "Hello I am Ali";
// Console.WriteLine($"Website's new description: {Website1.Description}");
//
// class Website
// {
//     public string Name { get; set; }
//     public string Path { get; set; }
//     public string Description { get; set; }
//     public string Ip { get; set; }
//    
//    
//     public Website(string name, string path, string description, string ip)
//     {
//         Name = name;
//         Path = path;
//         Description = description;
//         Ip = ip;
//     }
//
//
//     public void Display()
//     {
//         Console.WriteLine($"Website's name: {Name}");
//         Console.WriteLine($"Website's Path: {Path}");
//         Console.WriteLine($"Website's description: {Description}");
//         Console.WriteLine($"Ip adress: {Ip}");
//     }
// }
//
// Magazine Magazine1 = new("Ali's Magazine", "2021", "This is popular magazine", "magazine@gmail.com","+994 50 578 98 88");
// Magazine1.Display();
//
//
// class Magazine
// {
//     public string Name { get; set; }
//     public string Year { get; set; }
//     public string Description { get; set; }
//     public string Email { get; set; }
//     public string Phone { get; set; }
//
//     public Magazine(string name, string year, string description, string email, string phone)
//     {
//         Name = name;
//         Year = year;
//         Description = description;
//         Email = email;
//         Phone = phone;
//     }
//
//
//     public void Display()
//     {
//         Console.WriteLine($"Magazine's name: {Name}");
//         Console.WriteLine($"Magazine's year of foundation : {Year}");
//         Console.WriteLine($"Magazine's description: {Description}");
//         Console.WriteLine($"Magazine's email: {Email}");
//         Console.WriteLine($"Magazine's phone: {Phone}");
//     }
// }


Shop Shop1 = new("Ali's Shop", "This is popular shop", "shop@gmail.com","+994 50 888 88 88");
Shop1.Display();


class Shop
{
    public string Name { get; set; }
    public string Description { get; set; }
    public string Email { get; set; }
    public string Phone { get; set; }

    public Shop(string name, string description, string email, string phone)
    {
        Name = name;
        Description = description;
        Email = email;
        Phone = phone;
    }


    public void Display()
    {
        Console.WriteLine($"Shop's name: {Name}");
        Console.WriteLine($"Shop's description: {Description}");
        Console.WriteLine($"Shop's email: {Email}");
        Console.WriteLine($"Shop's phone: {Phone}");
    }
}


