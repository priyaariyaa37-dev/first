//binary triangle-2
const prompt = require("prompt-sync")();
let n = Number(prompt("Enter the number of rows: "));
for (let i=1; i<=n; i++)     //rows
{
    for (let j=1; j<=i; j++)   //coloumns 
    {
    process.stdout.write((i + j) % 2 === 0 ? "1" : "0");
    }
            process.stdout.write("\n");
}

