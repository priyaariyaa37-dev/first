/*find second largest number in an array using built-in*/
const arr1 = [10, 5, 20, 8, 20, 15];
// Remove duplicates
const unique = [...new Set(arr1)];
// Sort in descending order
unique.sort(function(a, b) {
  return b - a;
});
const secLargest = unique[1];
console.log(secLargest); // 15


/*find second largest number in an array without using built-in*/
const arr = [10, 5, 8, 20, 15];
let largest = -Infinity;
let secondLargest = -Infinity;
for (let i = 0; i < arr.length; i++) {

    if (arr[i] > largest) {
        secondLargest = largest;
        largest = arr[i];
    } 
    else if (arr[i] > secondLargest && arr[i] !== largest) {
        secondLargest = arr[i];
    }
}
console.log(secondLargest); // 15