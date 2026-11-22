const students = [
    { name: "Amit", marks: 75 },
    { name: "Rahul", marks: 45 },
    { name: "Priya", marks: 90 },
    { name: "Neha", marks: 55 }
];

for (let student of students) {
    if (student.marks >= 60) {
        console.log(student.name);
    }
}