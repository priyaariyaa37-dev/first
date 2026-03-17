//inverted number triangle
const prompt = require("prompt-sync")();
let n = Number(prompt("Enter number of rows: "));

for (let i = n; i >= 1; i--)   // rows
{      
    for (let j = 1; j <= i; j++)   // columns
    {
        process.stdout.write(j + " ");
    }
    process.stdout.write("\n");
}
