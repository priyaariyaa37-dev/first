//convert object values to uppercase
const user = {
    name: "riya",
    city: "amritsar",
    role: "tester"
};

for (let key in user) {
    user[key] = user[key].toUpperCase();
}

console.log(user);