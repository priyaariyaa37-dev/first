console.log("=== OBJECT OPERATIONS IN JAVASCRIPT ===");

// 1. Creating an object
let user = {
    name: "Riya",
    age: 21,
    email: "riya@example.com",
    isStudent: true
};

console.log("\nOriginal Object:", user);

// 2. Accessing properties
console.log("\n--- Accessing Properties ---");
console.log("Name (dot):", user.name);
console.log("Age (bracket):", user["age"]);

// 3. Adding new properties
console.log("\n--- Adding Properties ---");
user.city = "Delhi";
user["country"] = "India";
console.log(user);

// 4. Updating properties
console.log("\n--- Updating Properties ---");
user.age = 22;
user.email = "riya.k@example.com";
console.log(user);

// 5. Deleting properties
console.log("\n--- Deleting Properties ---");
delete user.isStudent;
console.log(user);

// 6. Checking property existence
console.log("\n--- Property Check ---");
console.log("name in user:", "name" in user);
console.log("gender in user:", "gender" in user);
console.log("hasOwnProperty('age'):", user.hasOwnProperty("age"));

// 7. Looping through object
console.log("\n--- Looping (for...in) ---");
for (let key in user) {
    console.log(key + ":", user[key]);
}

// 8. Object keys, values, entries
console.log("\n--- Object Methods ---");
console.log("Keys:", Object.keys(user));
console.log("Values:", Object.values(user));
console.log("Entries:", Object.entries(user));

// 9. Object cloning (copy)
console.log("\n--- Object Copy ---");
let copy1 = Object.assign({}, user);     // Shallow copy
let copy2 = { ...user };                 // Spread operator
console.log("Copy 1:", copy1);
console.log("Copy 2:", copy2);

// 10. Comparing objects
console.log("\n--- Object Comparison ---");
let objA = { x: 10 };
let objB = { x: 10 };
let objC = objA;

console.log("objA === objB:", objA === objB); // false
console.log("objA === objC:", objA === objC); // true

// 11. Nested objects
console.log("\n--- Nested Object ---");
user.address = {
    street: "MG Road",
    pincode: 110001
};
console.log("Street:", user.address.street);

// 12. Object methods (functions inside object)
console.log("\n--- Object Methods ---");
user.greet = function () {
    return `Hello, my name is ${this.name}`;
};
console.log(user.greet());

// 13. Freezing and sealing objects
console.log("\n--- Freeze & Seal ---");
let product = {
    name: "Laptop",
    price: 60000
};

Object.freeze(product);  // No add/update/delete
product.price = 70000;   // Will not change
console.log("Frozen Object:", product);

let item = {
    name: "Book",
    price: 500
};

Object.seal(item);       // Update allowed, add/delete not
item.price = 550;
item.author = "ABC";     // Not added
console.log("Sealed Object:", item);

// 14. Object destructuring
console.log("\n--- Destructuring ---");
let { name, age, city } = user;
console.log(name, age, city);

// 15. Converting object to JSON
console.log("\n--- Object to JSON ---");
let jsonData = JSON.stringify(user);
console.log(jsonData);

// 16. JSON to Object
console.log("\n--- JSON to Object ---");
let parsedObj = JSON.parse(jsonData);
console.log(parsedObj);

console.log("\n=== END ===");
