//reverse array without using reverse
//using new array
const arr = [11, 42, 23, 74, 35];
let reversed = [];
for (let i = arr.length - 1; i >= 0; i--) {
    reversed.push(arr[i]);
}
console.log(reversed);           
