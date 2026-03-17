//reference vs copy behaviour
let student1 = {
    name: "Riya",
    age: 20
};

// Reference copy
let student2 = student1;

// Modify student2
student2.age = 25;

console.log("student1:", student1);   //25
console.log("student2:", student2);   //25
