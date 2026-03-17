/*
 JavaScript has 7 primitive data types:
 1. Number
 2. String
 3. Boolean
 4. Undefined
 5. Null
 6. BigInt
 7. Symbol

 Primitive data types store a single value and are immutable.
*/

// ---------------- NUMBER ----------------
// Used for integers and floating-point values
let age = 22;
let price = 99.99;

console.log("Number Data Type:");
console.log("Age:", age);
console.log("Price:", price);
console.log("Type of age:", typeof age);
console.log("---------------------------");

// ---------------- STRING ----------------
// Used to store text (characters)
let name = "Riya";
let course = "Biotechnology";

console.log("String Data Type:");
console.log("Name:", name);
console.log("Course:", course);
console.log("Type of name:", typeof name);
console.log("---------------------------");

// ---------------- BOOLEAN ----------------
// Used for true / false values
let isStudent = true;
let isEmployed = false;

console.log("Boolean Data Type:");
console.log("Is Student:", isStudent);
console.log("Is Employed:", isEmployed);
console.log("Type of isStudent:", typeof isStudent);
console.log("---------------------------");

// ---------------- UNDEFINED ----------------
// Variable declared but not assigned a value
let result;

console.log("Undefined Data Type:");
console.log("Result:", result);
console.log("Type of result:", typeof result);
console.log("---------------------------");

// ---------------- NULL ----------------
// Represents intentional empty value
let data = null;

console.log("Null Data Type:");
console.log("Data:", data);
console.log("Type of data:", typeof data); // Note: shows 'object' (JS bug)
console.log("---------------------------");

// ---------------- BIGINT ----------------
// Used for very large integers
let bigNumber = 123456789012345678901234567890n;

console.log("BigInt Data Type:");
console.log("Big Number:", bigNumber);
console.log("Type of bigNumber:", typeof bigNumber);
console.log("---------------------------");

// ---------------- SYMBOL ----------------
// Used to create unique identifiers
let id = Symbol("userId");

console.log("Symbol Data Type:");
console.log("Symbol value:", id);
console.log("Type of id:", typeof id);
console.log("---------------------------");

// ---------------- SUMMARY ----------------
console.log("All primitive data types demonstrated successfully!");
