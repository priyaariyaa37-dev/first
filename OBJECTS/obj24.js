//update deeply nested property
const employee = {
    id: 101,
    name: "Riya Sharma",
    address: {
        city: "Amritsar",
        location: {
            area: "Model Town",
            pincode: 143001
        }
    }
};

// Updating deeply nested property
employee.address.location.pincode = 160055;

console.log(employee.address.location.pincode); 
// Output: 160055