//Advanced Array
const arr=[9,87,7,6,5,99];

//some(): checks if any match condition
console.log("Some result:", arr.some(n=> n>4));

//every(): checks if all match condition
console.log("Every result:", arr.every(n=>n>0));

//flat(): flatten nested array
let nested = [1,[2,3],[4,[5,6]],8];
let a= nested.flat();
console.log("Flat result:",a);

//Sort()
// arr.sort();  //wrong way
arr.sort((a,b)=>a-b);  //ascending order
arr.sort((a,b)=>b-a);  //descending order
console.log("Sorting result:", arr);
