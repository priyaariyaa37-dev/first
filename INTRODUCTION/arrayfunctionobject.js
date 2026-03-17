// ===== Array, Object, Function =====
let numbers = [10, 20, 30];
let person = { name: "Swayam", age: 21 };
function greet() {
    return "Hello";
}

// Checking array
console.log(Array.isArray(numbers)); // true
console.log(Array.isArray(person));  // false

// typeof
console.log(typeof numbers); // object
console.log(typeof person);  // object
console.log(typeof greet);   // function


// ===== Why array is object =====
// Array stores values like key-value pairs
// 0:10, 1:20, 2:30


// ===== Implicit Type Conversion =====
console.log("a" + "b");   // ab
console.log("a" + 1);     // a1
console.log(5 + "5");     // 55
console.log(10 - "2");    // 8
console.log("a" - 5);     // NaN

console.log("1" == 1);    // true
console.log("1" === 1);   // false

console.log(typeof ("a" - 5)); // number (NaN)


// ===== Explicit Type Conversion =====
console.log(Number("100"));   // 100
console.log(Number("abc"));   // NaN
console.log(parseInt("20"));  // 20
console.log(String(500));     // "500"
console.log((123).toString()); // "123"


// ===== Object Reassignment =====
let student = { name: "Swayam", id: 21 };

student = { 
    class: 10, 
    city: "Delhi" 
};

console.log(student);