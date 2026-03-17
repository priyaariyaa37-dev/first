const prompt = require ('prompt-sync')();
let n = Number(prompt("Enter a number: "));
let prime = n > 1;

for (let i = 2; i < n; i++) {
  if (n % i === 0) {
    prime = false;
    break;
  }
}

if (prime) {
  console.log(n + " is a prime number.");
} else {
  console.log(n + " is not a prime number.");
}