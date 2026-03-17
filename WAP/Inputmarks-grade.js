// Take input from user
const prompt = require('prompt-sync') ();
let marks = Number(prompt("Enter your marks: "));
if(marks >= 90 && marks <= 100) 
{
    console.log("Grade: A");
}
else if( marks >= 80 && marks < 90) 
{
    console,log("Grade: B");
}
else if( marks >= 70 && marks < 80) 
{
    console.log("Grade: C");
}           
else
{
    console.log("Grade: F");
}