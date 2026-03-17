//count frequency of each element in an array
//using reduce()
const arr1 = [1, 2, 2, 3, 1, 4, 2];
const freq = arr1.reduce((acc1, curr) => {
    acc1[curr] = (acc1[curr] || 0) + 1;
    return acc1;
}, {});
console.log(freq);            // {1: 2, 2: 3, 3: 1, 4: 1}
console.log("code:2");

//using nested loop (without using extra oject)
const arr = [1, 3, 2, 2, 3, 2, 6, 6, 1, 4, 2, 4];
let freq1 = {};
for (let i = 0; i < arr.length; i++) {
    if (freq1[arr[i]]) {
        freq1[arr[i]]++;
    } else {
        freq1[arr[i]] = 1;
    }
}
console.log(freq1);
