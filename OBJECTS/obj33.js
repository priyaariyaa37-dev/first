//find duplicate values
const data = {
    a: "apple",
    b: "banana",
    c: "apple",
    d: "orange",
    e: "banana"
};

const seen = {};
const duplicates = [];

for (let key in data) {
    let value = data[key];

    if (seen[value]) {
        if (!duplicates.includes(value)) {
            duplicates.push(value);
        }
    } else {
        seen[value] = 1;
    }
}

console.log("Duplicate values:", duplicates);