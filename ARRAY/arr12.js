//find missing number from a sorted sequence
//logically
function findMissing(arr) {
    for (var i = 0; i < arr.length - 1; i++) {
        if (arr[i + 1] !== arr[i] + 1) {
            return arr[i] + 1;
        }
    }
    return "No number missing";
}
// Example
var arr = [1, 2, 3, 5, 6];
console.log(findMissing(arr));   // 4

