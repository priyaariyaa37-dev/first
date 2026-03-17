// Take input from user
const prompt = require('prompt-sync') ();
let num = Number(prompt("Enter a num: "));
if(num % 2 === 0 && num > 10 && num < 50)
{
    console.log(num + " is an even number between 10 and 50");
}
else
    {
        console.log(num + " is not an even number between 10 and 50");
    }
