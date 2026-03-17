// Step 1: Create Object
let student = {
    name: "Riya",
    age: 20,
    course: "BCA"
};

console.log("Original Object:");
console.log(student);

// Step 2: Add Property Dynamically
student.city = "Amritsar";
student["grade"] = "A";

console.log("\nAfter Adding Properties:");
console.log(student);

// Step 3: Delete Property
delete student.city;

console.log("\nAfter Deleting 'city' Property:");
console.log(student);

// Step 4: Verify Removal
console.log("\nIs 'city' present?", "city" in student);

// Step 5: Display All Properties Dynamically
console.log("\nFinal Object Properties:");
for (let key in student) {
    console.log(key + " : " + student[key]);
}
