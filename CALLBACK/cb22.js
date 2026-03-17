/* Create a student class with name, rollNo, and marks[] with methods calculateTotal(),
calculateAverage(), and displayGrade() */
class Student {                               
  constructor(name, rollNo, marks) {
    this.name = name;
    this.rollNo = rollNo;
    this.marks = marks;
  }                                            
  calculateTotal() {
    let total = 0;
    for (let i = 0; i < this.marks.length; i++) {
      total += this.marks[i];
    }
    return total;
  }
  calculateAverage() {
    let total = this.calculateTotal();
    return total / this.marks.length;
  }
  displayGrade() {
    let avg = this.calculateAverage();
    let grade;
    if (avg >= 90) {
      grade = "A";
    } else if (avg >= 75) {
      grade = "B";
    } else if (avg >= 60) {
      grade = "C";
    } else if (avg >= 50) {
      grade = "D";
    } else {
      grade = "F";
    }
    console.log("Name:", this.name);
    console.log("Roll No:", this.rollNo);
    console.log("Total Marks:", this.calculateTotal());
    console.log("Average Marks:", avg);
    console.log("Grade:", grade);
  }
}
// Create object
let student1 = new Student("Riya", 101, [85, 90, 78, 88, 92]);
// Call method
student1.displayGrade();
