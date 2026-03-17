// Array Functions in JavaScript

let numbers = [10, 20, 30, 40, 50];

console.log("Original Array:", numbers);

// push() – add element at end
numbers.push(60);
console.log("After push:", numbers);

// pop() – remove last element
numbers.pop();
console.log("After pop:", numbers);

// unshift() – add element at start
numbers.unshift(5);
console.log("After unshift:", numbers);

// shift() – remove first element
numbers.shift();
console.log("After shift:", numbers);

// length – size of array
console.log("Array length:", numbers.length);

// map() – create new array
let doubled = numbers.map(num => num * 2);
console.log("After map (double):", doubled);

// filter() – filter elements
let filtered = numbers.filter(num => num > 20);
console.log("After filter (>20):", filtered);

// reduce() – reduce to single value
let sum = numbers.reduce((total, num) => total + num, 0);
console.log("After reduce (sum):", sum);

// find() – find first matching element
let found = numbers.find(num => num === 30);
console.log("After find (30):", found);

// includes() – check existence
console.log("Includes 40?", numbers.includes(40));

// indexOf() – get index
console.log("Index of 30:", numbers.indexOf(30));

// sort() – sort array
let sorted = [...numbers].sort((a, b) => a - b);
console.log("Sorted Array:", sorted);

// reverse() – reverse array
let reversed = [...numbers].reverse();
console.log("Reversed Array:", reversed);

// slice() – extract part of array
let sliced = numbers.slice(1, 4);
console.log("After slice (1 to 4):", sliced);

// splice() – add/remove elements
numbers.splice(2, 1, 99);
console.log("After splice:", numbers);

// join() – convert to string
let joined = numbers.join(" - ");
console.log("After join:", joined);
