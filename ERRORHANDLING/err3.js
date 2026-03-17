//return
function divide(a, b) {
    try {
        if (b === 0) {
            throw new Error("Cannot divide by zero");
        }
        return a / b;   // return from try
    }
    catch (error) {
        return error.message;   // return from catch
    }
    finally {
        console.log("Division process completed.");
    }
}
console.log(divide(10, 2));  
console.log(divide(10, 0));