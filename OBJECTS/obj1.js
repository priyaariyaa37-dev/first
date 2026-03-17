//object literals
const fruits = {
F1: "Apple",
F2: "Orange",
F3: "Pineapple"
};
console.log("complete object:", fruits);
//accessing properties
console.log("F2 locator:", fruits.F2);
//modifying
fruits.timeout=5000;  //adding new field
console.log("Updated object:", fruits.timeout);
console.log("New object:", fruits);


//object constructor
const testuser= new Object();
testuser.name= "Student";
testuser.role="Tester";
console.log("Constructor Object:", testuser);
console.log("Constructor Object:", testuser.role);


//object.create()
const baseconfig = {browser: "chrome"};
const runconfig = Object.create(baseconfig);
runconfig.headless=true;
console.log("Prototype property:", runconfig.browser);
console.log("Own property:", runconfig.headless);



