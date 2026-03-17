//use default values in destructuring
const student = {
  name: "Riya",
  age: 21
};

const { name, age, city = "Amritsar" } = student;

console.log(name); // Riya
console.log(age);  // 21
console.log(city); // Amritsar (default value)