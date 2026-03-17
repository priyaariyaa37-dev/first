const prompt = require ("prompt-sync") ();
let num=Number(prompt("Enter a number:"));
const cube =num=>
{
    return num*num*num;
}
console.log(cube(num));
