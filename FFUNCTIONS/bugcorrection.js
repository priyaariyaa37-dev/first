// Correct way to use arguments in an arrow function
const sum = (...args) => {
    let total = 0;

    for (let i = 0; i < args.length; i++) {
        total += args[i];
    }

    return total;
};

console.log(sum(10, 20, 30));  // Output: 60
