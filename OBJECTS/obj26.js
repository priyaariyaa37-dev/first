//flatten one level nested object
// Nested object
const employee = {
    id: 101,
    name: "Riya",
    address: {
        city: "Amritsar",
        state: "Punjab"
    }
};

// Flattening (one level)
const { address, ...rest } = employee;
const flatEmployee = { ...rest, ...address };

console.log(flatEmployee);