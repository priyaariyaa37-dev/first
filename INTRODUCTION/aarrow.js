// ================= OBJECT & this =================
const user = {
    name: "Ravneet",
    id: 4,

    welcomeMessage: function () {
        console.log(`${this.name}, welcome to the website`);
        console.log(this); // refers to user object
    }
};

user.welcomeMessage();

user.name = "RAKHI";
user.welcomeMessage();


// ================= GLOBAL this =================
console.log(this);
// Node.js → {}
// Browser → window


// ================= REGULAR FUNCTION =================
function one() {
    let name = "Ravneet";
    console.log(this.name); 
    // undefined because:
    // this → global object
    // name → local variable, not a property of global object
}
one();


// ================= ARROW FUNCTION =================
const chai = () => {
    let name2 = "Ravneet Kaur";
    console.log(this.name2);
    // undefined because arrow functions
    // do NOT have their own `this`
};
chai();


// ================= ARROW FUNCTION SYNTAX =================

// Normal arrow function
const add2 = (n1, n2) => {
    console.log(n1 + n2); // 5
};
add2(2, 3);

// Implicit return (one-line arrow function)
const add3 = (n1, n2, n3) => n1 + n2 + n3;
console.log(add3(2, 3, 4)); // 9

/*This code demonstrates how the this keyword behaves
differently in objects, regular functions, arrow functions, 
and different environments (Node vs Browser), along with arrow
function syntax and implicit return.*/
