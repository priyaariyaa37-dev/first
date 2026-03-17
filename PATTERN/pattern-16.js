//10101
//10101
const prompt = require("prompt-sync")();
let n = parseInt(prompt("Enter the number of rows: "));
for (let i = 1; i <= n; i++)     //rows
{
    for (let j = 1; j <=n ; j++)   //coloumns 
    {
        if (j%2===0)
        {
        process.stdout.write("0");
        }
        else
        {
        process.stdout.write("1");
        }
    }
    process.stdout.write("\n");
}


