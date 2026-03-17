// ===== var (function scoped + hoisting) =====
var x = 10;
var x = 20;   // re-declaration allowed

function demoVar() {
    if (true) {
        console.log(x); // 20 (not block scoped)
    }
    console.log(x);     // 20 (function scoped)
}

demoVar();
console.log(x);         // 20 (global scope)


// ===== let (block scoped) =====
let y = 5;
y = 15;      // re-assignment allowed

function demoLet() {
    if (true) {
        let z = 50;
        console.log(z); // 50
    }
    // console.log(z); // ❌ Error (block scoped)
    console.log(y);     // 15
}

demoLet();


// ===== const (block scoped + no re-assignment) =====
const p = 100;

function demoConst() {
    if (true) {
        const q = 200;
        console.log(q); // 200
    }
    // console.log(q); // ❌ Error (block scoped)
    console.log(p);     // 100
}

demoConst();


// ===== Hoisting =====
console.log(a); // undefined (var is hoisted)
var a = 30;

// console.log(b); // ❌ Error (let not accessible before declaration)
let b;
console.log(b); // undefined