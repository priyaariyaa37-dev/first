//fixed value
const check =a=> 
{
    if (a%2===0)
    {
console.log(a+ "is even");
    }
    else
    {
console.log(a+ "is odd");
    }
};
check(9);

//user input
const prompt = require("prompt-sync") ();
const a = Number(prompt("Enter a number"));
const check =a=> 
{
    if (a%2===0)
    {
console.log(a+"is even");
    }
    else
    {
console.log(a+"is odd");
    }
};
check(a);
