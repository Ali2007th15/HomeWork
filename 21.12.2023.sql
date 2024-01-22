CREATE TABLE Faculties (
	id int primary key IDENTITY(1,1),
	[Name] nvarchar(max) NOT NULL
);
 
CREATE TABLE [Subject] (
	id int primary key IDENTITY(1,1),
	[Name] nvarchar(max) NOT NULL
 
);
 
CREATE TABLE Department(
	id int primary key IDENTITY(1,1),
	[Name] nvarchar(max) NOT NULL,
	Financing money NOT NULL DEFAULT 0 CHECK(Financing > 0),
	FacultiesId int NOT NULL foreign key references Faculties(id)
);
CREATE TABLE Teachers(
	id int primary key IDENTITY(1,1),
	[Name] nvarchar(max) NOT NULL,
	Surname nvarchar(max) NOT NULL,
	Salary money NOT NULL CHECK(Salary > 0),
	DepartmentId int NOT NULL foreign key references Department(id)

);
 
 
CREATE TABLE Groups(
	id int primary key IDENTITY(1,1),
	[Name] nvarchar(max) NOT NULL,
	CourseYear int NOT NULL CHECK(CourseYear > 1 AND CourseYear < 5),
	DepartmentId int foreign key references Department(id),
);
 
CREATE TABLE Lectures(
	id int primary key IDENTITY(1,1),
	DayOfWeak int  NOT NULL CHECK(DayOfWeak >= 1 AND DayOfWeak <= 7),
	LectureRoom nvarchar(max) NOT NULL,
	SubjectId int foreign key references [Subject](id),
	TeacherId int foreign key references Teachers(id)
);
 
CREATE TABLE GroupLectures(
	id int primary key IDENTITY(1,1),
	GroupId int foreign key references Groups(id),
	LecturesId int foreign key references Lectures(id)
);
 
 
INSERT INTO Faculties ([Name]) VALUES ('Business');
INSERT INTO Faculties ([Name]) VALUES ('Engineering');

INSERT INTO [Subject] ([Name]) VALUES ('Biology');
INSERT INTO [Subject] ([Name]) VALUES ('Chemistry');
 
INSERT INTO Teachers ([Name], Surname, Salary, DepartmentId) VALUES ('Dave', 'McQueen', 4000, 1);
INSERT INTO Teachers ([Name], Surname, Salary, DepartmentId) VALUES ('Ramin', 'Quliev', 8000, 2);
INSERT INTO Teachers ([Name], Surname, Salary, DepartmentId) VALUES ('Jake', 'Underhill', 2000, 1);

INSERT INTO Department ([Name], Financing, FacultiesId) VALUES ('Computer Science', 6000, 1);
INSERT INTO Department ([Name], Financing, FacultiesId) VALUES ('Software Development', 2000, 2);
 
INSERT INTO Groups ([Name], CourseYear, DepartmentId) VALUES ('LS606', 2, 1);
INSERT INTO Groups ([Name], CourseYear, DepartmentId) VALUES ('FS222', 2, 1);
INSERT INTO Groups ([Name], CourseYear, DepartmentId) VALUES ('DG256', 3, 2);

INSERT INTO Lectures (DayOfWeak, LectureRoom, SubjectId, TeacherId) VALUES (1, 'D345', 1, 3);
INSERT INTO Lectures (DayOfWeak, LectureRoom, SubjectId, TeacherId) VALUES (2, 'D201', 2, 3);
INSERT INTO Lectures (DayOfWeak, LectureRoom, SubjectId, TeacherId) VALUES (3, 'D123', 3 , 1);
INSERT INTO Lectures (DayOfWeak, LectureRoom, SubjectId, TeacherId) VALUES (4, 'D523', 4 , 2);


select * from Lectures;
INSERT INTO GroupLectures (GroupId, LecturesId) VALUES (1, 9);
INSERT INTO GroupLectures (GroupId, LecturesId) VALUES (2, 10);
 
 
SELECT COUNT(Teachers.id) AS TeacherCount
FROM Teachers
inner join Department ON Teachers.DepartmentId = Department.id
inner join Faculties ON Department.FacultiesId = Faculties.id
WHERE Department.[Name] = 'Software Development';


SELECT COUNT(*) AS LectureCount
FROM Lectures
WHERE TeacherId = 1;


SELECT COUNT(SubjectId) AS LectureCount
FROM Lectures
WHERE LectureRoom = 'D201';


SELECT LectureRoom,
COUNT(id) AS LectureCount
FROM Lectures
GROUP BY LectureRoom;


SELECT COUNT(DISTINCT GroupLectures.GroupId) AS StudentCount
FROM GroupLectures
inner join Lectures ON GroupLectures.LecturesId = Lectures.id
inner join Teachers ON Lectures.TeacherId = Teachers.id
WHERE Teachers.[Name] = 'Jake' AND Teachers.Surname = 'Underhill';


SELECT AVG(Salary) AS AverageSalary
FROM Teachers
WHERE DepartmentId = 1;


SELECT AVG(Financing) AS AverageFunding
FROM Department;


SELECT id,
  (SELECT COUNT(id)
   FROM Lectures 
   WHERE DayOfWeak = id) as [Count]
   FROM Lectures;
 