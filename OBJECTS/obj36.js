//sort object by values
const scores = {
    math: 85,
    science: 92,
    english: 78,
    computer: 95
};

// Sort by values (ascending)
const sorted = Object.fromEntries(
    Object.entries(scores).sort((a, b) => a[1] - b[1])
);

console.log(sorted);

// codes 21 to 30 are left