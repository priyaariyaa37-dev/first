const prompt = require("prompt-sync")();
let num = Number(prompt("Enter a number: "));
let temp = num;
let digits = num.toString().length;
let sum = 0;

while (temp > 0) {
    let digit = temp % 10;
    sum += digit ** digits;
    temp = Math.floor(temp / 10);
}

if (sum === num) {
    console.log(num + " is an Armstrong number");
} else {
    console.log(num + " is not an Armstrong number");
}
