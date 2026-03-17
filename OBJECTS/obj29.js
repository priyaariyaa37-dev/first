//filter object based on condition
// Original object
const scores = {
    math: 85,
    science: 92,
    english: 78,
    computer: 95
};

// Filter: keep values greater than 80
const filtered = Object.fromEntries(
    Object.entries(scores).filter(([key, value]) => value > 80)
);

console.log(filtered);