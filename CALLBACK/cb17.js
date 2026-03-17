/*create a student marks and grades system that throws invalid if_  marks <0 or >100 and
 displays grade otherwise.*/
 function checkMarks(marks) {
  try {
    if (marks < 0 || marks > 100) {
      throw "Invalid Marks";
    }
    let grade;
    if (marks >= 90) grade = "A";
    else if (marks >= 75) grade = "B";
    else if (marks >= 50) grade = "C";
    else grade = "F";
    console.log("Grade:", grade);
  } 
  catch (error) {
    console.log("Error:", error);
  }
}
checkMarks(85);
checkMarks(105);
checkMarks(-5);