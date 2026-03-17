// Arrow function to check prime
const prompt = require("prompt-sync") ();
const num=Number(prompt("Enter a number:"));
const isPrime = num => {
    if (num <= 1) {
        console.log(num + " is Not a Prime Number");
        return;
    }

    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            console.log(num + " is Not a Prime Number");
            return;
        }
    }

    console.log(num + " is a Prime Number");
};
isPrime(num);
