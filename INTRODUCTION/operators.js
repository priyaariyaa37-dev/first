// Arithmetic Operators
console.log("--- Arithmetic Operators ---");
console.log(10 + 5);   // Addition: 15
console.log(10 - 5);   // Subtraction: 5
console.log(10 * 5);   // Multiplication: 50
console.log(10 / 5);   // Division: 2
console.log(10 % 3);   // Modulus: 1
console.log(2 ** 3);   // Exponentiation: 8

// Assignment Operators
console.log("--- Assignment Operators ---");
let x = 10;
x += 5;   // x = 15
x -= 3;   // x = 12
x *= 2;   // x = 24
x /= 4;   // x = 6
x %= 4;   // x = 2

// Comparison Operators
console.log("--- Comparison Operators ---");
console.log(5 == "5");    // true (value equal)
console.log(5 === "5");   // false (strict equal)
console.log(5 != "5");    // false
console.log(5 !== "5");   // true
console.log(5 > 3);       // true
console.log(5 < 3);       // false
console.log(5 >= 5);      // true
console.log(5 <= 3);      // false

// Logical Operators
console.log("--- Logical Operators ---");
console.log(true && false);   // AND: false
console.log(true || false);   // OR: true
console.log(!true);           // NOT: false

// Ternary Operator
console.log("--- Ternary Operator ---");
let age = 20;
console.log(age >= 18 ? "Adult" : "Minor");  // Adult

// Bitwise Operators
console.log("--- Bitwise Operators ---");
console.log(5 & 3);   // AND: 1
console.log(5 | 3);   // OR: 7
console.log(5 ^ 3);   // XOR: 6
console.log(~5);      // NOT: -6
console.log(5 << 1);  // Left shift: 10
console.log(5 >> 1);  // Right shift: 2

// String Operators
console.log("--- String Operators ---");
console.log("Hello" + " " + "World");  // Concatenation
console.log("5" + 5);                   // Type coercion: "55"