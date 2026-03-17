const prompt = require("prompt-sync")();
let a = Number(prompt("Enter first number: "));
let b = Number(prompt("Enter second number: "));
console.log("Before swapping: a = " + a + ", b = " + b);        
a=a+b;
b=a-b;
a=a-b;
console.log("After swapping: a = " + a + ", b = " + b);