let student = {
    name: "Riya",
    age: 20,
    course: "BCA"
};

// Clone object
let clonedStudent = Object.assign({}, student);
console.log("Original Object:", student);
console.log("Cloned Object:", clonedStudent);

clonedStudent.age = 25;
console.log("After Changing Cloned Object:");
console.log("Original Object:", student);
console.log("Cloned Object:", clonedStudent);
