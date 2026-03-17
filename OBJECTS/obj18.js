let obj1 = {
    name: "Riya",
    age: 20,
    city: "Amritsar"
};

let obj2 = {
    age: 25,
    course: "BCA"
};

// Merge objects
let merged = { ...obj1, ...obj2 };

console.log(merged);
