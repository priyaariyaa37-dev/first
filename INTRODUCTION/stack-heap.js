//stack-priitive type
let a = 10;
let b = a;   // value is copied

b = 20;

console.log(a); // 10
console.log(b); // 20


//heap-non primitive type
let student1 = {
  name: "Riya",
  marks: 90
};

let student2 = student1; // reference is copied

student2.marks = 75;

console.log(student1.marks); // 75
console.log(student2.marks); // 75


//heap using array
let arr1 = [1, 2, 3];
let arr2 = arr1;

arr2.push(4);

console.log(arr1); // [1, 2, 3, 4]
console.log(arr2); // [1, 2, 3, 4]


//how to avoid heap reference issue 
let user1 = { city: "Delhi" };
let user2 = { ...user1 }; // creates a new copy

user2.city = "Mumbai";

console.log(user1.city); // Delhi
console.log(user2.city); // Mumbai
