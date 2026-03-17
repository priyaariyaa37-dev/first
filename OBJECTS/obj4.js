//OBJECT METHODS (JSON)
//spread operator
let arr1 = [1, 2, 3];
let arr2 = [...arr1];
console.log(arr2);

//copy object
let obj1 = { name: "Riya", age: 20 };
let obj2 = { ...obj1 };
console.log(obj2);

//merge object
let obj01 = { name: "Ria" };
let obj02 = { age: 60 };
let merged = { ...obj1, ...obj2 };
console.log(merged);

//passing arguments
function add(a, b, c) 
{
  console.log(a + b + c);
}
let numbers = [10, 20, 30];
add(...numbers);

//template literals
let name = "Riya";
let age = 20;
console.log(`My name is ${name} and I am ${age} years old.`);
