using System;

BankAccount account1 = new BankAccount("Account 1", 1000.0);
BankAccount account2 = new BankAccount("Account 2", 500.0);

account1.Register(amount => Console.WriteLine($"Operation on Account 1: {amount}"));
account2.Register(amount => Console.WriteLine($"Operation on Account 2: {amount}"));

account1.PrintBalance();
account2.PrintBalance();

account1.Deposit(200.0);
account2.Deposit(300.0);

account1.Withdraw(50.0);
account2.Withdraw(100.0);

account1.PrintBalance();
account2.PrintBalance();

delegate void Operation(double amount);

class BankAccount
{
    private double Balance { get; set; }
    private string Name { get; set; }
    private Operation operation { get; set; }

    public BankAccount(string name, double balance)
    {
        Name = name;
        Balance = balance;
    }

    public void Deposit(double amount)
    {
        Balance += amount;
        Console.WriteLine($"Deposited {amount} into {Name}'s account");
        operation.Invoke(amount);
    }

    public void Withdraw(double amount)
    {
        if (Balance >= amount)
        {
            Balance -= amount;
            Console.WriteLine($"Withdrawn {amount} from {Name}'s account");
            operation.Invoke(-amount);
        }
        else
        {
            Console.WriteLine($"Error: Insufficient funds in {Name}'s account");
        }
    }

    public void PrintBalance()
    {
        Console.WriteLine($"Balance of {Name}'s account: {Balance}");
    }

    public void Register(Operation num1)
    {
        operation += num1;
    }
}