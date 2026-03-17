//extract array inside object
const student = {
  name: "Riya",
  subjects: ["Physics", "Chemistry", "Biology"]
};

const { name, subjects } = student;
console.log(name);      // Riya
console.log(subjects);  // ["Physics", "Chemistry", "Biology"]

const { subjects: [firstSubject, secondSubject] } = student;
console.log(firstSubject);  // Physics
console.log(secondSubject); // Chemistry
