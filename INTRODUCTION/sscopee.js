// ================= GLOBAL SCOPE =================
let a = 100;
var x = 1;

console.log("Global a:", a);
console.log("Global x:", x);


// ================= BLOCK SCOPE =================
if (true) {
    let a = 10;          // shadowing
    const b = 20;
    var c = 30;          // not block scoped

    console.log("Inner a:", a); // 10
    console.log("b:", b);
}

console.log("Outer a:", a); // 100
// console.log(b); // ❌ block scope error
console.log("c:", c);       // 30


// ================= FUNCTION SCOPE (var) =================
function testVar() {
    var y = 50;
    if (true) {
        var y = 60; // SAME variable
        console.log("Inside if y:", y); // 60
    }
    console.log("Inside function y:", y); // 60
}
testVar();
// console.log(y); // ❌ function scope


// ================= LEXICAL (NESTED) SCOPE =================
function parent() {
    const username = "Swayam";

    function child() {
        const id = 99;
        console.log(username); // accessible
        console.log(id);
    }

    // console.log(id); // ❌
    child();
}
parent();


// ================= TEMPORAL DEAD ZONE =================
// console.log(tdzVar); // ❌ ReferenceError
let tdzVar = 10;
console.log("TDZ var:", tdzVar);


// ================= HOISTING =================
console.log(add1(5)); // ✅ works
function add1(num) {
    return num + 1;
}

// console.log(add2(5)); // ❌ not hoisted
const add2 = function (num) {
    return num + 2;
};
console.log(add2(5)); // 7
