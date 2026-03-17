function calculateSimpleInterest(principal, time, rate) 
{
    let simpleInterest = (principal * rate * time) / 100;
    return simpleInterest;
}

// Example usage
let result = calculateSimpleInterest(1000, 2, 5);  
console.log("Simple Interest is: " + result);


