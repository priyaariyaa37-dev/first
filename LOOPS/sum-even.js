const prompt =require ('prompt-sync')();
let n = Number(prompt("Enter a number: "));
let sum = 0;
for (let i = 1; i <= n; i++)
{
    if (i % 2 === 0)
    {
        sum = sum + i;
    }
}
console.log("Sum of even numbers from 1 to " + n + " is: " + sum);