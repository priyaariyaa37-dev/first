function addNumbers(a, b, c) 
{
    return a + b + c;
}

const numbers = [10, 20, 30];

// Using spread operator
let result = addNumbers(...numbers);

console.log("Sum:", result);


