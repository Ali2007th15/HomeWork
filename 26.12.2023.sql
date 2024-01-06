CREATE TABLE Users (
    [user_id] INT PRIMARY KEY,
    username VARCHAR(max),
    [password] VARCHAR(max),
    email VARCHAR(max)
);

CREATE TABLE ManufacturingCountries (
    country_id INT PRIMARY KEY,
    country_name VARCHAR(max)
);

CREATE TABLE FuelTypes (
    fuel_type_id INT PRIMARY KEY,
    fuel_type VARCHAR(max)
);

CREATE TABLE BodyTypes (
    body_type_id INT PRIMARY KEY,
    body_type VARCHAR(max)
);

CREATE TABLE Colors (
    color_id INT PRIMARY KEY,
    color_name VARCHAR(max)
);

CREATE TABLE Cars (
    car_id INT PRIMARY KEY,
    brand VARCHAR(max),
    model VARCHAR(max),
    [year] INT,
    fuel_type_id INT,
    body_type_id INT,
    color_id INT,
    image_link VARCHAR(max),
    FOREIGN KEY (fuel_type_id) references FuelTypes(fuel_type_id),
    FOREIGN KEY (body_type_id) references BodyTypes(body_type_id),
    FOREIGN KEY (color_id) references Colors(color_id)
);

CREATE TABLE Sellers (
    seller_id INT PRIMARY KEY,
    [user_id] INT,
    company_name VARCHAR(max),
    contact_number VARCHAR(max),
    country_id INT,
    rating INT,
    FOREIGN KEY ([user_id]) references Users([user_id]),
    FOREIGN KEY (country_id) references ManufacturingCountries(country_id)
);

CREATE TABLE ProductList (
    product_id INT PRIMARY KEY,
    car_id INT,
    seller_id INT,
    price INT,
    quantity INT,
    FOREIGN KEY (car_id) references Cars(car_id),
    FOREIGN KEY (seller_id) references Users([user_id])

);