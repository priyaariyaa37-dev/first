//use map() to convert array of numbrs to their squares
var arr = [1, 2, 3, 4, 5];

var squared = arr.map(function(num) {
    return num * num;
});

console.log(squared);
// [1, 4, 9, 16, 25]