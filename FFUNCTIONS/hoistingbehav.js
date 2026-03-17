// Calling the function before declaration
greet();

function greet() {
    console.log("Hello, this is function declaration.");
}


// Calling before declaration
sayHello();   // ❌ Error

var sayHello = function() {
    console.log("Hello, this is function expression.");
};
