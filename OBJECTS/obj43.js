//remove fields before stringifying
const student = {
  name: "Riya",
  age: 21,
  password: "12345"
};

delete student.password;

const jsonData = JSON.stringify(student);

console.log(jsonData);