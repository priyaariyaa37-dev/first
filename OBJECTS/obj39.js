//rename variables during destructuring
const student = {
  name: "Riya",
  age: 21,
  course: "BSc Biotechnology"
};

const { name: studentName, age: studentAge } = student;

console.log(studentName); // Riya
console.log(studentAge);  // 21