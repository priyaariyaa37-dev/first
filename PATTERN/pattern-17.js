//binary triangle-1
const prompt = require("prompt-sync")();
let n = Number(prompt("Enter the number of rows: "));
for (let i=1; i<=n; i++)     //rows
{
    for (let j=1; j<=i; j++)   //coloumns 
    {
    process.stdout.write("1");
                process.stdout.write("0");
    }
            process.stdout.write("\n");
}

