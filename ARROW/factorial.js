//factorial of a number
const prompt = require("prompt-sync") ();
const num= Number(prompt("Enter a number: "));
const fact=num=>
{
if(num===0 || num===1)
    {
        return 1;
    }
else
    {
        return num*fact(num-1);
    }        
};
console.log(fact(num));
