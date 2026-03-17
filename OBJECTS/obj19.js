// Step 1: Create objects
let obj1 = {
    name: "Riya",
    age: 20,
    city: "Amritsar"};
let obj2 = {
    age: 25,
    course: "BCA"};
// Step 2: Merge obj1 then obj2
let merge1 = { ...obj1, ...obj2 };
// Step 3: Reverse merge obj2 then obj1
let merge2 = { ...obj2, ...obj1 };
// Step 4: Display results
console.log("Merge 1 (obj1, obj2):", merge1);
console.log("Merge 2 (obj2, obj1):", merge2);
// Step 5: Compare results
console.log("Are both merges same?",
    JSON.stringify(merge1) === JSON.stringify(merge2)
);
