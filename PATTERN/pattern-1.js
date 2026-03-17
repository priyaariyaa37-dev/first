//right angled triangle
const prompt = require("prompt-sync")();
let n = parseInt(prompt("Enter the number of rows: "));
for (let i = 1; i <= n; i++)     //rows
{
    for (let j = 1; j <=i ; j++)   //coloumns 
    {
    process.stdout.write("*");
    }
    process.stdout.write("\n");
}


