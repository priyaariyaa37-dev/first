const prompt= require("prompt-sync") ();
const num1 = Number(prompt("Enter no.1:"));
const num2 = Number(prompt("Enter no2:"));
  const large=(num1,num2)=>
    {
if (num1 > num2)
{
    console.log(num1 + "is greater");
}
else
    {
        console.log(num2 + "is greater");
    }
};
large(num1,num2);
