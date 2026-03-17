//deep copy (changes are not reflected to orignal)
// Step 1: Create object with nested object
let student1 = {
    name: "Riya",
    age: 20,
    address: {
        city: "Amritsar",
        pincode: 143001
    }
};

console.log("Original student1:");
console.log(student1);

// Step 2: Create deep copy
let student2 = JSON.parse(JSON.stringify(student1));

console.log("\nDeep copied student2:");
console.log(student2);

// Step 3: Modify nested value in copied object
student2.address.city = "Delhi";

console.log("\nAfter modifying nested value in student2:");
console.log("student1:", student1);
console.log("student2:", student2);

// Step 4: Verify reference
console.log("\nAre nested objects same reference?");
console.log(student1.address === student2.address);  // false
