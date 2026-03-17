const prompt = require('prompt-sync') ();
let num = Number(prompt("Enter a number: "));
if(num>0)
{
    console.log("The number is positive");
}
else if(num<0)
{
    console.log("The number is negative");
}
else
{
    console.log("The number is zero");
}