//sort array of objects by age
const users = [
  { name: "Riya", age: 21 },
  { name: "Amit", age: 25 },
  { name: "Sneha", age: 19 },
  { name: "Rahul", age: 23 }
];

users.sort(function(a, b) {
  return a.age - b.age;   // ascending order
});

console.log(users);