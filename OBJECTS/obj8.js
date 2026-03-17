let student = {
    name: "Riya",
    age: 20,
    course: "BCA",
    city: "Amritsar"
};

let count = 0;

for (let key in student) {
    count++;
}

console.log("Number of keys:", count);
