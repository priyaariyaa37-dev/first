//deep clone object using JSON
const student = {
  name: "Riya",
  age: 21,
  address: {
    city: "Delhi"
  }
};

const clone = JSON.parse(JSON.stringify(student));

clone.address.city = "Mumbai";

console.log(student.address.city); // Delhi
console.log(clone.address.city);   // Mumbai