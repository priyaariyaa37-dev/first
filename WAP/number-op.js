const prompt = require('prompt-sync') ();
let a = Number(prompt("Enter first number"));
let b = Number(prompt("Enter second number"));
let op = prompt("Enter operator (+, -, *, /)");

if (op == "+") {
  console.log(a + b);
} 
else if (op == "-") {
  console.log(a - b);
} 
else if (op == "*") {
  console.log(a * b);
} 
else if (op == "/") {
  console.log(a / b);
} 
else {
  console.log("Invalid operator");
}
