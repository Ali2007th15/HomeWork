using GalaSoft.MvvmLight;
using GalaSoft.MvvmLight.Command;
using GalaSoft.MvvmLight.Messaging;
using System;
using Prism.Mvvm;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows;
using TrendyolApp.Messages;
using TrendyolApp.Models;
using TrendyolApp.Services.Classes;
using TrendyolApp.Services.Interfaces;
using Prism.Commands;

namespace TrendyolApp.ViewModels
{
    public class IncreaseBalanceViewModel : ViewModelBase
    {
        private readonly IMessenger _messenger;
        private readonly INavigationService _navigationService;
        private readonly DataService _dataService;
        public IncreaseBalanceService _balanceService = new();
        public User CurrentUser { get; set; } = new();
        public TrendyolDbContext _dbcontext;
        public string _passwordText = "";
        public int _amount;
        private ViewModelBase _currentView;


        public string PasswordText
        {
            get { return _passwordText; }
            set { Set(ref _passwordText, value); }
        }
        public int Amount
        {
            get { return _amount; }
            set { Set(ref _amount, value); }
        }


        public ViewModelBase CurrentView
        {
            get => _currentView;
            set
            {
                Set(ref _currentView, value);
            }
        }


        public IncreaseBalanceViewModel(IMessenger messenger, INavigationService navigationService, DataService dataService, TrendyolDbContext dbContext)
        {
            _messenger = messenger;
            _navigationService = navigationService;
            _dataService = dataService;;
            _dbcontext = dbContext;


            messenger.Register<DataMessage>(this, message =>
            {
                if (message.Data as User != null)
                {
                    CurrentUser = message.Data as User;
                }
            });
        }


        public DelegateCommand IncreaseBalance_Button => new(() =>
        {
                if (Amount == 0)
                {
                    MessageBox.Show("Amount is 0");
                    return;
                }
                CurrentUser.Balance += Amount;
                _dbcontext.SaveChanges();
                _dataService.SendData(CurrentUser);
                MessageBox.Show("Balance Increased");
            
                _navigationService.NavigateTo<UserViewModel>();
                PasswordText = "";
                Amount = 0;
        });

        


        public RelayCommand Back_Button => new(() =>
        {
            PasswordText = "";
            Amount = 0;
            _navigationService.NavigateTo<UserViewModel>();
        });
    }
}
