//Freeze:Modifications cannot be done
// Step 1: Create object
let student = {
    name: "Riya",
    age: 20,
    city: "Amritsar"
};

console.log("Before Freeze:", student);

// Step 2: Freeze the object
Object.freeze(student);

// Step 3: Try modifying properties
student.age = 25;        // Will NOT change
student.country = "India"; // Will NOT add
delete student.city;     // Will NOT delete

// Step 4: Display object after modification attempts
console.log("After Freeze Attempt:", student);

// Step 5: Check if frozen
console.log("Is object frozen?", Object.isFrozen(student));
