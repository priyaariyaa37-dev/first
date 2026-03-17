//destructure nested object
const student = {
  id: 101,
  info: {
    name: "Riya",
    age: 21,
    course: "BSc Biotechnology"
  }
};

const { info: { name, age, course } } = student;

console.log(name);   // Riya
console.log(age);    // 21
console.log(course); // BSc Biotechnology