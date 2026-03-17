//find missing keys compared to another object
const obj1 = {
    name: "Riya",
    city: "Amritsar",
    age: 22
};

const obj2 = {
    name: "Riya"
};

const missingKeys = [];

for (let key in obj1) {
    if (!(key in obj2)) {
        missingKeys.push(key);
    }
}

console.log("Missing keys in obj2:", missingKeys);
