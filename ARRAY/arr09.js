//rotate array to right by K positions
//using built-in
const arr1 = [1, 2, 3, 4, 5];
let n = 2;
n = n % arr1.length;  // handle large n
const rotated = arr1.slice(-n).concat(arr1.slice(0, arr1.length - n));
console.log(rotated);          // [4, 5, 1, 2, 3]
 

//manual
const arr = [1, 2, 3, 4, 5];
let k = 2;
k = k % arr.length;
for (let i = 0; i < k; i++) {
    let last = arr[arr.length - 1];
    for (let j = arr.length - 1; j > 0; j--) {
        arr[j] = arr[j - 1];
    }
    arr[0] = last;
}
console.log(arr);      // [4, 5, 1, 2, 3]
