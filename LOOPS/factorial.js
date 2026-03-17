const prompt = require('prompt-sync') ();
let num = Number(prompt("Enter a number: "));
let factorial = 1;
for (let i = 1; i <= num; i++)
{
    factorial = factorial * i;
}
console.log("The factorial of " + num + " is: " + factorial);