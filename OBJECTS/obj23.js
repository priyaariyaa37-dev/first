//nested employe object with address
// Creating a nested employee object
const employee = {
    id: 101,
    name: "Riya Sharma",
    position: "Software Tester",
    salary: 50000,
    
    // Nested object
    address: {
        houseNo: "23A",
        street: "MG Road",
        city: "Amritsar",
        state: "Punjab",
        pincode: 143001
    }
};

// Accessing values
console.log(employee.name);                // Riya Sharma
console.log(employee.address.city);       // Amritsar
console.log(employee.address.pincode);    // 143001