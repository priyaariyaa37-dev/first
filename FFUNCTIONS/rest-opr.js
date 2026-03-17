//rest operator
function printStudent(name, ...marks) 
{
    console.log("Student Name:", name);
    console.log("Marks:", marks);
    let total = 0;
    for (let i = 0; i < marks.length; i++) 
    {
        total += marks[i];
    }
    console.log("Total Marks:", total);
}
printStudent("Riya", 85, 90, 78, 92);
printStudent("Aman", 70, 88);
