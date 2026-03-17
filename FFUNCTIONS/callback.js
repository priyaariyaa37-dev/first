function operate(a, b, operation) {
    return operation(a, b);
}

// Callback functions
function add(x, y) {
    return x + y;
}

function multiply(x, y) {
    return x * y;
}

console.log(operate(5, 3, add));       // 8
console.log(operate(5, 3, multiply));  // 15
