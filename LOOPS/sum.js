const prompt = require('prompt-sync') ();
let num = Number(prompt("Enter a number: "));
let sum = 0;
for (let i = 1; i <= num; i++)
{
sum= sum+i;
}
console.log("The sum of first " + num + " natural numbers is: " + sum);
