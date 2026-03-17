console.log("=== NON-PRIMITIVE DATA TYPES IN JAVASCRIPT ===");

// 1. Object
let student = {
  name: "Riya",
  age: 22,
  course: "Biotech"
};
console.log("\nObject:");
console.log(student);
console.log(student.name);

// 2. Array
let subjects = ["Math", "Physics", "Biology"];
console.log("\nArray:");
console.log(subjects);
console.log(subjects[1]);

// 3. Function
function greet(name) {
  return "Hello " + name;
}
console.log("\nFunction:");
console.log(greet("Riya"));

// 4. Date
let today = new Date();
console.log("\nDate:");
console.log(today);

// 5. Regular Expression (RegExp)
let pattern = /java/i;
console.log("\nRegExp:");
console.log(pattern.test("JavaScript")); // true

// 6. Map
let map = new Map();
map.set("id", 101);
map.set("name", "Riya");
console.log("\nMap:");
console.log(map);
console.log(map.get("name"));

// 7. Set
let set = new Set([1, 2, 2, 3, 4]);
console.log("\nSet:");
console.log(set);

// 8. Array of Objects (combined example)
let employees = [
  { name: "Asha", role: "Tester" },
  { name: "Riya", role: "Developer" }
];
console.log("\nArray of Objects:");
console.log(employees);

console.log("\n=== END OF PROGRAM ===");
