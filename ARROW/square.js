const prompt = require("prompt-sync") ();
const a = Number(prompt("Enter a number"));
const check =a=> 
{
    return a*a;
}
console.log(check(a));