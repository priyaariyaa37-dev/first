//find property with highest numeric value
// Object with numeric values
const scores = {
    math: 85,
    science: 92,
    english: 78,
    computer: 95
};

let highestKey = null;
let highestValue = -Infinity;

for (let key in scores) {
    if (typeof scores[key] === "number" && scores[key] > highestValue) {
        highestValue = scores[key];
        highestKey = key;
    }
}

console.log("Highest Property:", highestKey);
console.log("Highest Value:", highestValue);
