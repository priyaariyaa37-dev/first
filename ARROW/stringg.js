//input a string and reverse it
const prompt = require ("prompt-sync") ();
const a = prompt("Enter a string: ");
const neufnc=a=>
a.split("").reverse().join("");
console.log(neufnc(a));
