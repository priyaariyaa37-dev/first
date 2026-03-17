//count frequency of values in object
const data = {
    a: "apple",
    b: "banana",
    c: "apple",
    d: "orange",
    e: "banana"
};

const frequency = {};

for (let key in data) {
    let value = data[key];

    if (frequency[value]) {
        frequency[value]++;
    } else {
        frequency[value] = 1;
    }
}

console.log(frequency);