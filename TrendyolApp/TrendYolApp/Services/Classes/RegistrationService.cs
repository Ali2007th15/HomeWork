using GalaSoft.MvvmLight.Messaging;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Text;
using System.Text.RegularExpressions;
using System.Threading.Tasks;
using System.Windows;
using TrendyolApp.Models;
using TrendyolApp.Services.Interfaces;
using TrendyolApp.ViewModels;

namespace TrendyolApp.Services.Classes
{
    public class RegistrationService
    {
        public readonly TrendyolDbContext _dbContext;
        private readonly IMessenger _messenger;
        private readonly INavigationService _navigationService;
        private readonly DataService _dataService;

        public RegistrationService(IMessenger messenger, INavigationService navigationService, DataService dataService, TrendyolDbContext dbContext)
        {
            _messenger = messenger;
            _navigationService = navigationService;
            _dataService = dataService;
            _dbContext = dbContext;
        }
        public string ValidateInput(string name, string surname, string username, string password, string email, string membership, byte[] _image)
        {
            if (string.IsNullOrWhiteSpace(name) || string.IsNullOrWhiteSpace(surname) || string.IsNullOrWhiteSpace(username) || string.IsNullOrWhiteSpace(password) ||
                string.IsNullOrWhiteSpace(email) || string.IsNullOrWhiteSpace(membership) || _image == null)
            {
                return "Please fill out all fields.";
            }


            return null;
        }


      


       
        public void RegistrationUser(string name, string surname, string username, string password, string email, string membership, byte[] _image)
        {
            string validationMessage = ValidateInput(name, surname,username, password, email, membership, _image);

            if (string.IsNullOrEmpty(validationMessage))
            {
                    if (_dbContext.Users.Any(u => u.Username == username))
                    {
                        MessageBox.Show("A user with this login already exists.");
                        username = "";
                        return;
                    }

                    if (_dbContext.Users.Any(u => u.Email == email))
                    {
                        MessageBox.Show("A user with this email already exists.");
                        email = "";
                        return;
                    }

                    User newUser = new User
                    {
                        Name = name,
                        Surname = surname,
                        Username = username,
                        Password = BCrypt.Net.BCrypt.HashPassword(password),
                        Email = email,
                        Membership = membership,
                        ProfileImage = _image
                    };

                    _dbContext.Users.Add(newUser);
                    _dbContext.SaveChanges();
                    _dataService.SendData(newUser);

                    name = "";
                    surname = "";
                    username = "";
                    password = "";
                    email = "";
                    _image = null;

                    MessageBox.Show("Registration successfully completed.");
                
            }   else
                    MessageBox.Show(validationMessage);

        }

    }
}
