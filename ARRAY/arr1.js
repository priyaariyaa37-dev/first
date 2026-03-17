//Basic Array + Core Methods
const arr = [12,23,34,45,56];
console.log("origanl array:", arr);

//map()
const tripled = arr.map(n=>n*3);
console.log("Maped results:",tripled);

//filter()
const even = arr.filter(n=>n%2===0);
console.log("Filtered result:", even);

//find()
const found= arr.find(n=> n>3);
console.log("Found result:", found);

//reduce()
const sum = arr.reduce((acc,n)=>acc+n,0);
console.log("Reduced result:", sum);


