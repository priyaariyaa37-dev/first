// Step 1: Create objects
let obj1 = {
    name: "Riya",
    age: 20,
    city: "Amritsar"
};

let obj2 = {
    age: 25,
    course: "BCA"
};

// Step 2: Merge but override specific property manually
let merged = {
    ...obj1,
    ...obj2,
    age: 30   // Force override age
};

console.log("Merged Object:", merged);
