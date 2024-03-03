using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Controls;
using System.Windows;
using TrendyolApp.Views;
using System.Text.RegularExpressions;
using TrendyolApp.Models;
using Microsoft.EntityFrameworkCore;
using System.IO;
using System.Text.Json;
using TrendyolApp.ViewModels;
using TrendyolApp.Services.Interfaces;

namespace TrendyolApp.Services.Classes
{
    public class LoginService
    {
        private readonly INavigationService _navigationService;

        public LoginService(INavigationService navigationService)
        {
            _navigationService = navigationService;
        }

        public bool IsLoginValid(DbSet<User> users, string login, string password)
        {
            var user = users.FirstOrDefault(u => u.Username == login);

            if (user != null)
            {
                return BCrypt.Net.BCrypt.Verify(password, user.Password);
            }

            return false;
        }

        public string ValidateInput(string loginText, string passwordText)
        {
            if (string.IsNullOrWhiteSpace(loginText) || string.IsNullOrWhiteSpace(passwordText))
            {
                MessageBox.Show("Please fill out all fields.");
                return "Please fill out all fields.";
            }


            return null;
        }
        public void GetUserMembership(DbSet<User> users, string username)
        {
            var user = users.FirstOrDefault(u => u.Username == username);

            if (user != null)
            {
                switch (user.Membership)
                {
                    case "Admin":
                        _navigationService.NavigateTo<AdminViewModel>();
                        break;
                    case "User":
                        _navigationService.NavigateTo<UserViewModel>();
                        break;
                    case "SuperAdmin":
                        _navigationService.NavigateTo<SuperAdminViewModel>();
                        break;
                    default:
                        MessageBox.Show("Unknown membership role.");
                        break;
                }
            }
            else
            {
                MessageBox.Show("User not found or authentication failed.");
            }
        }



        public bool AuthenticateUser(string username, string password, DbSet<User> users)
        {
            var user = users.FirstOrDefault(u => u.Username == username);

            if (user != null && IsLoginValid(users, username, password))
            {
                return true;
            }

            MessageBox.Show("Wrong login or password.");
            return false;
        }
    }
}

