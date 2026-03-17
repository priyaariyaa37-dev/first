//seal:No new property cannot be added but modification to existing property can be done
// Step 1: Create object
let student = {
    name: "Riya",
    age: 20
};

console.log("Before Seal:", student);

// Step 2: Seal the object
Object.seal(student);

// Step 3: Try adding new property
student.city = "Amritsar";   // ❌ Will NOT be added

// Step 4: Try modifying existing property
student.age = 25;            // ✅ Allowed

// Step 5: Try deleting property
delete student.name;         // ❌ Not allowed

// Step 6: Display final object
console.log("After Seal Attempt:", student);

// Step 7: Check if sealed
console.log("Is object sealed?", Object.isSealed(student));
