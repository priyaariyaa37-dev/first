const username= "Ravneet Kaur";
const password= 12345

const prompt = require('prompt-sync') ();
let user= prompt("Enter username: ");
let pass = Number(prompt("Enter password: "));

if(user === username && pass === password)
{
    console.log("Login successful");
}
else
{
    console.log("Invalid username or password");
}