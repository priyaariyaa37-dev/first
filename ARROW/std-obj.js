// Arrow function that returns a student object
const createStudent = (name, age, grade) => 
{
    return   {
        name: name,
        age: age,
        grade: grade
    };
};                                                   // Calling the function
const student1 = createStudent("Riya", 20, "A");
console.log(student1);                               // Printing the object


