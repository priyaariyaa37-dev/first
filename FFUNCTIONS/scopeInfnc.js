// Global variable
let globalMessage = "I am Global";

function showScope() {
    // Local variable
    let localMessage = "I am Local";

    console.log(globalMessage); // Accessible
    console.log(localMessage);  // Accessible
}

showScope();

console.log(globalMessage); // Accessible
console.log(localMessage);  // Error (not accessible outside function)
