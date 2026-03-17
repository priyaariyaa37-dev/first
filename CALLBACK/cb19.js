/*create a course enrollment system where a student enrolls in an exception 
if the course is full or the student is already enrolled.*/
let students = ["Riya", "Aman"];
let maxSeats = 2;
function enrollStudent(name) {
  try {
    if (students.includes(name)) {
      throw "Student already enrolled";
    }
    if (students.length >= maxSeats) {
      throw "Course is full";
    }
    students.push(name);
    console.log(name + " enrolled successfully");
  } 
  catch (error) {
    console.log("Error:", error);
  }
}
enrollStudent("Riya");  
enrollStudent("Priya"); 