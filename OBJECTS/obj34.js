//compare two objects for equality
const obj1 = {
    name: "Riya",
    city: "Amritsar"
};

const obj2 = {
    name: "Riya",
    city: "Amritsar"
};

function isEqual(o1, o2) {
    const keys1 = Object.keys(o1);
    const keys2 = Object.keys(o2);

    if (keys1.length !== keys2.length) {
        return false;
    }

    for (let key of keys1) {
        if (o1[key] !== o2[key]) {
            return false;
        }
    }

    return true;
}

console.log(isEqual(obj1, obj2));  // true