let Classrooms = [
    { name: '2B', seats: 15, faculty: 'Computer Science' },
    { name: '5A', seats: 20, faculty: 'Mathematics' },
    { name: '2A', seats: 10, faculty: 'Physics' },
    { name: '3D', seats: 18, faculty: 'Computer Science' },
    { name: '4C', seats: 12, faculty: 'Mathematics' }
];

function Print(Classrooms) {
    console.log("All Classrooms:");
    Classrooms.forEach(classroom => {
        console.log(`Name: ${classroom.name}, Seats: ${classroom.seats}, Faculty: ${classroom.faculty}`);
    });
}

function PrintByFaculty(Classrooms, faculty) {
    console.log(`Classrooms for faculty ${faculty}:`);
    Classrooms
        .filter(classroom => classroom.faculty === faculty)
        .forEach(classroom => {
            console.log(`Name: ${classroom.name}, Seats: ${classroom.seats}, Faculty: ${classroom.faculty}`);
        });
}

function PrintForGroup(Classrooms, group) {
    console.log(`Classrooms suitable for group ${group.name}:`);
    Classrooms
        .filter(classroom => classroom.seats >= group.students && classroom.faculty === group.faculty)
        .forEach(classroom => {
            console.log(`Name: ${classroom.name}, Seats: ${classroom.seats}, Faculty: ${classroom.faculty}`);
        });
}

function SortBySeats(Classrooms) {
    return Classrooms.slice().sort((a, b) => a.seats - b.seats);
}

function SortByName(Classrooms) {
    return Classrooms.slice().sort((a, b) => a.name.localeCompare(b.name));
}


Print(Classrooms);
console.log("\n");
PrintByFaculty(Classrooms, 'Computer Science');
console.log("\n");

let group = { name: '2B', students: 16, faculty: 'Computer Science' };
PrintForGroup(Classrooms, group);
console.log("\n");

let sortedBySeats = SortBySeats(Classrooms);
console.log("Classrooms sorted by seats:");
sortedBySeats.forEach(classroom => console.log(`Name: ${classroom.name}, Seats: ${classroom.seats}, Faculty: ${classroom.faculty}`));
console.log("\n");

let sortedByName = SortByName(Classrooms);
console.log("Classrooms sorted by name:");
sortedByName.forEach(classroom => console.log(`Name: ${classroom.name}, Seats: ${classroom.seats}, Faculty: ${classroom.faculty}`));
