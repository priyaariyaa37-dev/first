//filter out even numbers from an array
var arr = [1, 2, 3, 4, 5, 6];

var evenNumbers = arr.filter(function(num) {
    return num % 2 === 0;
});

console.log(evenNumbers);
// [2, 4, 6]
