function power(x, n) {
    if (n === 0) {
        return 1;           // Base case
    }
    return x * power(x, n - 1);  // Recursive call
}

console.log(power(2, 3)); // 8
