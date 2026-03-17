//print hollow diamond pattern
//Print a pyramid pattern
const prompt = require("prompt-sync")();
let n = Number (prompt ("Enter number of rows: "));
for (let i=1; i<=n; i++)
{
  for (let j=1; j<=n-i; j++)
    {
       process.stdout.write(" ");
    }
  for (let k=1; k<=2*i-1; k++)
  {
    if(k===1 || k===2*i-1)
    {
       process.stdout.write("*");
    }
    else
        {
       process.stdout.write(" ");
        }
    }
process.stdout.write("\n");
}

//Print an inverted pyramid pattern
for (let i=n-1; i>=1; i--)
{
  for (let j=1; j<=n-i; j++)
    {
       process.stdout.write(" ");
    }
  for (let k=1; k<=2*i-1; k++)
  {
    if (k===1 || k===2*i-1)
    {
       process.stdout.write("*");
   }
 else
    {
   process.stdout.write(" ");
    }
}
process.stdout.write("\n");
}
