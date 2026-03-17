//check if two arrays are equal
//without using built in
function arraysEqual(arr1, arr2) {
    // Step 1: Check length
    if (arr1.length !== arr2.length) {
        return false;
    }
    // Step 2: Compare each element
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
            return false;
        }
    }
    return true;
}
// Example
let a = [1, 2, 3];
let b = [1, 2, 3];
console.log(arraysEqual(a, b));  // true

console.log("NEXT");

//using json strigify(built in)
function arraysEqual(arr1, arr2) {
    return JSON.stringify(arr1) === JSON.stringify(arr2);
}
// Example
let c = [1, 2, 3];
let d = [1, 2, 3];
console.log(arraysEqual(c, d));  // true

