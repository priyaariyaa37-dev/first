//create an object from array
const arr = ["apple", "banana", "mango"];

const obj = {};

arr.forEach(function(value, index) {
    obj[index] = value;
});

console.log(obj);