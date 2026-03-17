//merge nested structure
// Object 1
const emp1 = {
    id: 101,
    name: "Riya",
    address: {
        city: "Amritsar",
        state: "Punjab"
    }
};

// Object 2
const emp2 = {
    salary: 50000,
    address: {
        pincode: 143001,
        country: "India"
    }
};

// Merging nested structure
const mergedEmployee = {
    ...emp1,
    ...emp2,
    address: {
        ...emp1.address,
        ...emp2.address
    }
};

console.log(mergedEmployee);