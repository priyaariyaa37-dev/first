const prompt = require("prompt-sync")();
let num = Number(prompt("Enter a number: "));
let digits = num.toString().length;
console.log("The number of digits in " + num + " is: " + digits);