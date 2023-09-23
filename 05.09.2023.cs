using System;
//
// Magazine Magazine1 = new ("Ali's Magazine", "2021", "This is the most popular magazine", "magazine1@gmail.com", "+994 50 578 98 88", 10);
// Magazine Magazine2 = new ("Teymur's Magazine", "2022", "This is the second most popular magazine", "magazine2@gmail.com", "+994 70 540 78 90", 5);
//
// Console.WriteLine("First magazine:");
//
// Magazine1.Display();
//
// Console.WriteLine();
//
// Console.WriteLine("Second magazine:");
//     
// Magazine2.Display();
//
// Console.WriteLine();
//
// Console.WriteLine("Comparison of the number of employees:");
// if (Magazine1 == Magazine2)
// {
//     Console.WriteLine("Both magazines have the same number of employees.");
// }
// else if (Magazine1 < Magazine2)
// {
//     Console.WriteLine("Magazine1 has fewer employees than Magazine2.");
// }
// else
// {
//     Console.WriteLine("Magazine1 has more employees than Magazine2.");
// }
//
// Magazine1 += 5;
// Magazine2 -= 2;
//
// Console.WriteLine();
//
// Console.WriteLine("Updated number of employees");
//
// Console.WriteLine();
//
// Console.WriteLine("First magazine:");
//
// Magazine1.Display();
//
// Console.WriteLine();
//
// Console.WriteLine("Second magazine:");
//
// Magazine2.Display();
//
//
//
// class Magazine
// {
//     public string Name { get; set; }
//     public string Year { get; set; }
//     public string Description { get; set; }
//     public string Email { get; set; }
//     public string Phone { get; set; }
//     public int Employee { get; set; }
//
//     public Magazine(string name, string year, string description, string email, string phone, int employee)
//     {
//         Name = name;
//         Year = year;
//         Description = description;
//         Email = email;
//         Phone = phone;
//         Employee = employee;
//     }
//
//     public static Magazine operator +(Magazine magazine, int add)
//     {
//         magazine.Employee += add;
//         return magazine;
//     }
//
//     public static Magazine operator -(Magazine magazine, int remove)
//     {
//         magazine.Employee -= remove;
//         return magazine;
//     }
//
//     public static bool operator ==(Magazine magazine1, Magazine magazine2)
//     {
//         return magazine1.Employee == magazine2.Employee;
//     }
//
//     public static bool operator !=(Magazine magazine1, Magazine magazine2)
//     {
//         return magazine1.Employee != magazine2.Employee;
//     }
//
//     public static bool operator <(Magazine magazine1, Magazine magazine2)
//     {
//         return magazine1.Employee < magazine2.Employee;
//     }
//
//     public static bool operator >(Magazine magazine1, Magazine magazine2)
//     {
//         return magazine1.Employee > magazine2.Employee;
//     }
//
//     public override bool Equals(object obj)
//     {
//         if (obj is Magazine)
//         {
//             Magazine second = obj as Magazine;
//
//             return Employee == second.Employee;
//         }
//         return false;
//     }
//
//     public override int GetHashCode()
//     {
//         return Employee.GetHashCode();
//     }
//
//     public void Display()
//     {
//         Console.WriteLine($"Magazine's name: {Name}");
//         Console.WriteLine($"Magazine's year of foundation: {Year}");
//         Console.WriteLine($"Magazine's description: {Description}");
//         Console.WriteLine($"Magazine's email: {Email}");
//         Console.WriteLine($"Magazine's phone: {Phone}");
//         Console.WriteLine($"Magazine's number of employees: {Employee}");
//     }
// }


Shop Shop1 = new("Ali's Shop", "This is the most popular shop", "shop1@gmail.com","+994 50 888 88 88", 500);
Shop Shop2 = new("Teymur's Shop", "This is the second most popular shop", "shop2@gmail.com","+994 50 898 99 78", 600);

Console.WriteLine("First Shop:");

Shop1.Display();

Console.WriteLine();

Console.WriteLine("Second Shop:");
    
Shop2.Display();

Console.WriteLine();

Console.WriteLine("Area comparision:");
if (Shop1 == Shop2)
{
    Console.WriteLine("Both magazines have the same area.");
}
else if (Shop1 < Shop2)
{
    Console.WriteLine("Shop1 has smaller area than Shop2.");
}
else
{
    Console.WriteLine("Shop1 has larger area than Shop2.");
}

Shop1 += 200;
Shop2 -= 100;

Console.WriteLine();

Console.WriteLine("Area Updated");

Console.WriteLine();

Console.WriteLine("First Shop:");

Shop1.Display();

Console.WriteLine();

Console.WriteLine("Second Shop:");
Shop2.Display();




class Shop
{
    public string Name { get; set; }
    public string Description { get; set; }
    public string Email { get; set; }
    public string Phone { get; set; }
    public int Area { get; set; }

    public Shop(string name, string description, string email, string phone, int area)
    {
        Name = name;
        Description = description;
        Email = email;
        Phone = phone;
        Area = area;
    }
    public static Shop operator +(Shop shop, int add)
    {
        shop.Area += add;
        return shop;
    }

    public static Shop operator -(Shop shop, int remove)
    {
        shop.Area -= remove;
        return shop;
    }

    
    public static bool operator ==(Shop shop1, Shop shop2)
    {
        return shop1.Area == shop2.Area;
    }

    public static bool operator !=(Shop shop1, Shop shop2)
    {
        return shop1.Area != shop2.Area;
    }

    public static bool operator <(Shop shop1, Shop shop2)
    {
        return shop1.Area < shop2.Area;
    }

    public static bool operator >(Shop shop1, Shop shop2)
    {
        return shop1.Area > shop2.Area;
    }

    public override bool Equals(object obj)
    {
        if (obj is Shop)
        {
            Shop second = obj as Shop;
            return Area == second.Area;
        }
        return false;
    }

    public override int GetHashCode()
    {
        return Area.GetHashCode();
    }


    public void Display()
    {
        Console.WriteLine($"Shop's name: {Name}");
        Console.WriteLine($"Shop's description: {Description}");
        Console.WriteLine($"Shop's email: {Email}");
        Console.WriteLine($"Shop's phone: {Phone}");
        Console.WriteLine($"Shop's area: {Area}");
    }
}