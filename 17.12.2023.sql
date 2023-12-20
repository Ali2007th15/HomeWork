create table People(
[Id] int primary key identity(1, 1),
[Name] nvarchar(30) NOT NULL,
[Surname] nvarchar(30) NOT NULL,
[Age] int NOT NULL check (Age >= 14 and Age < 100)
);
 
 
create table Employee(
[Id] int primary key identity(1, 1),
[Salary] smallmoney NOT NULL check ([Salary] >= 300),
[Experience] int NOT NULL check ([Experience] >= 0)
);
 
create table Faculty(
[Id] int primary key identity(1, 1),
[Name] nvarchar(30) NOT NULL
);
 
create table Students(
[Id] int primary key identity(1, 1),
[PersonId] int foreign key references People(Id),
[GPA] int check ([GPA] >= 0 and GPA <= 12)
);
 
create table Teachers(
[Id] int primary key identity(1, 1),
[PersonId] int foreign key references People(Id),
[EmployeeId] int foreign key references Employee(Id)
);
 
 
create table Groups(
[Id] int primary key identity(1, 1),
[Name] nvarchar(30) NOT NULL,
[Course] int NOT NULL check ([Course] >= 1 and [Course] <= 6),
[FacultyId] int foreign key references Faculty(Id)
);
 
create table GroupData(
[Id] int primary key identity(1, 1),
[StudentId] int foreign key references Students(Id),
[GroupId] int foreign key references Groups(Id)
);
 
create table StudyPlan(
[Id] int primary key identity(1, 1),
[TeacherId] int foreign key references Teachers(Id),
[GroupId] int foreign key references Groups(Id)
);
 
 
 
insert into People([Name], [Surname], [Age]) values(N'Али', N'Исмаил', 15);
insert into People([Name], [Surname], [Age]) values(N'Руфат', N'Алиев', 16);
insert into People([Name], [Surname], [Age]) values(N'Али', N'Ширинов', 17);
insert into People([Name], [Surname], [Age]) values(N'Зия', N'Гаджилы', 16);
insert into People([Name], [Surname], [Age]) values(N'Джавад', N'Рахимли', 19);
insert into People([Name], [Surname], [Age]) values(N'Рустам', N'Нифталиев', 25);
insert into People([Name], [Surname], [Age]) values(N'Игорь', N'Костоломов', 24);
insert into People([Name], [Surname], [Age]) values(N'Кянан', N'Мамедли', 15);
insert into People([Name], [Surname], [Age]) values(N'Рамиль', N'Теймуров', 20);
insert into People([Name], [Surname], [Age]) values(N'Эльнур', N'Мамедов', 20);
insert into People([Name], [Surname], [Age]) values(N'Агасаф', N'Маммедов', 18);
insert into People([Name], [Surname], [Age]) values(N'Атилла', N'Рустам', 16);
insert into People([Name], [Surname], [Age]) values(N'Ельвин', N'Азимов', 22);
insert into People([Name], [Surname], [Age]) values(N'Джавид', N'Атамогланов', 24);
insert into People([Name], [Surname], [Age]) values(N'Самир', N'Азимов', 28);
insert into People([Name], [Surname], [Age]) values(N'Намиг', N'Расуллу', 26);
 
 
 
 
insert into Students(PersonId) values(1);
insert into Students(PersonId) values(2);
insert into Students(PersonId) values(3);
insert into Students(PersonId) values(4);
insert into Students(PersonId) values(5);
insert into Students(PersonId) values(6);
insert into Students(PersonId) values(7);
insert into Students(PersonId) values(8);
insert into Students(PersonId) values(9);
insert into Students(PersonId) values(10);
insert into Students(PersonId) values(11);
insert into Students(PersonId) values(12);
insert into Students(PersonId) values(13);
insert into Students(PersonId) values(14);
insert into Students(PersonId) values(15);
insert into Students(PersonId) values(16);
insert into Students(PersonId) values(17);
insert into Students(PersonId) values(17);
insert into Students(PersonId) values(18);
insert into Teachers(PersonId, EmployeeId) values(3, 1);
insert into Teachers(PersonId, EmployeeId) values(4, 2);
insert into Teachers(PersonId, EmployeeId) values(5, 3);
insert into Teachers(PersonId, EmployeeId) values(6, 4);
 
select * from People;
select * from Students;
select * from Teachers;
 
 
insert into Faculty(Name) values(N'Computer Science');
insert into Faculty(Name) values(N'Information Technology');
 
insert into Groups(Name, Course, FacultyId) values(N'P311', 3, 1);
insert into Groups(Name, Course, FacultyId) values(N'P312', 3, 1);
insert into Groups(Name, Course, FacultyId) values(N'P313', 3, 2);
 
insert into StudyPlan(TeacherId, GroupId) values(1, 1);
insert into StudyPlan(TeacherId, GroupId) values(2, 2);
 
 
 
update Students
set GPA = 12
where Id = 1
 
update Students
set GPA = 7
where Id = 2
 
 
 
insert into Students(PersonId, GPA) values(7, 10);
insert into Students(PersonId, GPA) values(8, 11);
insert into Students(PersonId, GPA) values(9, 12);
insert into Students(PersonId, GPA) values(10, 9);
insert into Students(PersonId, GPA) values(11, 10);
insert into Students(PersonId, GPA) values(12, 11);
insert into Students(PersonId, GPA) values(13, 12);
insert into Students(PersonId, GPA) values(14, 9);
insert into Students(PersonId, GPA) values(15, 10);
insert into Students(PersonId, GPA) values(16, 1);
insert into Students(PersonId, GPA) values(17, 10);
 
insert into GroupData(StudentId, GroupId) values(3, 1);
insert into GroupData(StudentId, GroupId) values(4, 1);
insert into GroupData(StudentId, GroupId) values(5, 1);
insert into GroupData(StudentId, GroupId) values(6, 1);
insert into GroupData(StudentId, GroupId) values(7, 1);
insert into GroupData(StudentId, GroupId) values(8, 1);
insert into GroupData(StudentId, GroupId) values(9, 1);
 
insert into GroupData(StudentId, GroupId) values(10, 2);
insert into GroupData(StudentId, GroupId) values(11, 2);
insert into GroupData(StudentId, GroupId) values(12, 2);
insert into GroupData(StudentId, GroupId) values(13, 2);
insert into GroupData(StudentId, GroupId) values(14, 2);
insert into GroupData(StudentId, GroupId) values(15, 2);
 