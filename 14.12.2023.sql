CREATE TABLE Students (
    StudentID INT PRIMARY KEY,
    FirstName VARCHAR(50),
    LastName VARCHAR(50),
    Age INT,
    GPA FLOAT
);
 
CREATE TABLE Courses (
    CourseID INT PRIMARY KEY,
    CourseName VARCHAR(50),
    Difficulty INT,
    Credits INT
);
 
CREATE TABLE Enrollments (
    EnrollmentID INT PRIMARY KEY,
    StudentID INT,
    CourseID INT,
    Grade FLOAT
);
 
INSERT INTO Students (StudentID, FirstName, LastName, Age, GPA)
VALUES
        (1, 'Али', 'Исмаил', 15, 4.0),
	(2, 'Руфат', 'Алиев', 16, 3.7),
	(3, 'Али', 'Ширинов', 17, 3.9),
	(4, 'Зия', 'Гаджилы', 16, 3.5),
	(5, 'Джавад', 'Рахимли', 19, 3.4),
	(6, 'Рустам', 'Нифталиев', 25, 3.7),
	(7, 'Игорь', 'Костоломов', 24, 3.8),
	(8, 'Кянан', 'Мамедли', 15, 4.0),
	(9, 'Рамиль', 'Теймуров', 20, 4.0),
	(10, 'Эльнур', 'Мамедов', 20, 3.7),
	(11, 'Агасаф', 'Маммедов', 18, 3.8),
        (12, 'Атилла', 'Рустам', 16, 3.3);
 
INSERT INTO Courses (CourseID, CourseName, Difficulty, Credits)
VALUES

    (101, 'Математика', 4, 3),
    (102, 'Химия', 5, 2),
    (103, 'Русский', 2, 3),
    (104, 'Английский', 3, 3),
    (105, 'Информатика', 2, 3),
    (106, 'Физика', 3, 4),
    (107, 'Литература', 2, 3),
    (108, 'История', 2, 3),
    (109, 'Биология', 3, 4);
 
INSERT INTO Enrollments (EnrollmentID, StudentID, CourseID, Grade)
VALUES
    (1, 1, 101, 3.7),
    (2, 1, 102, 4.0),
    (3, 2, 101, 3.9),
    (4, 3, 103, 3.5),
    (5, 3, 105, 3.2),
    (6, 4, 102, 3.8),
    (7, 4, 104, 4.0),
    (8, 5, 105, 3.1),
    (9, 5, 101, 3.0);
 
 
 
 
    select AVG(Grade) from Enrollments where CourseID = 101;
	select MAX(Age) from Students where GPA > 3.5;
	select COUNT(CourseName) from Courses where Difficulty > 3;
	select AVG(Credits) from Courses;
	select Max(Difficulty) from Courses;