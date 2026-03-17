//convert entries array back to object
let student = {
    name: "Riya",
    age: 20,
    course: "BCA"
};

let abc= Object.entries(student);
let newabc= Object.fromEntries(abc);
console.log(newabc);
