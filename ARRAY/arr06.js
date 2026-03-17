//remove duplicate element from an array (without using set)
//using built-in 
const arr1 = [1, 2, 3, 2, 4, 1, 5];
let unique1 = [];
for (let i = 0; i < arr1.length; i++) {
    if (!unique1.includes(arr1[i])) {
        unique1.push(arr1[i]);
    }
}
console.log(unique1); // [1, 2, 3, 4, 5]

//without using built-in
const arr = [1, 2, 3, 2, 4, 1, 5];
let unique = [];
for (let i = 0; i < arr.length; i++) {
    let isDuplicate = false;
    for (let j = 0; j < unique.length; j++) {
        if (arr[i] === unique[j]) {
            isDuplicate = true;
            break;
        }
    }
    if (!isDuplicate) {
        unique.push(arr[i]);
    }
}
console.log(unique); // [1, 2, 3, 4, 5]