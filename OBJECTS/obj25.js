//safely access nested values(optional chaining)
const employee = {
    id: 101,
    name: "Riya",
    address: {
        city: "Amritsar",
        location: {
            area: "Model Town",
            pincode: 143001
        }
    }
};

// Safely accessing existing property
console.log("Pincode:", employee.address?.location?.pincode);

// Safely accessing non-existing property (no error)
console.log("Country Code:", employee.address?.country?.code);

// Using default value with nullish coalescing
console.log("Country Code with default:", employee.address?.country?.code ?? "Not Available");

// Example when address is missing
const emp2 = {
    id: 102,
    name: "Simran"
};

console.log("Emp2 City:", emp2.address?.city ?? "Address not provided");