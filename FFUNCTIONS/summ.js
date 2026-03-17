function sum() 
{
    let total = 0;
    for (let i = 0; i < arguments.length; i++) 
    {
    total = total + arguments[i];
    }
    return total;
}
console.log(sum(1, 2, 3));        // 6
console.log(sum(10, 20, 30, 40)); // 100
console.log(sum());               // 0

