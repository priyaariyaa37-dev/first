let student = {
    name:"ravneet",
    age:23,
    course: "btech"
};

student.city = "Amritsar";   // Adding new property
student["grade"] = "A";          // Another way
    
for (let key in student) {
    console.log(key + " : " + student[key]);
}
