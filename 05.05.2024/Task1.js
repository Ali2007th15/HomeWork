var car = {
    make: "Mercedes",
    model: "S63",
    year: 2024,
    averageSpeed: 100
  };
   
  function Info(car) {
    console.log("Make: " + car.make);
    console.log("Model: " + car.model);
    console.log("Year: " + car.year);
    console.log("Average Speed: " + car.averageSpeed + " km/h");
  }
   
  function Calculator(distance, averageSpeed) {
    var hours = distance / averageSpeed;
    var rest = (hours / 4) | 0;
    var totalHours = hours + rest;
    return totalHours;
  }
   
  Info(car);
  var distance = 500;
  var time = Calculator(distance, car.averageSpeed);
  console.log("Travel: " + distance + " km, " + time + " hours");