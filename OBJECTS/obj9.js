//method 1
let student = {
    name: "Riya",
    age: 20,
    course: "BCA"
};

let keyToCheck = "age";

if (keyToCheck in student) {
    console.log("Key exists");
} else {
    console.log("Key does not exist");
}

//method 2
let student1 = {
    name: "Riya",
    age: 20,
    course: "BCA"
};

let keyToChecks = "city";

if (student1.hasOwnProperty(keyToChecks)) {
    console.log("Key exists");
} else {
    console.log("Key does not exist");
}
