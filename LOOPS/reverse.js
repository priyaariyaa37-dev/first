const prompt = require('prompt-sync') ();
let num = parseInt(prompt("Enter a number: "));
let reverse = 0;
while (num > 0) 
{
    let digit = num % 10;
    reverse = reverse * 10 + digit;
    num = Math.floor(num / 10);
}
console.log("Reversed number:", reverse);
