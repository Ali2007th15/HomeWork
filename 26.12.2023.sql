CREATE TABLE Users (
    [user_id] INT PRIMARY KEY identity(1,1),
    username NVARCHAR(max),
    [password] NVARCHAR(max),
    email NVARCHAR(max)
);

CREATE TABLE ManufacturingCountries (
    country_id INT PRIMARY KEY identity(1,1),
    country_name NVARCHAR(max)
);

CREATE TABLE FuelTypes (
    fuel_type_id INT PRIMARY KEY identity(1,1),
    fuel_type NVARCHAR(max)
);

CREATE TABLE BodyTypes (
    body_type_id INT PRIMARY KEY identity(1,1),
    body_type NVARCHAR(max)
);

CREATE TABLE Colors (
    color_id INT PRIMARY KEY identity(1,1),
    color_name NVARCHAR(max)
);

CREATE TABLE Cars (
    car_id INT PRIMARY KEY identity(1,1),
    brand NVARCHAR(max),
    model NVARCHAR(max),
    [year] INT check([year] > 2018),
    fuel_type_id INT,
    body_type_id INT,
    color_id INT,
    image_link NVARCHAR(max),
    FOREIGN KEY (fuel_type_id) references FuelTypes(fuel_type_id),
    FOREIGN KEY (body_type_id) references BodyTypes(body_type_id),
    FOREIGN KEY (color_id) references Colors(color_id)
);

CREATE TABLE Sellers (
    seller_id INT PRIMARY KEY identity(1,1),
    [user_id] INT,
    company_name NVARCHAR(max),
    contact_number NVARCHAR(max),
    country_id INT,
    rating INT,
    FOREIGN KEY ([user_id]) references Users([user_id]),
    FOREIGN KEY (country_id) references ManufacturingCountries(country_id)
);

CREATE TABLE ProductList (
    product_id INT PRIMARY KEY identity(1,1),
    car_id INT,
    seller_id INT,
    price MONEY,
    quantity INT,
    FOREIGN KEY (car_id) references Cars(car_id),
    FOREIGN KEY (seller_id) references Users([user_id])
);
