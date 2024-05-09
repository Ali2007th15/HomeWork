using Azure;
using Newtonsoft.Json;
using OMDBAPI.Models;
using System.Net.Http;
using System.Text;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Data;
using System.Windows.Documents;
using System.Windows.Input;
using System.Windows.Media;
using System.Windows.Media.Imaging;
using System.Windows.Navigation;
using System.Windows.Shapes;

namespace OMDBAPI
{

    public partial class MainWindow : Window
    {

        private const string ApiKey = "13ae46f3";
        private const string ApiUrl = "http://www.omdbapi.com/";

        private List<Movie> _selectedMovies = new List<Movie>();


        private readonly HttpClient _httpClient;

        public MainWindow()
        {
            InitializeComponent();
            _httpClient = new HttpClient();

        }


        private void ListBoxMovies_SelectionChanged(object sender, SelectionChangedEventArgs e)
        {
            var selectedMovie = ListBoxMovies.SelectedItem as Movie;
            if (selectedMovie != null)
            {
                _selectedMovies.Add(selectedMovie);
            }
        }

        private void SearchButton_Click(object sender, RoutedEventArgs e)
        {
            ListBoxMovies.Items.Clear();
            string searchText = SearchTextBox.Text.Trim();
            if (!string.IsNullOrEmpty(searchText))
            {
                string apiUrl = $"{ApiUrl}?apikey={ApiKey}&s={searchText}"; 
                HttpResponseMessage response = _httpClient.GetAsync(apiUrl).Result;
                if (response.IsSuccessStatusCode)
                {
                    string json = response.Content.ReadAsStringAsync().Result;
                    var result = JsonConvert.DeserializeObject<OmdbSearchResult>(json);
                    if (result != null && result.Search != null)
                    {
                        foreach (var movie in result.Search)
                        {
                            ListBoxMovies.Items.Add(movie);
                        }
                    }
                }
                else
                {
                    MessageBox.Show("Ошибка при выполнении запроса к API.");
                }
            }
            else
            {
                MessageBox.Show("Введите текст для поиска.");
            }
        }

        private void AddToDB_Click(object sender, RoutedEventArgs e)
        {
            using (var dbContext = new OMDBContext())
            {
                foreach (var movie in _selectedMovies)
                {
                    dbContext.Movies.Add(movie);
                }
                dbContext.SaveChanges();
            }
            _selectedMovies.Clear();
        }
    }
}