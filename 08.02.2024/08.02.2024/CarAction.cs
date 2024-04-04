using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _08._02._2024;
    public class CarAction
    {
        private readonly string _connectionString;

        public CarAction(string connectionString)
        {
            _connectionString = connectionString;
        }

        public IEnumerable<Car> GetAllCars()
        {
            using var connection = new SqlConnection(_connectionString);
            connection.Open();

            return connection.Query<Car>("SELECT * FROM Cars");
        }
    }

