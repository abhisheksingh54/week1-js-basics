const student = {
    name: "Abhishek",
    age: 21,
    course: "MCA",
    marks: 85
};

for (let key in student) {
    console.log(key + ": " + student[key]);
}